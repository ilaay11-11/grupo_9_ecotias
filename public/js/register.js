window.addEventListener('load', function(){
    let nombre = this.document.querySelector('input#nombre');
    let apellido = this.document.querySelector('input#apellido');
    let email = this.document.querySelector('input#email');
    let password = this.document.querySelector('input#psswrd');
    let img = this.document.querySelector('#user-image');
    let formulario = document.querySelector('form');
    let extension = img.substring(img.lastIndexOf('.')+1).toLowerCase();

    formulario.onsubmit = (event)=>{
        let errores = [];
        function validateInputs(){
            if(nombre.value === ""){
                errores.push("¿Cuál es tu nombre?")
            }
            if (nombre.value.length < 2) {
                errores.push("Escribe tu nombre")                
            }

            if (apellido.value === ""){
                errores.push("¿Cuál es tu apellido?")
            }
            if (apellido.value.length < 2) {
                errores.push("Escribe tu apellido")                
            }

            if(email.value === ""){
                errores.push("¿Cuál es tu email?")
            }
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.email.value){
                return(true)
            }else{
                errores.push("Tu e-mail no es válido")
            }
            if(password.value.length <8){
                
                errores.push("La contraseña debe tener mínimo 8 caracteres")
            }
            if(extension != "gif" || extension != "png" || extension != "jpg" || extension != "jpeg"){
                
                errores.push("El formato de la imagen no es válido")

            }
            
        }


        validateInputs();
        if(errores.length >0){
            event.preventDefault();
            let ulErrores = document.querySelector(".errores ul");
            ulErrores.innerHTML = '';
            errores.forEach(error => {
                ulErrores.innerHTML += `<li>${error}</li>`
            });
        }
    }
} )