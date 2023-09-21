// Ambil semua elemen tab dan tab content
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Tambahkan event listener untuk setiap tombol tab
tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Hapus kelas 'active' dari semua tombol tab dan konten tab
        tabButtons.forEach((btn) => {
            btn.classList.remove('active');
        });
        tabContents.forEach((content) => {
            content.classList.remove('active');
        });

        // Tambahkan kelas 'active' pada tombol tab yang diklik
        button.classList.add('active');

        // Temukan konten tab yang sesuai dan tambahkan kelas 'active'
        const tabId = button.getAttribute('data-tab');
        const activeTab = document.getElementById(tabId);
        activeTab.classList.add('active');
    });
});

// Aktifkan tab pertama saat halaman dimuat
tabButtons[0].click();
