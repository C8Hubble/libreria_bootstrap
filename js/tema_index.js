
function aplicarTema(modo) {
    const temaBootstrap = modo === 'oscuro' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', temaBootstrap);
    localStorage.setItem('tema_preferido', modo);

    const icono = document.getElementById('icono-tema');
    if (icono) {
        icono.src = modo === 'oscuro' ? './img/luna.png' : './img/soleado.png';
        icono.alt = modo === 'oscuro' ? 'Modo oscuro' : 'Modo claro';
    }
}

function cambiarColor() {

    const temaActual = document.documentElement.getAttribute('data-bs-theme');
    const nuevoModo = temaActual === 'dark' ? 'claro' : 'oscuro';
    aplicarTema(nuevoModo);
}

document.addEventListener('DOMContentLoaded', () => {
    const temaGuardado = localStorage.getItem('tema_preferido') || 'claro';
    aplicarTema(temaGuardado);
});

