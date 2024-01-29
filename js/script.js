let header = document.getElementById("header");

let nube1 = document.createElement("nube1");
let fondo_transparente = document.createElement("fondo_transparente");
let nube2 = document.createElement("nube2");
let btn = document.createElement("btn");
let fondo = document.createElement("fondo");
let viento = document.createElement("viento");
let persona = document.createElement("persona");
let slogan = document.createElement("slogan");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  fondo_transparente.style.left = value * "0.7" + "px";
  nube1.style.left = value * -5 + "px";
  nube2.style.left = value * -5 + "px";
  btn.style.marginTop = value * 0.7 + "px";
  slogan.style.marginBottom = value * -1 + "px";
  viento.style.left = value * -5 + "px";
  header.style.marginTop = value * 0.4 + "px";
  persona.style.marginLeft = value * 4 + "px";
});

/* RESPONSIVE*/

const navigation = document.querySelector("nav");
document.querySelector(".menu").onclick = function () {
  this.classlist.toggle("active");
  navigation.classList.toggle("active");
};
