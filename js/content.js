


document.addEventListener("DOMContentLoaded", async function() {
    const idOffre = localStorage.getItem('offreId'); // Récupérer l'ID depuis localStorage
    console.log(idOffre)

    // Récupérer la préférence de thème de l'utilisateur depuis le local storage
    const currentTheme = localStorage.getItem('theme');

    const apiUrl = `https://ecf-dwwm.cefim-formation.org/api/job/${idOffre}`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
        }
        const responseData = await response.json();
        
        // Remplir le template avec les informations obtenues de l'API
        document.querySelector('.jobs-description-title').textContent = responseData.position;
        document.querySelector('.name').textContent = responseData.company;
        document.querySelector('.jobs-description-logo').src = "https://ecf-dwwm.cefim-formation.org" + responseData.logo;
        document.querySelector('.jobs-description-logo').style.backgroundColor = responseData.logoBackground;
        document.querySelector('.link').textContent = responseData.website
        document.querySelector('.jobs-description-type').textContent = responseData.contract
        document.querySelector('.link-apply').href = responseData.apply
        document.querySelector('.jobs-description-requirements').textContent = responseData.description
        document.querySelector('.role-textcontent').textContent = responseData.role.content
        document.querySelector('.jobs-description-posted-time').textContent = timeSince(responseData.postedAt)
        document.querySelector('.jobs-description-location').textContent = responseData.location;
        console.log (responseData.location)

        const requirementsList = document.querySelector('.ulist');
        responseData.requirements.items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            li.className = 'list-requirement'

            requirementsList.appendChild(li);
        });

        const roleList = document.querySelector('.olist');
        responseData.role.items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            li.className = 'list-requirement'
            roleList.appendChild(li);
        });

        if (currentTheme === 'dark') {
            applyDarkTheme();
        } else {
            applyLightTheme();
        }

    } catch (error) {
        console.error('Erreur lors de la récupération des détails de l\'offre d\'emploi : ', error);
    }
});



const detailsHero = document.querySelector('.jobsinfos-content');
const descriptionContainer = document.querySelector('.description-container')
const btnCompany = document.querySelector('.btn-company')
const companyName = document.querySelector('.name')
const position = document.querySelector('.jobs-description-title')
const h3 = document.querySelector('.h3requirement')
const h3do = document.querySelector('.h3do')

function applyDarkTheme() {
   
    document.documentElement.setAttribute('data-theme', 'dark');
    detailsHero.classList.add('input-darkmode');
    descriptionContainer.classList.add('input-darkmode');
    btnCompany.classList.add('btn-companydark');
    companyName.classList.add('white');
    position.classList.add('white');
    h3.classList.add('white')
    h3do.classList.add('white')
}

function applyLightTheme() {
    document.documentElement.setAttribute('data-theme', 'light');
    detailsHero.classList.remove('input-darkmode');
    descriptionContainer.classList.remove('input-darkmode');
    btnCompany.classList.remove('btn-companydark');
    companyName.classList.remove('white');
    position.classList.remove('white');
    h3.classList.remove('white')
    h3do.classList.remove('white')
}
