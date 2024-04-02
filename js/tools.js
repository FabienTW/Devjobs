

function showLoadingIndicator() {
    document.getElementById('loading-indicator').style.display = 'block';
}

function hideLoadingIndicator() {
    document.getElementById('loading-indicator').style.display = 'none';
}

function timeSince(timestamp) {
    const seconds = Math.floor((new Date() - timestamp) / 1000);
    let interval = Math.floor(seconds / 3600);

    if (interval >= 24 * 7 * 4 * 12) {
        const months = Math.floor(interval / (24 * 7 * 4 * 12));
        return months + 'm ago';
    }
    if (interval >= 24 * 7 * 4) {
        const weeks = Math.floor(interval / (24 * 7 * 4));
        return weeks + 'w ago';
    }
    if (interval >= 24) {
        const days = Math.floor(interval / 24);
        return days + 'd ago';
    }
    return interval +  'h ago';
}



