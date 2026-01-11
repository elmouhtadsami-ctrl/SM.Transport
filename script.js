// Function bach t-holl l-Pop-up
function openBooking(carName) {
    const modal = document.getElementById('bookingModal');
    const carText = document.getElementById('selectedCarName');
    const waLink = document.getElementById('whatsappLink');
    
    // N-bdlo l-unwan f l-modal
    carText.innerText = "Vehicle: " + carName;
    
    // N-qaddo l-link dyal WhatsApp (Beddel had l-nmra b dyalk)
    const myNumber = "212600000000"; 
    const message = encodeURIComponent("Hello SM.Transport, I want to book the: " + carName);
    waLink.href = "https://wa.me/" + myNumber + "?text=" + message;
    
    // N-biynou l-modal
    modal.classList.remove('hidden');
}

// Function bach t-sed l-modal
function closeModal() {
    const modal = document.getElementById('bookingModal');
    modal.classList.add('hidden');
}

// Sed l-modal ila clickiti berra
window.onclick = function(event) {
    const modal = document.getElementById('bookingModal');
    if (event.target == modal) {
        closeModal();
    }
}
