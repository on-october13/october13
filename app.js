// Select all section elements
const sections = document.querySelectorAll('.section');

// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // If the section is in view
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); // Add active class
        } else {
            entry.target.classList.remove('active'); // Remove active class
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the section is visible

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});
const sectionContent = document.querySelector('.content');
sectionContent.innerHTML += '<img src="hope.jpg" alt="Hope">';
