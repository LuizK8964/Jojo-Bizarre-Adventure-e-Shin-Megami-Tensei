let currentFontSize = 16;

// Controle de tamanho de fonte
document.getElementById("increaseFont").addEventListener("click", () => {
    currentFontSize += 2;
    document.body.style.fontSize = currentFontSize + "px";
});

document.getElementById("decreaseFont").addEventListener("click", () => {
    if(currentFontSize > 10) currentFontSize -= 2;
    document.body.style.fontSize = currentFontSize + "px";
});

document.getElementById("resetFont").addEventListener("click", () => {
    currentFontSize = 16;
    document.body.style.fontSize = currentFontSize + "px";
});

// Alternar tema claro/escuro
document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
});

// Animação de aparecimento das seções
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));
