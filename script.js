function subscribeNewsletter() {
    const email = document.getElementById('email').value;
    if (email) {
        alert(`Thank you for subscribing, ${email}!`);
    } else {
        alert('Please enter a valid email address.');
    }
}

document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        alert(`Welcome, ${username}!`);
    } else {
        alert('Please enter your username and password.');
    }
});
