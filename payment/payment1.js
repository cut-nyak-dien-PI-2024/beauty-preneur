//add event listener submit
document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    //ambil data dari form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const whatsapp = document.getElementById("whatsapp").value;

   // Redirect ke halaman berikutnya setelah validasi berhasil
   window.location.href = "payment2.html";  // Ganti dengan URL halaman tujuan
});
// Select all trash icons with the 'delete-icon' class
const trashIcons = document.querySelectorAll('.delete-icon');

// Loop through each trash icon and add an event listener
trashIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        // Find the closest parent with the 'order-item' class and remove it
        const orderItem = icon.closest('.order-item');
        orderItem.remove();  // Remove the entire order item
    });
});
//function untuk menghitung dan update total
function updateTotal(){
    //Get All Order Items
    const items=document.querySelectorAll(`.order-item`);
    //initialize total
    let total=0;
    items.forEach(item=>{
        //Get the price, quantity, and subtotal untuk item yang ada
        const priceText =  item.querySelector(`.item-quantity`).children[0].textContent.trim();
        const quantityText = item.querySelector(`.item-quantity`).children[1].textContent.trim();
        const subtotalText =  item.querySelector(`.item-quantity`).textContent.trim();

        //Remove `RP` and Convert to Number
        const price = parseInt(priceText.replace(`Rp `,``).replace(`.`,``));
        const quantity = parseInt(quantityText.replace(`x`).trim());
        const subtotal=parseInt(subtotalText.replace(`Rp `,``).replace(`.`,``));

        //check apakah subtotal sama dengan kalkulator value
        const calculatedSubtotal=price*quantity;
        if (calculatedSubtotal !== subtotal){
            item.querySelector(`#subtotal`).textContent = `Rp $calculatedSubtotal.toLocaleString()}`;
        }
        //add to total
        total += calculatedSubtotal;
    });
    //update total di summary
    document.querySelector(`#subtotal`).textContent=`Rp ${total.toLocaleString()}`
    document.querySelector(`.total`).textContent = `Total: Rp ${total.toLocaleString()}`
}
//call the function to update total
updateTotal();
document.addEventListener('DOMContentLoaded', function() {
    const user = JSON.parse(localStorage.getItem('user'));

   /* // Jika pengguna sudah login, isi otomatis form customer info
    if (user) {
        document.getElementById('nama').value = user.nama;
        document.getElementById('email').value = user.email;
        document.getElementById('whatsapp').value = user.whatsapp || '';
    }
});*/


// Jika data user ada, masukkan ke dalam form
if (user) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const whatsappInput = document.getElementById('whatsapp');

    console.log("Elemen Input:", nameInput, emailInput, whatsappInput); // Untuk debugging

    // Pastikan elemen input ditemukan
    if (nameInput && emailInput && whatsappInput) {
        nameInput.value = user.nama || '';
        emailInput.value = user.email || '';
        whatsappInput.value = user.whatsapp || '';
    } else {
        console.error("Salah satu elemen input tidak ditemukan!");
    }
} else {
    console.error("Tidak ada data user di localStorage!");
}


    // Lanjutkan proses pembelian, ambil data dari form atau localStorage
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const whatsapp = document.getElementById('whatsapp').value;

    alert(`Terima kasih, ${nama}. Pesanan Anda akan segera diproses!`);
});
