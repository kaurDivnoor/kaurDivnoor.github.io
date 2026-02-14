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
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 150) {
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

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".typing-main").textContent = "";
    document.querySelector(".line1").textContent = "";
    document.querySelector(".line2").textContent = "";
    document.querySelector(".line3").textContent = "";
    typeMain();
    setActiveNav();
});
