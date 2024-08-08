// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    // Mostrar la barra de cookies si no se ha aceptado previamente
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookieBanner').style.display = 'block';
    }

    // Manejar la aceptación de cookies
    document.getElementById('acceptCookies').addEventListener('click', function () {
        localStorage.setItem('cookiesAccepted', 'true');
        document.getElementById('cookieBanner').style.display = 'none';
    });
});