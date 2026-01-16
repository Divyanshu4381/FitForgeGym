// Contact Form with EmailJS Integration
// Initialize EmailJS (User needs to add their own credentials)
(function () {
    // Replace with your EmailJS credentials
    // Get free account at https://www.emailjs.com/
    // emailjs.init("YOUR_PUBLIC_KEY");
})();

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validation
        if (!name || !email || !message) {
            showStatus('Please fill in all required fields', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showStatus('Please enter a valid email address', 'error');
            return;
        }

        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // OPTION 1: EmailJS Integration (Recommended)
        // Uncomment below after setting up EmailJS account
        /*
        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
            from_name: name,
            from_email: email,
            phone: phone,
            message: message,
        })
        .then(function(response) {
            showStatus('Message sent successfully! We will contact you soon.', 'success');
            contactForm.reset();
        }, function(error) {
            showStatus('Failed to send message. Please try WhatsApp or call us.', 'error');
        })
        .finally(function() {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
        */

        // OPTION 2: Fallback - Redirect to WhatsApp (Currently Active)
        const whatsappMessage = `Hi, I'm ${name}. Email: ${email}. Phone: ${phone || 'N/A'}. Message: ${message}`;
        const whatsappURL = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`;

        showStatus('Redirecting to WhatsApp...', 'success');

        setTimeout(() => {
            window.open(whatsappURL, '_blank');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            showStatus('You can also call us at +91 98765 43210', 'success');
        }, 1000);

        // OPTION 3: Mailto Fallback (Alternative)
        // Uncomment if you prefer email client
        /*
        const mailtoLink = `mailto:info@fitforgegym.com?subject=Inquiry from ${name}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`)}`;
        window.location.href = mailtoLink;
        showStatus('Opening your email client...', 'success');
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        */
    });
}

function showStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = type === 'success' ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold';

    setTimeout(() => {
        if (type === 'success') {
            formStatus.textContent = '';
        }
    }, 5000);
}
