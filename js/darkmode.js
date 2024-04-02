const toggleSwitch = document.querySelector('.checkbox');
const main = document.querySelector('main');
const iconFilter = document.querySelector('.icon-filter');
const searchInput = document.querySelector('.form-input');
const titleSearch = document.querySelector('.title-search');
const modalBg = document.querySelector('.modal');
const inputLocationBg = document.querySelector('.input-location');
const inputLocationP = document.querySelector('.fts-content');
const detailsHero = document.querySelector('.jobsinfos-content');
const inputFormDesktop = document.querySelector('.search-bar-desktop-tablet-container')
const searchinput= document.querySelector('#location-search-desktop')
const titleInput= document.querySelector('#title-search-desktop')
const imglocation = document.querySelector('#bgimg');
const searchlocation = document.querySelector('#dgimg');


toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
    const currentTheme = e.target.checked ? 'dark' : 'light';
    applyTheme(currentTheme);
}

function applyTheme(theme) {
    console.log('appel?')
    const jobCards = document.querySelectorAll('.jobs-card');     
    const jobTitles = document.querySelectorAll('.jobs-title');

    if (theme === 'dark') {
        console.log('ok')
        main.classList.add('main-darkmode');
        modalBg.classList.add('input-darkmode');
        inputFormDesktop.classList.add('input-darkmode');
        inputLocationBg.classList.add('input-darkmode')
        inputLocationP.classList.add('white')
        iconFilter.classList.add('filter-svg');
        searchInput.classList.add('input-darkmode');
        titleSearch.classList.add('input-darkmode');
        searchinput.classList.add('input-darkmode');
        titleInput.classList.add('input-darkmode');
        imglocation.style.backgroundColor = '#19202D'; 
        searchlocation.style.backgroundColor = '#19202D'; 

       

        jobCards.forEach(card => {
            card.classList.add('jobs-card-darkmode');
        });

        jobTitles.forEach(title => {
            title.classList.add('jobs-title-darkmode');
        });
    } else {
        main.classList.remove('main-darkmode');
        iconFilter.classList.remove('filter-svg');
        searchInput.classList.remove('input-darkmode');
        titleSearch.classList.remove('input-darkmode');
        searchinput.classList.remove('input-darkmode');
        titleInput.classList.remove('input-darkmode');
        inputFormDesktop.classList.remove('input-darkmode');
        imglocation.style.backgroundColor = 'white'; 
        searchlocation.style.backgroundColor = 'white';
      

        jobCards.forEach(card => {
            card.classList.remove('jobs-card-darkmode');
        });

        jobTitles.forEach(title => {
            title.classList.remove('jobs-title-darkmode');
        });
    }

    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme); 
}

// On retient le choix de l'utilisateur dans le localStorage

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    applyTheme(currentTheme);
    toggleSwitch.checked = (currentTheme === 'dark');
} else {
    applyTheme('light');
}
