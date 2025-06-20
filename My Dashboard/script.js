const form = document.getElementById('loginForm');
const message = document.getElementById('loginMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = {email, name: "Student"};
    sessionStorage.setItem('loggedInUser', JSON.stringify(user));
    window.location.href = 'Dashboard.html';
})