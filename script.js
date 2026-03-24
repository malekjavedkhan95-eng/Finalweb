document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Typed.js Setup (Hinglish Strings)
    var typed = new Typed('#typed', {
        strings: ['mast websites.', 'creative content.', 'naye ideas.', 'Anish.ai'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        cursorChar: '_',
    });

    // 2. Mobile Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if(navLinks.classList.contains('active')){
            hamburger.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // 3. Scroll Reveal Animations using Intersection Observer
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        scrollObserver.observe(element);
    });
});
    // 4. 3D Tilt Effect for Cards
    VanillaTilt.init(document.querySelectorAll(".glass-card"), {
        max: 15,          // Card kitna jhukega (degrees)
        speed: 400,       // Animation ki speed
        glare: true,      // Sheeshe jaisi chamak (shine) aayegi
        "max-glare": 0.2, // Chamak kitni tez hogi (0 to 1)
    });
