document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault();
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

