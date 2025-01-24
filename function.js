let btnrates = document.querySelectorAll(".btnrates");
let element = document.querySelectorAll(".element");


btnrates.forEach((btn, i) => {
    btn.addEventListener("click", ()=> {
         element[i].classList.toggle("none");
         
         for (let j = 0; j < element.length; j++) {
            if (j != i) {
                element[j].classList.add("none");
            }
        }
    })
})



