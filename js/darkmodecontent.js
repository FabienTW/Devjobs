const toggleSwitch = document.querySelector('.checkbox');
const main = document.querySelector('main');



toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
    const currentTheme = e.target.checked ? 'dark' : 'light';
    applyTheme(currentTheme);
}

function applyTheme(theme) {
    
const detailsHero = document.querySelector('.jobsinfos-content');
const descriptionContainer = document.querySelector('.description-container')
const btnCompany = document.querySelector('.btn-company')
const companyName = document.querySelector('.name')
const position = document.querySelector('.jobs-description-title')
const h3 = document.querySelector('.h3requirement')
const h3do = document.querySelector('.h3do')
    console.log('appel?')
   

    if (theme === 'dark') {
        
        main.classList.add('main-darkmode');
        document.documentElement.setAttribute('data-theme', 'dark');
    detailsHero.classList.add('input-darkmode');
    descriptionContainer.classList.add('input-darkmode');
    btnCompany.classList.add('btn-companydark');
    companyName.classList.add('white');
    position.classList.add('white');
    h3.classList.add('white')
    h3do.classList.add('white')
        

    } else {
        main.classList.remove('main-darkmode');
        document.documentElement.setAttribute('data-theme', 'light');
    detailsHero.classList.remove('input-darkmode');
    descriptionContainer.classList.remove('input-darkmode');
    btnCompany.classList.remove('btn-companydark');
    companyName.classList.remove('white');
    position.classList.remove('white');
    h3.classList.remove('white')
    h3do.classList.remove('white')
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
