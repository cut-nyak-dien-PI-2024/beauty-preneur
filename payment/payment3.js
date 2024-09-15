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

document
  .getElementById("payment-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Konfirmasi Pembayaran Berhasil!");
  });
const whastappButton = document.getElementsByClassName("whatsapp-button");

Array.from(whastappButton).forEach((button) => {
  button.addEventListener(`click`, () => {
    //Nomor telepon tujuan dengan pesan yang ingin dikirim
    const phoneNumber = `6285259396969`;
    const message = `Halo saya ingin konfirmasi pesanan saya!`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    //mengarah ke URL whatsapp
    window.open(whatsappURL, `_blank`);
  });
});
