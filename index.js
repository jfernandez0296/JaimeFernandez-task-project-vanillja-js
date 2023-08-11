const button=document.querySelector(".button");
const texth1=document.querySelector(".showtext");


button.addEventListener("click",() => {
const input=document.querySelector(".input");
texth1.innerText=input.value
})