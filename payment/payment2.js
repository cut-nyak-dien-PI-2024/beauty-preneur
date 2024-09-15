/*=============== is User Login ?  ===============*/

const userData = localStorage.getItem("user");
let getContainerNavbar = document.getElementById("nav__list");
let getElementExit = document.getElementById("exit");
let getElementSignIn = document.getElementById("signin");
let getElementSignUp = document.getElementById("signup");

if (userData !== null) {
  getElementSignIn.style.display = "none";
  getElementSignUp.style.display = "none";
  getElementExit.style.display = "block";
} else {
  getElementSignIn.style.display = "block";
  getElementSignUp.style.display = "block";
  getElementExit.style.display = "none";
}

getElementExit.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "/pelatihan-register-signin/sign-in.html";
  localStorage.removeItem("user");
});



document.getElementById("confirm-btn").addEventListener("click", function () {
  // Redirect ke halaman berikutnya setelah validasi berhasil
  window.location.href = "payment3.html"; // Ganti dengan URL halaman tujuan
});

document.getElementById("back-btn").addEventListener("click", function () {
  window.history.back();
});
