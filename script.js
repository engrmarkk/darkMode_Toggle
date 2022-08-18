let togg = document.querySelector("#toggle");
let body = document.querySelector("body");
let h31 = document.querySelector("#h31");
let h32 = document.querySelector("#h32");


togg.addEventListener("click", ()=>{
    togg.classList.toggle("active");
    body.classList.toggle("active");
    h32.classList.toggle("active");
    h31.classList.toggle("active")
})