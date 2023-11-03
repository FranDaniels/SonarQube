function empty(num) {
    var vacio=false
    if(num.length==0){
        vacio=true
    }
    return vacio
}

function clean(){
    document.getElementById('email').value=' '
    document.getElementById('password').value=' '
}

function comprobarContrasenia(contrasenia){
    if (contrasenia.length<8) {
        msg=alert('La contraseña tiene menos de 8 caracteres')
    }
    return msg
}

function limpiarUsuario(){
    document.getElementById('nombre').value=' '
    document.getElementById('primerApellido').value=' '
    document.getElementById('segundoApellido').value=' '
    document.getElementById('dni').value=' '
    document.getElementById('fecha').value=' '
}

function mostrarAlert(mensaje){
    alert(mensaje)
}

