document.addEventListener("click", async function(e) {
    if (e.target.classList.contains('jobs-title')) {
        e.preventDefault();
        const idOffre = e.target.id;
        console.log(idOffre)
        localStorage.setItem('offreId', idOffre); // Stocker l'ID dans localStorage
        window.location.href = 'content.html'; // Rediriger vers la nouvelle page
    }
});











