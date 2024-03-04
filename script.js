
// Filterable Portfolio

document.addEventListener('DOMContentLoaded', function () {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const category = this.getAttribute('data-filter');
            portfolioItems.forEach(function (item) {
                const itemCategory = item.getAttribute('data-category');
                if (category === 'all' || category === itemCategory) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

// ScrollReveal Animations

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal(`.home-container, .service-container, .resume-container, .portfolio-container, .contact-container, .faq-container, .footer-container`)