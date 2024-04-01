

// Fonction pour récupérer les données de l'API
let offset = 12; 
let totalJobs = 0

async function fetchJobsData(offset) {
    const apiUrl = `https://ecf-dwwm.cefim-formation.org/api/jobs?offset=${offset}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données');
    }
    console.log(response.json)
    return await response.json();
    
    
}

async function loadMoreJobs() {
    try {
       
        const responseData = await fetchJobsData(offset);
        const jobsData = responseData.jobs;
        
        if (jobsData && Array.isArray(jobsData)) {
            const container = document.querySelector('#job-cards-container');

            jobsData.forEach(job => {
                const card = createJobCard(job);
                container.appendChild(card);
            });

            offset += 12; 

            if ( offset>= totalJobs) {}
        } else {
            console.error('Aucun emploi n\'a été trouvé.');
        }
    } catch (error) {
        console.error('Erreur lors du chargement des emplois : ', error);
    }
}


// Fonction pour afficher les cartes d'emploi avec les données de l'API



async function displayJobCardsFromAPI() {
    console.log('Affichage des cartes d\'emploi à partir de l\'API...');

    try {
        const jobsData = await fetchJobsData();

        if (jobsData && Array.isArray(jobsData.jobs)) {
            const container = document.querySelector('#job-cards-container');

            jobsData.jobs.forEach(job => {
                const card = createJobCard(job);
                container.appendChild(card);
            });
        } else {
            console.error('Aucun emploi n\'a été trouvé.');
        }
    } catch (error) {
        console.error('Erreur lors de l\'affichage des cartes d\'emploi à partir de l\'API : ', error);
    }
}



// Appel de la fonction pour afficher les cartes d'emploi avec les données de l'API
displayJobCardsFromAPI();



// On lance la fonction loadMorejobs au clic du bouton loadmore


document.querySelector('.btn-loadmore').addEventListener('click', loadMoreJobs);