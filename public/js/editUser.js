window.addEventListener('load', function(){
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
    let password = document.querySelector('#password');
    let caract8 = document.querySelector('#caract8');


})