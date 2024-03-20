




// Fonction pour créer une carte d'emploi à partir des données
function createJobCard(jobData) {
    const template = document.querySelector('#job-card-template');
    const clone = template.content.cloneNode(true);

    // Remplir les données de la carte d'emploi
    clone.querySelector('.jobs-title').textContent = jobData.position;
    clone.querySelector('.jobs-company').textContent = jobData.company;
    clone.querySelector('.jobs-location').textContent = jobData.location;
    clone.querySelector('.jobs-posted-time').textContent = timeSince(jobData.postedAt);
    clone.querySelector('.jobs-type').textContent = jobData.contract;
    clone.querySelector('.jobs-logo').src = "https://ecf-dwwm.cefim-formation.org" + jobData.logo;
    console.log("https://ecf-dwwm.cefim-formation.org" + jobData.logo)
    clone.querySelector('.jobs-logo').style.backgroundColor = jobData.logoBackground;

    return document.importNode(clone, true); // Utiliser document.importNode pour cloner le contenu du template
}