const body = document.body
const header = document.querySelector("header")
const humberger = document.querySelector(".lineWrapper")

humberger.addEventListener("click", () => {
  body.classList.toggle("sidebarOn")
})