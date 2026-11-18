function validarLoginA() {
    let usuario1 = document.getElementById('usuario').value;
    let clave2 = document.getElementById('clave').value;

   
    if (usuario1 == "admin@biblioweb.test" && clave2 == "Admin123") {
        sessionStorage.setItem('auth', '1');
        window.location.href = "../pages/administrador.html";
        return false;

    } else {
        alert("Usuario o contraseña incorrecta");
        return false;
    }


}

function cerrarSesion() {
    sessionStorage.removeItem('auth');
    window.location.href = '../index.html'
}

(() => {
    'use strict'


    const forms = document.querySelectorAll('.needs-validation')


    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })
})()













