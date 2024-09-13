document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Konfirmasi Pembayaran Berhasil!');
});
const whastappButton = document.getElementsByClassName('whatsapp-button');

Array.from(whastappButton).forEach(button=>{
    button.addEventListener(`click`,()=>{
    //Nomor telepon tujuan dengan pesan yang ingin dikirim
    const phoneNumber = `6285259396969`;
    const message = `Halo saya ingin konfirmasi pesanan saya!`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    //mengarah ke URL whatsapp
    window.open(whatsappURL,`_blank`);
});
});