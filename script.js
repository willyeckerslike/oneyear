function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
    });

    const targetSection = document.getElementById(sectionId);
    targetSection.classList.remove('hidden');
    setTimeout(() => {
        targetSection.classList.add('active');
    }, 50);

    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    updateProgressBar(sectionId);
}

function updateProgressBar(sectionId) {
    const progressBar = document.getElementById('progressBar');
    let percentage = 0;
    switch(sectionId) {
        case 'cover': percentage = 0; break;
        case 'months': percentage = 50; break;
        case 'back-cover': percentage = 100; break;
    }
    progressBar.style.width = percentage + '%';
}

// Add hover effects
document.querySelectorAll('.month-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-12px) scale(1.03)';
        this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
    });
});

// Play music after user interaction (required by most browsers)
window.addEventListener('load', () => {
    const music = document.getElementById('bg-music');
    music.play().catch(e => console.log("Autoplay blocked:", e));
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateProgressBar('cover');
});
