window.addEventListener('load', function(){
    let nombre = document.querySelector('input#nombre');
    let apellido = document.querySelector('input#apellido');
    let email = document.querySelector('input#email');
    let password = document.querySelector('input#password');
    let input = document.querySelectorAll('input');
    let formulario = document.querySelector('form');
    let errores = [];
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
    
    formulario.onsubmit = (event)=>{

        

        validateInputs();
        if(errores.length >0){
            event.preventDefault();
            let ulErrores = document.querySelector(".errores ul");
            errores.forEach(error => {
                ulErrores.innerHTML += `<li>${error}</li>`
            });
        }
                

        }
    function validateInputs(){
        if(nombre.value ===""){
            errores.push("¿Cuál es tu nombre?")
        }
        if (apellido.value === ""){
            errores.push("¿Cuál es tu apellido?")
        }
        if(email.value === ""){
            errores.push("¿Cuál es tu email?")
        }
        if(password.value.length <8){
            errores.push("La contraseña debe tener mínimo 8 caracteres")
        }
        if(password.value === ""){
            errores.push("No has especificado una contraseña nueva")
        }
        
    }
    }

)