const navbar = document.querySelector('nav');
const home = document.getElementById('home');
const navLinks = document.querySelectorAll('.nav_options li');
const sections = document.querySelectorAll('section')
const body = document.querySelector('body');
const pics = document.querySelectorAll('.carousel_container figure');
let lastScrollPosition = window.scrollY;
slideShow()
const links = {
    'home': document.querySelector('.nav_options li:first-child'),
    'about': document.querySelector('.nav_options > li:nth-child(2)'),
    'education': document.querySelector('.nav_options > li:nth-child(3)'),
    'skills': document.querySelector('.nav_options > li:nth-child(4)'),
    'experience': document.querySelector('.nav_options > li:nth-child(5)'),
    'projects': document.querySelector('.nav_options > li:nth-child(6)'),
    'certificates': document.querySelector('.nav_options > li:nth-child(7)')
}

console.log(links)

document.addEventListener('scroll', (event) => {
    const difference = lastScrollPosition - window.scrollY;
    if (difference < -10) {
        navbar.classList.replace('show', 'hide')
    } else {
        navbar.classList.replace('hide', 'show')
    }
    lastScrollPosition = window.scrollY;
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (isElementInViewport(section)) {
            const link = links[section.id]
            toggleLinkClasses(section.id)
            break;
        }
        
    }
});

document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('.nav_options').classList.toggle('active')
})

const isElementInViewport = (element) => {
    var rect = element.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 
    );
}

const toggleLinkClasses = (link) => {
    Object.entries(links).forEach((entry) => {
        if (entry[0] == link) {
            entry[1].classList.add('active')
        } else {
            entry[1].classList.remove('active')
        }
    })
}

let currentIndex = 1;

const togglePictures = (pic) => {
    pics.forEach((entry) => {
        if (pic === entry) {
            entry.classList.add('show')
        } else {
            entry.classList.remove('show')
        }
    })
}

function slideShow() {
    setInterval(() => {
        togglePictures(pics[currentIndex]);
        if (currentIndex < pics.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
    }, 3000);
}