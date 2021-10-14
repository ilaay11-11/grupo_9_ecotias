const navbar = document.querySelector('.menu_items');

document.querySelector('#menu_btn').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}