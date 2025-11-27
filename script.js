// ===========================
// NAVIGATION
// ===========================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinksContainer = document.getElementById('navLinks');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navLinksContainer.classList.remove('active');
    });
});

// ===========================
// THEME TOGGLE
// ===========================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ===========================
// SMOOTH SCROLLING
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
const observeElements = document.querySelectorAll(
    '.timeline-item, .skill-category, .project-card, .education-item, .fact-card, .about-text, .about-facts'
);

observeElements.forEach(el => {
    observer.observe(el);
});

// ===========================
// CONTACT FORM HANDLING
// ===========================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Create temporary success message
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    
    submitButton.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
    submitButton.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        submitButton.innerHTML = '<span>Message Sent!</span><i class="fas fa-check"></i>';
        submitButton.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        
        // Reset form
        contactForm.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            submitButton.innerHTML = originalButtonText;
            submitButton.style.background = '';
            submitButton.disabled = false;
        }, 3000);
        
        // Show success alert
        showNotification('Thank you! Your message has been sent successfully.', 'success');
    }, 1500);
});

// ===========================
// NOTIFICATION SYSTEM
// ===========================
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Inject notification styles if not already present
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: white;
                padding: 1rem 1.5rem;
                border-radius: 1rem;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
                display: flex;
                align-items: center;
                gap: 1rem;
                z-index: 9999;
                animation: slideIn 0.3s ease-out;
                border: 1px solid #e5e7eb;
            }
            
            [data-theme="dark"] .notification {
                background: #1e293b;
                border-color: #334155;
                color: #f1f5f9;
            }
            
            .notification-success i {
                color: #10b981;
                font-size: 1.5rem;
            }
            
            .notification-error i {
                color: #ef4444;
                font-size: 1.5rem;
            }
            
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// ===========================
// DYNAMIC YEAR IN FOOTER
// ===========================
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    footerYear.innerHTML = footerYear.innerHTML.replace('2025', currentYear);
}

// ===========================
// TYPING EFFECT FOR HERO SUBTITLE (OPTIONAL ENHANCEMENT)
// ===========================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect
// const heroSubtitle = document.querySelector('.hero-subtitle');
// const subtitleText = heroSubtitle.textContent;
// heroSubtitle.textContent = '';
// setTimeout(() => {
//     typeWriter(heroSubtitle, subtitleText, 50);
// }, 1000);

// ===========================
// SCROLL PROGRESS INDICATOR
// ===========================
function createScrollProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

createScrollProgressBar();

// ===========================
// LAZY LOAD IMAGES (IF IMAGES ARE ADDED)
// ===========================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

// ===========================
// CONSOLE MESSAGE
// ===========================
console.log('%c👋 Hello! Welcome to my portfolio.', 'color: #3b82f6; font-size: 16px; font-weight: bold;');
console.log('%c🚀 Built with passion for mobile engineering excellence.', 'color: #8b5cf6; font-size: 14px;');
console.log('%c💼 Interested in working together? Let\'s connect!', 'color: #10b981; font-size: 14px;');

// ===========================
// PERFORMANCE MONITORING
// ===========================
window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`⚡ Page loaded in ${(loadTime / 1000).toFixed(2)} seconds`);
});

// ===========================
// KEYBOARD NAVIGATION
// ===========================
document.addEventListener('keydown', (e) => {
    // Press 'T' to toggle theme
    if (e.key === 't' || e.key === 'T') {
        if (!e.target.matches('input, textarea')) {
            themeToggle.click();
        }
    }
    
    // Press 'Escape' to close mobile menu
    if (e.key === 'Escape') {
        mobileMenuToggle.classList.remove('active');
        navLinksContainer.classList.remove('active');
    }
});

// ===========================
// SMOOTH REVEAL ON SCROLL
// ===========================
function revealOnScroll() {
    const reveals = document.querySelectorAll('.timeline-content, .skill-category, .project-card, .fact-card, .education-item');
    
    reveals.forEach((element, index) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initial setup for reveal elements
document.querySelectorAll('.timeline-content, .skill-category, .project-card, .fact-card, .education-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// ===========================
// CURSOR TRAIL EFFECT (OPTIONAL)
// ===========================
function createCursorEffect() {
    const coords = { x: 0, y: 0 };
    const circles = [];
    const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981'];
    
    for (let i = 0; i < 8; i++) {
        const circle = document.createElement('div');
        circle.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: ${colors[i % colors.length]};
            pointer-events: none;
            opacity: ${1 - (i * 0.1)};
            z-index: 9998;
            transition: transform 0.1s ease;
        `;
        circles.push(circle);
        document.body.appendChild(circle);
    }
    
    window.addEventListener('mousemove', (e) => {
        coords.x = e.clientX;
        coords.y = e.clientY;
    });
    
    function animateCircles() {
        let x = coords.x;
        let y = coords.y;
        
        circles.forEach((circle, index) => {
            circle.style.left = x - 4 + 'px';
            circle.style.top = y - 4 + 'px';
            circle.style.transform = `scale(${(circles.length - index) / circles.length})`;
            
            const nextCircle = circles[index + 1] || circles[0];
            x += (nextCircle.offsetLeft - x) * 0.3;
            y += (nextCircle.offsetTop - y) * 0.3;
        });
        
        requestAnimationFrame(animateCircles);
    }
    
    animateCircles();
}

// Uncomment to enable cursor trail effect (desktop only)
// if (window.innerWidth > 1024) {
//     createCursorEffect();
// }

// ===========================
// EASTER EGG - KONAMI CODE
// ===========================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode.splice(-konamiSequence.length - 1, konamiCode.length - konamiSequence.length);
    
    if (konamiCode.join('').includes(konamiSequence.join(''))) {
        activateEasterEgg();
        konamiCode = [];
    }
});

function activateEasterEgg() {
    showNotification('🎮 Konami Code Activated! You found the easter egg!', 'success');
    document.body.style.animation = 'rainbow 2s linear';
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => {
        document.body.style.animation = '';
        style.remove();
    }, 2000);
}

// ===========================
// INITIALIZATION MESSAGE
// ===========================
console.log('%c✨ Portfolio initialized successfully!', 'color: #10b981; font-size: 14px; font-weight: bold;');
console.log('%cPress "T" to toggle dark mode', 'color: #8b5cf6; font-size: 12px;');

// Prevent right-click on images (optional protection)
// document.querySelectorAll('img').forEach(img => {
//     img.addEventListener('contextmenu', e => e.preventDefault());
// });

// ===========================
// ACCESSIBILITY ENHANCEMENTS
// ===========================
// Add focus visible for keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// Add focus styles
const focusStyle = document.createElement('style');
focusStyle.textContent = `
    .keyboard-nav *:focus {
        outline: 3px solid var(--accent-primary);
        outline-offset: 2px;
    }
`;
document.head.appendChild(focusStyle);