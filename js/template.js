
function createJobCard(jobData) {
    const template = document.querySelector('#job-card-template');
    const clone = template.content.cloneNode(true);

    clone.querySelector('.jobs-title').textContent = jobData.position;
    clone.querySelector('.jobs-title').id = jobData.id
    clone.querySelector('.jobs-company').textContent = jobData.company;
    clone.querySelector('.jobs-location').textContent = jobData.location;
    clone.querySelector('.jobs-posted-time').textContent = timeSince(jobData.postedAt);
    clone.querySelector('.jobs-type').textContent = jobData.contract;
    clone.querySelector('.jobs-logo').src = "https://ecf-dwwm.cefim-formation.org" + jobData.logo;
    console.log("https://ecf-dwwm.cefim-formation.org" + jobData.logo)
    clone.querySelector('.jobs-logo').style.backgroundColor = jobData.logoBackground;

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        const jobCard = clone.querySelector('.jobs-card');
        const jobTitle = clone.querySelector('.jobs-title');
        jobCard.classList.add('jobs-card-darkmode');
        jobTitle.classList.add('jobs-title-darkmode');
        
    }

    return document.importNode(clone, true); 
}

function addJobCardsToDOM(jobDataArray) {
    const jobCardsContainer = document.getElementById('job-cards-container');
    jobDataArray.forEach(jobData => {
        const jobCard = createJobCard(jobData);
        jobCardsContainer.appendChild(jobCard);
    });
}



