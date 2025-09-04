document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Form ka default submit hone se rokta hai

    const loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.classList.remove('hidden'); // Loading screen dikhata hai

    // Nakli login process, 2-3 seconds ka delay.
    // Real application mein yahaan server request (API call) jayega.
    setTimeout(() => {
        // Loading screen ko hide karta hai
        loadingOverlay.classList.add('hidden');

        // Aap yahaan par user ko dashboard ya agle page par redirect kar sakte hain
        alert('Login successful!');
        // window.location.href = 'dashboard.html';
    }, 3000); // 3 seconds ka delay
});
