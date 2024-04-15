// Check if the user has accepted cookies
function checkCookiesAccepted() {
    return document.cookie.includes('cookiesAccepted=true');
}

// Show or hide the cookies popup based on user's acceptance
function showCookiesPopup() {
    const cookiesPopup = document.getElementById('cookiesPopup');
    if (!checkCookiesAccepted()) {
        cookiesPopup.style.display = 'block';
    } else {
        cookiesPopup.style.display = 'none';
    }
}

// Set cookiesAccepted cookie when the user clicks Accept
function acceptCookies() {
    document.cookie = 'cookiesAccepted=true; max-age=' + (365 * 24 * 60 * 60); // Cookie expires in 1 year
    showCookiesPopup(); // Hide the cookies popup after acceptance
    document.getElementById('cookiesPopup').style.display = 'none'; // Hide the cookies popup immediately after accepting
}


// Event listener for page load to show cookies popup if necessary
window.addEventListener('load', showCookiesPopup);