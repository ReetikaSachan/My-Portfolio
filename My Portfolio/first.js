// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="/"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    
    // You can add your form submission logic here
    // For example, sending data to a server
    
    // Clear form after submission
    this.reset();
    alert('Thank you for your message! I will get back to you soon.');
});

// Add active class to navigation links on scroll
window.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.nav-links a');
    
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
});
