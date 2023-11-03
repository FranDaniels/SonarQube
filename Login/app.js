var persona={nombre:'',primerApellido:'',segundoApellido:'',dni:'',fecha:''}//Creamos un objeto
var pwd='admin123'//Creamos la contraseña que vamos a utilizar.
    var correo='user@gmail.com'
    var errores=[] //Los errores los almacenaré en este array haciendo un push en vez de hacer += ya que me saltaba error

    document.getElementById('submit').addEventListener("click", () => {
        email = document.getElementById('email').value
        password = document.getElementById('password').value

        if(empty(email)){
            errores.push('El correo está vacio')
        }else{
            if (!email.includes("@")||email.startsWith("@")) {
                errores.push('El correo necesita tener un @')
            }else{
                if (comprobarArroba(email)) {
                    
                }
                if(empty(password)&&comprobarContrasenia(password)){
                    errores.push('La contraseña está vacia')
                }else{
                    if(password==pwd && email==correo){
                        confirm("Has iniciado sesión")
                        clean()
                        window.location.href='persona.html'
                    }else{
                        errores.push('No has podido iniciar sesion')
                    }
                }
            }
        }
        mostrarAlert(errores)
    })
    
    function mostrarPersona(){
        console.log(persona)
    }

    function guardarUsuarioNuevo(){
        const nombre=document.getElementById('nombre').value
        const primerApellido=document.getElementById('primerApellido').value
        const segundoApellidoApellido=document.getElementById('segundoApellido').value
        const dni=document.getElementById('dni').value
        const fecha=document.getElementById('fecha').value

        comprobarNombre(nombre)
        comprobarApellido(primerApellido,segundoApellidoApellido)
        comprobarDNI(dni)
        comprobarFecha(fecha)

        mostrarAlert(errores)
    }
     
    function comprobarNombre(nombre) {
        if (nombre.length>3&&nombre.length<30) {
            persona.nombre=nombre
        }else{
            errores.push('El nombre',nombre,'tiene que tener entre 3 y 30 caracteres')
        }
    }

    function comprobarApellido(apellido1,apellido2) {
        if (apellido1.length>2&&apellido1.length<30&&apellido2.length>2&&apellido2.length<30) {
            persona.primerApellido=apellido1
            persona.segundoApellido=apellido2
        }else{
            errores.push('El apellido',apellido1,' ',apellido2,'tiene que tener entre 2 y 30 caracteres')
        }
    }

    function comprobarDNI(dni){
        var numeros
        var letr
        var letras='TRWAGMYFPDXBNJZSQVHLCKE'
        var expresion_dni=/^\d{8}[a-zA-Z]$/ //Esto sirve para que dni tenga 8 numeros y una letra
        
        if (dni.length==9&&expresion_dni.test(dni)) { //Comprobamos si la variable dni es mayor a 9 y si contiene 8 numeros y una letra
            numeros = dni.substr(0,dni.length-1);//Extraemos los numeros del dni
            letr = dni.substr(dni.length-1,1);//Extraemos la letra del dni
            letras=letras.substring(numeros,numeros+1);//Calculamos la letra 
            if (letras!=letr.toUpperCase()) {
                    confirm('DNI correcto')
                    persona.dni=dni//Esto es lo que le falta a fran
                }else{
                    alert('Letra del DNI erronea');
                }
            }else{
            alert('Error en el DNI');
        }
    }

    function comprobarFecha(fecha) {
        if(fecha[2]!='/' || fecha[5]!='/' || fecha.length>10){
            persona.fecha=fecha
        }else{
            alert('El formato de fecha es erroneo')
        }
    }

    function comprobarArroba(email) {
        var errores=[]
        var salir=false
        for (let i = email.length-3; i < email.length-1; i++ &&!salir) {
            if (email.charAt(i)=='@') {
                errores.push=('El @ no puede ir en los 3 ultimos caracteres')
                salir=true
            }
            
        }
        return errores
    }