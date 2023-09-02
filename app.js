var elemento = document.querySelector('.div__cubo');

// Define una función para pausar o reanudar la animación
function toggleAnimation() {
    if (elemento.style.animationPlayState === 'paused') {
        elemento.style.animationPlayState = 'running'; // Reanuda la animación
    } else {
        elemento.style.animationPlayState = 'paused'; // Pausa la animación
    }
}

// Agrega un evento click para pausar/reanudar la animación cuando se hace clic en el elemento
elemento.addEventListener('click', toggleAnimation);