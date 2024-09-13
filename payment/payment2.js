document.getElementById('confirm-btn').addEventListener('click', function() {
       // Redirect ke halaman berikutnya setelah validasi berhasil
   window.location.href = "payment3.html";  // Ganti dengan URL halaman tujuan
});

document.getElementById('back-btn').addEventListener('click', function() {
    window.history.back();
});
