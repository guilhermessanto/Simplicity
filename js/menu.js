const btnMenu = document.querySelector(".icone"); /* nav h2 a  */
const menu = document.querySelector(".menu"); /* nav ul */

btnMenu.addEventListener('click', function(event){
    event.preventDefault();
    menu.classList.toggle("menu-aberto");
    if(menu.classList.contains("menu-aberto")){
      btnMenu.innerHTML = "Fechar &times;";
    }else{
        btnMenu.innerHTML = "Menu &equiv;";
    };   
}); 