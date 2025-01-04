document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.content');
    const triggerHeight = window.innerHeight / 1.2;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerHeight) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});
 
/*Gauche vers droite */
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.content1');
    const triggerHeight = window.innerHeight / 1.2;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerHeight) {
            section.classList.add('visible1');
        } else {
            section.classList.remove('visible1');
        }
    });
});
