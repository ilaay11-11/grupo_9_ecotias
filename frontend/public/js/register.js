
window.addEventListener('load', function(){
    let formulario = document.querySelector("form");
    let nombre = document.querySelector('input.nombre');
    let apellido = document.querySelector('input.apellido');
    let email = document.querySelector('input.email');
    let password = document.querySelector('input.password');
    let input = document.querySelectorAll('input');

    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener('focus', ()=>{
            input[i].style.backgroundColor = "#FFFAD3"
        } );
    }
    for(let i=0; i< input.length; i++){
        input[i].addEventListener('blur', ()=>{
            input[i].style.backgroundColor = "white"
        })
    }

    formulario.addEventListener("submit", function(event){
        let errores = [];
        function validateInputs(){
            if(nombre.value ===""){
                errores.push("¿Cuál es tu nombre?")
            } else if (nombre.value.length <2)
                { 
                errores.push("Tu nombre debe tener mínimo 2 caracteres")
                }
            if (apellido.value === ""){
                errores.push("¿Cuál es tu apellido?")
            } else if(apellido.value.length <2)
                {
                errores.push("Tu apellido debe tener mínimo 2 caracteres")
                }
            if(email.value === ""){
                errores.push("¿Cuál es tu email?")
            }
            if(password.value === ""){
                errores.push("¿Cuál es tu contraseña?")
            } else if(password.value.length <8)
                {
                errores.push("La contraseña debe tener mínimo 8 caracteres")
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
    })
})



