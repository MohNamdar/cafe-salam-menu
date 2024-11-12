document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default anchor behavior

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Get the target element's position and adjust by 100px
        const offset = 200;
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

        // Scroll to the adjusted position
        window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
        });
    });
});
