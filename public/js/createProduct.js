window.addEventListener('load', function(){
    let nombre = document.querySelector('#nombre');
    let descripcion = document.querySelector('#description');
    let img = document.querySelector('#product_image')
    let formulario = document.querySelector('form');
    let extensiones = img.substring(img.lastIndexOf('.')+1).toLowerCase();

    formulario.onsubmit = (event)=>{
        let errores = [];
        function validateInputs(){
            if(nombre.value.length <5){
                errores.push("El nombre debe tener al menos 5 caracteres");
            }
            if(descripcion.value.length <20){
                errores.push("La descripción debe tener al menos 20 caracteres");
            }
            if(extensiones != "gif" || extensiones != "png" || extensiones != "jpg" || extensiones != "jpeg"){
                errores.push("El formato de la imagen no es válido");
            }
        }
        validateInputs();
        if(errores.length > 0){
            event.preventDefault();
            let ulErrores = document.querySelector(".errores ul");
            ulErrores.innerHTML = "";
            errores.forEach(e => {
                ulErrores.innerHTML += `<li>${e}`
            });
        }
    }
})