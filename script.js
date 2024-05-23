document.addEventListener("DOMContentLoaded", function() {
    const instagramLink = document.getElementById('instagram-link');
    const text = '> Code By Highest™';
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            instagramLink.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 150);
        }
    }

    instagramLink.innerHTML = ''; // Clear the text initially
    typeEffect();
});