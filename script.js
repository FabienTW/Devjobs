
const openModalButton = document.querySelector('#open-modal');
const modal = document.querySelector('#myModal');

 openModalButton.addEventListener('click', function() {
        modal.style.display = "block";
        modal.style.backdropFilter = "red";
        console.log("OK")
    });

window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });