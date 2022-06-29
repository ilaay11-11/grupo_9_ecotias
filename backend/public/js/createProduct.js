window.addEventListener('load', function() {
    const nombre = document.querySelector('#nombre');
    const descripcion = document.querySelector('#description');
    const img = document.querySelector('#product_image');
    const formulario = document.querySelector('form');
    

    formulario.onsubmit = (event)=>{
        let errores = [];
        let errores1 = [" ", " ", " ", " "];
        function validateInputs(){
            if(nombre.value === ""){
                errores.push("Ingresa el nombre del producto");
            } else if(nombre.value.length < 5){
                errores.push("El nombre debe tener mínimo 5 caracteres")
            }else{
                errores.push(" ");
            }
            if(descripcion.value.length < 20){
                errores.push("La descripción debe tener al menos 20 caracteres");
            } else {
                errores.push(" ");
            }
            let extensiones = getFileExtension3(img.value.toUpperCase());
            if(extensiones ===""){
                errores.push(" ");
            }else if(extensiones != "GIF" && extensiones != "PNG" && extensiones != "JPG" && extensiones != "JPEG"){
               errores.push("El formato de la imagen no es válido");
            } else {
                errores.push(" ");
            }
            
        }
        validateInputs();
        let valid = errores.length == errores1.length && errores.every(function (v, i){
            return v === errores1[i]
        } );
        
        if(errores.length > 0 && valid === false){
            event.preventDefault();
            let ulErrores = document.querySelector(".errores ul");
            let ulErrores1 = document.querySelector(".errores1 ul");
            let ulErrores2 = document.querySelector(".errores2 ul");
            ulErrores.innerHTML = errores[0]; 
            ulErrores1.innerHTML = errores[1];   
            ulErrores2.innerHTML = errores[2];
            
        }
        function getFileExtension3(filename) {
            return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
          }
    }
})