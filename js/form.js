


const openModalButton = document.querySelector('#open-modal');
const modal = document.querySelector('#myModal');
const modalBackground = document.querySelector('#modalBg')

 openModalButton.addEventListener('click', function() {
        modal.style.display = "block";
        modalBackground.style.display = "block"
        modalBackground.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    });

window.addEventListener('click', function(event) {
        if (event.target === modalBackground) {
            modal.style.display = "none";
            modalBackground.style.display = "none"
        }
    });