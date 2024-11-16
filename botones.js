document.addEventListener('toggleInput', () => {
    const miInput = document.getElementById('miInput');
    if (miInput.hasAttribute('hidden')) {
        miInput.removeAttribute('hidden'); // Mostrar el input
    } else {
        miInput.setAttribute('hidden', ''); // Ocultar el input
    }
});