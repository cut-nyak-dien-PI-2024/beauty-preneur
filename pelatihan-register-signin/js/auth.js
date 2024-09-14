//Untuk Halaman Registrasi Akun
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simpan data ke localStorage
    localStorage.setItem('user', JSON.stringify({ nama, email, password }));

    alert("Akun berhasil dibuat!");
    window.location.href = 'sign-in.html'; // Redirect ke halaman sign-in
});

//Untuk Halaman Sign In
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;

    // Ambil data pengguna dari localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === emailInput && user.password === passwordInput) {
        alert(`Selamat datang, ${user.nama}!`);
        // Redirect ke halaman berikutnya (misalnya halaman pembelian)
        window.location.href = `pelatihan.html`;
    } else {
        alert('Email atau password salah atau belum terdaftar!');
    }
});
/*document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Dummy validasi login
    if (email === "user@example.com" && password === "password123") {
        // Simpan data user ke localStorage setelah login berhasil
        const user = {
            nama: "User Name",  // Data nama bisa diambil dari database
            email: email,
            whatsapp: "081234567890"  // Data WhatsApp juga bisa diambil dari database
        };
        localStorage.setItem('user', JSON.stringify(user));

        // Redirect ke halaman pembelian
        window.location.href = "pelatihan.html"; 
    } else {
        document.getElementById('error-message').textContent = "Email atau password salah!";
    }
});*/

