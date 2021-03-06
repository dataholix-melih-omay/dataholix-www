/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;
    const activeLink = 'active-link';
    const activeIcon = 'nav__icon-active';

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id'),
            queryNav = document.querySelector(`.nav__menu a[href*='${sectionId}']`);

        if (queryNav) {
            const toggleClass = (toggleFunction) => {
                navClassList[toggleFunction](activeLink);
                imgClassList[toggleFunction](activeIcon)
            };

            const navClassList = queryNav.classList;
            const imgClassList = queryNav.querySelector('img').classList;

            (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
                ? toggleClass('add')
                : toggleClass('remove');
        }
    });
}

// Einbinden
window.addEventListener('scroll', scrollActive);

/*=============== Ändere Hintergrund Header ===============*/
function scrollHeader() {
    const headerClassList = document.getElementById('header').classList;
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag

    (this.scrollY >= 80)
        ? headerClassList.add('scroll-header')
        : headerClassList.remove('scroll-header');
}

// Einbinden
window.addEventListener('scroll', scrollHeader);
