const burger = document.querySelector(".burger");

const divsmall = document.querySelector(".divsmall");

const close = document.querySelector(".close");

burger.addEventListener("click",()=>{
  divsmall.style.visibility="visible";
  console.log("clicked")
})

close.addEventListener("click",()=>{
  divsmall.style.visibility="hidden";
  console.log("clicked")
})
