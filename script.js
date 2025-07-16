document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    // Ensure menu is closed by default
    navMenu.classList.remove('active');
    
    navToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        if (!navMenu.classList.contains('active')) {
            navMenu.classList.add('active');
        }
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside (anywhere except hamburger)
    document.addEventListener('click', function(e) {
        if (navMenu.classList.contains('active') && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(17, 24, 39, 0.98)';
        } else {
            header.style.background = 'rgba(17, 24, 39, 0.95)';
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            const element = document.querySelector(target);
            if (element) {
                const headerOffset = 80;
                const elementPosition = element.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navigation highlight on scroll
    const navItems = document.querySelectorAll('.nav-menu a');
    const sections = document.querySelectorAll('section[id]');
    
    const highlightNav = () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', highlightNav);
});