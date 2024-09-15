const redirectLinks = {
    signIn: "sign-in.html",
    pelatihan: "/index.html"
}

// Untuk Halaman Registrasi Akun
const registerForm = document.getElementById("register");
if (registerForm != null) {
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
    
        const nama = document.getElementById('nama').value;
        const email = document.getElementById('email').value;
        const whatsapp = document.getElementById('whatsapp').value;
        const password = document.getElementById('password').value;
    
        // Simpan data ke localStorage
        localStorage.setItem('user', JSON.stringify({ nama, email, whatsapp, password }));
    
        alert("Akun berhasil dibuat!");
        window.location.href = redirectLinks.signIn;
    });
}


// Untuk Halaman Sign In
const signInForm = document.getElementById('sign-in')
if (signInForm != null) {
    signInForm.addEventListener('submit', function(event) {
        event.preventDefault();
    
        const emailInput = document.getElementById('email').value;
        const passwordInput = document.getElementById('password').value;
        const user = JSON.parse(localStorage.getItem('user'));
    
        if (user && user.email === emailInput && user.password === passwordInput) {
            alert(`Selamat datang, ${user.nama}!`);
            window.location.href = redirectLinks.pelatihan;
        } else {
            alert('Email atau password salah atau belum terdaftar!');
        }
    });
}