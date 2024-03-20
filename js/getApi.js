

// Fonction pour récupérer les données de l'API
async function fetchJobsData() {
    console.log('Début de la récupération des données...');

    // Afficher l'indicateur de chargement
    showLoadingIndicator();

    try {
        const response = await fetch('https://ecf-dwwm.cefim-formation.org/api/jobs');
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
        }
        const data = await response.json();

        console.log('Données récupérées avec succès :', data);

        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données : ', error);
        throw error; // Propager l'erreur pour que le code appelant puisse la gérer
    } finally {
        // Masquer l'indicateur de chargement une fois les données chargées ou en cas d'erreur
        console.log('Masquage de l\'indicateur de chargement...');
        hideLoadingIndicator();
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


