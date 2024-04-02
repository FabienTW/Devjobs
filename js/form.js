const modal = document.querySelector('#myModal');
const openModalButton = document.querySelector('#open-modal');
const overlay = document.querySelector('#overlay');

function openModal() {
    modal.classList.add('active');
    overlay.classList.add('active');
    document.body.classList.add('modal-open'); 
}

function closeModal() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('modal-open'); 
} 

openModalButton.addEventListener('click', openModal);
overlay.addEventListener('click', closeModal);

const titleSearchDesktop = document.querySelector('#title-search-desktop');
const placeholderText = window.innerWidth <= 768 ? "Filter by title..." :   "Filter by title, companies, expertise…";
window.addEventListener('resize', function() {
  
    titleSearchDesktop.setAttribute('placeholder', placeholderText);
});

window.dispatchEvent(new Event('resize'));