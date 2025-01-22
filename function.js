let btnrates = document.querySelector(".btnrates");
let caracteristicas = document.querySelector(".caracteristicas");
let btnrates2 = document.querySelector(".btnrates2");
let general = document.querySelector(".general");
let btnrates3 = document.querySelector(".btnrates3");

let btnrates4 = document.querySelector(".btnrates4");
let btnrates5 = document.querySelector(".btnrates5");
let btnrates6 = document.querySelector(".btnrates6");

 
btnrates.addEventListener("click", ()=> {
     caracteristicas.classList.toggle("hidden");
});
btnrates2.addEventListener("click", ()=> { 
    general.classList.toggle("hidden");
});


