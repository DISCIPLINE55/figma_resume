document.addEventListener('DOMContentLoaded', () => {
            const hamburger = document.querySelector('.hamburger-menu');
            const navLinks = document.querySelector('.nav-links');

            // Toggle mobile navigation menu
            if (hamburger && navLinks) {
                hamburger.addEventListener('click', () => {
                    navLinks.classList.toggle('active');
                    // Toggle hamburger icon (e.g., bars to times)
                    const icon = hamburger.querySelector('i');
                    if (icon.classList.contains('fa-bars')) {
                        icon.classList.remove('fa-bars');
                        icon.classList.add('fa-times');
                    } else {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                });

                // Close menu when a nav link is clicked (for smooth scrolling)
                navLinks.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        if (navLinks.classList.contains('active')) {
                            navLinks.classList.remove('active');
                            hamburger.querySelector('i').classList.remove('fa-times');
                            hamburger.querySelector('i').classList.add('fa-bars');
                        }
                    });
                });
            }

            // Optional: Smooth scroll for internal links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });

            // Optional: Basic form submission feedback (for subscribe form)
            const subscribeForm = document.querySelector('.subscribe-form');
            if (subscribeForm) {
                subscribeForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const emailInput = this.querySelector('input[type="email"]');
                    if (emailInput.value) {
                        // In a real application, you would send this to a server
                        console.log('Subscribed with:', emailInput.value);
                        alert('Thank you for subscribing!'); // Using alert for simplicity as per "basic JavaScript"
                        emailInput.value = ''; // Clear input
                    } else {
                        alert('Please enter a valid email address.');
                    }
                });
            }
        });