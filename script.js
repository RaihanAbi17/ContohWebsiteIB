// Mengambil elemen tombol dengan ID (DOM Manipulation)
const darkModeBtn = document.getElementById('dark-mode-btn');

// Menambahkan Event Listener untuk fitur Dark Mode
darkModeBtn.addEventListener('click', function() {
    // Menambah atau menghapus class 'dark-theme' pada elemen body
    document.body.classList.toggle('dark-theme');
    
    // Logika sederhana untuk mengubah teks tombol
    if (document.body.classList.contains('dark-theme')) {
        darkModeBtn.textContent = '☀️';
    } else {
        darkModeBtn.textContent = '🌙';
    }
});

function showAlert() {
    alert("Terima kasih! Anda akan diarahkan untuk mengirim email ke Raihan.");
    window.location.href = "mailto:raihanabinugroho11@gmail.com";
}
