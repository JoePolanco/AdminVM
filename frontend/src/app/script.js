//Ejecutr funcion en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);

// Declaramos las variables
var side_menu = document.getElementById("side_menu");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

// Evento para mostrar y ocultar menu
function open_close_menu(){
  body.classList.toggle("body_move");
  side_menu.classList.toggle("menu__side_move");

}
