function validarLoginA(){
    let usuario1 = document.getElementById('usuario').value;
    let clave2 = document.getElementById('clave').value;

    if(usuario1 == "" || clave2 == ""){
        alert("llena los campos imbecil")
        return false
    }
    if(usuario1 == "admin@biblioweb.test" && clave2 == "Admin123"){
        sessionStorage.setItem('auth', '1');
        window.location.href="../index.html";
        return false;

    }else{
        alert("Usuario o contraseña incorrecta");
        return false;
    }


}

function cerrarSesion() {
    sessionStorage.removeItem('auth');
    window.location.href = '../index.html'
}















