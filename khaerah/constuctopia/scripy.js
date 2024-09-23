document.querySelectorAll('.accordion').forEach(accordion => {
    accordion.addEventListener('click', () => {
        // Toggle the "active" class on the accordion button
        const isActive = accordion.classList.contains('active');

        // Close all panels
        document.querySelectorAll('.accordion').forEach(acc => {
            acc.classList.remove('active');
            acc.nextElementSibling.style.display = 'none';
        });

        // Open the clicked panel if it wasn't already open
        if (!isActive) {
            accordion.classList.add('active');
            accordion.nextElementSibling.style.display = 'block';
        }
    });
});
