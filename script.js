const mainText = "Hi, I'm Divnoor.";
const lines = [
    "Breaking down problems.",
    "Building smarter solutions.",
    "Always learning."
];

let i = 0;
let j = 0;
let lineIndex = 0;

function typeMain() {
    if (i < mainText.length) {
        document.querySelector(".typing-main").textContent += mainText.charAt(i);
        i++;
        setTimeout(typeMain, 70);
    } else {
        setTimeout(typeLines, 400);
    }
}

function typeLines() {
    if (lineIndex < lines.length) {
        if (j < lines[lineIndex].length) {
            document.querySelector(`.line${lineIndex + 1}`).textContent += lines[lineIndex].charAt(j);
            j++;
            setTimeout(typeLines, 40);
        } else {
            lineIndex++;
            j = 0;
            setTimeout(typeLines, 250);
        }
    }
}

function setActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const headerHeight = document.querySelector('header').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 10;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Smooth scroll function with offset for fixed header
function setupSmoothScroll() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Handle initial URL hash if present
function handleInitialHash() {
    if (window.location.hash) {
        setTimeout(() => {
            const targetId = window.location.hash;
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }, 200); // Delay to ensure typing animation doesn't interfere
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".typing-main").textContent = "";
    document.querySelector(".line1").textContent = "";
    document.querySelector(".line2").textContent = "";
    document.querySelector(".line3").textContent = "";
    typeMain();
    setActiveNav();
    setupSmoothScroll();
    handleInitialHash();
});
