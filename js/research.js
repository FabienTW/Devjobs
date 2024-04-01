
document.querySelector('#title-search').addEventListener('input', async (e) => {
    const text = e.target.value;
    try {
        const searchData = await ResearchJobs(text);
        displayJobs(searchData);
    } catch (error) {
        console.error('Erreur lors de la recherche des emplois : ', error);
    }
});

document.querySelector('#submit-form').addEventListener('click', async () => {
    const text = document.querySelector('#title-search').value;
    try {
        const searchData = await ResearchJobs(text);
        displayJobs(searchData);
    } catch (error) {
        console.error('Erreur lors de la recherche des emplois : ', error);
    }
});
document.querySelector('#modalclose-btn').addEventListener('click', async () => {
    const location = document.querySelector('#location-search').value;
    const fulltime = document.querySelector('#cbx').checked ? 1 : 0;

    try {
        const searchData = await ResearchJobs('',location, fulltime);
        console.log(location,fulltime)
        displayJobs(searchData);
    } catch (error) {
        console.error('Erreur lors de la recherche des emplois : ', error);
    }
});



async function ResearchJobs(text = '', location = '', fulltime = 0, offset = 0, limit = 12) {
    let apiUrl = `https://ecf-dwwm.cefim-formation.org/api/jobs/search?offset=${offset}&limit=${limit}`;
    if (text) {
        apiUrl += `&text=${text}`;
    }
    if (location) {
        apiUrl += `&location=${location}`;
    }
    if (fulltime === 1) {
        apiUrl += `&fulltime=1`;
    }

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
        }

        const responseData = await response.json();

        return responseData;
    } catch (error) {
        console.error('Erreur lors de la recherche des emplois : ', error);
        throw error;
    }

}
function displayJobs(searchData) {
    console.log("ca marche")
    const container = document.querySelector('#job-cards-container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    searchData.jobs.forEach(job => {
        const card = createJobCard(job);
        container.appendChild(card);
    });
}
