document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.classList.remove('hidden');

    // Simulate login process for 3 seconds
    setTimeout(() => {
        loadingOverlay.classList.add('hidden');
        alert('Login successful!');
    }, 3000);
});
