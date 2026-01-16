// FitForge Gym - Main JavaScript

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Active Link Highlighting
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-2xl');
    } else {
        nav.classList.remove('shadow-2xl');
    }
});

// Form Validation (for Contact Page)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Success message
        alert('Thank you! We will contact you soon.');
        contactForm.reset();
    });
}

// OOPS Approach - Component Class (Example for future use)
class UIComponent {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }
    
    render() {
        throw new Error('Render method must be implemented');
    }
}

// Example: Trainer Card Component
class TrainerCard extends UIComponent {
    constructor(containerId, data) {
        super(containerId);
        this.name = data.name;
        this.specialization = data.specialization;
        this.experience = data.experience;
        this.image = data.image;
    }
    
    render() {
        if (!this.container) return;
        
        const cardHTML = `
            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <img src="${this.image}" alt="${this.name}" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-2xl font-heading font-bold mb-2">${this.name}</h3>
                    <p class="text-fitness-orange font-semibold mb-2">${this.specialization}</p>
                    <p class="text-gray-600">${this.experience} years experience</p>
                </div>
            </div>
        `;
        
        this.container.innerHTML += cardHTML;
    }
}

console.log('FitForge Gym - JavaScript Loaded Successfully');
