function validarLogin() {
    var usuario = document.getElementById("correo").value;
    var password = document.getElementById("clave").value;

    //Comprobar si esta vacio
    if (usuario === "" || password === "") {
        alert("Complete todos los campos.");
        return false;
    }

    //Validar si son correctos
    if (usuario === "admin@biblioweb.test" && password === "Admin123") {
        sessionStorage.setItem('auth', '1');
        // alert("¡Bienvenido!")
        window.location.href="../index.html";
        return false;
    } else {
        alert("Usuario o contraseña incorrectos.");
        return false;
    }
}

function cerrarSesion() {
    sessionStorage.removeItem('auth');
    window.location.href = '../index.html'
}