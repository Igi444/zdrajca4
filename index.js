let a = document.querySelector(".pumpkin")
let b = document.querySelector("body")
let c = document.querySelector(".alert")
let d = document.querySelector(".container")
c.addEventListener("click", () => 
{
alert('"The world outside had its own rules, and those rules were not human."')
})
a.addEventListener("click", () => 
{
    a.classList.toggle("spin")
})
document.querySelector(".delet").addEventListener("click", () =>
{
    d.style.display = "none"
    b.style.backgroundImage = "url('jeff.jpg')"
    b.style.backgroundRepeat = "no-repeat"
    b.style.backgroundSize = "cover"

})
document.querySelector(".negative").addEventListener("click", () =>
{
  b.style.filter = "invert(100%)"
})
document.querySelector(".adi").addEventListener("click", () =>
{
    d.style.display = "none"
    b.style.backgroundImage = "url('zdrajca4.jpg')"
    b.style.backgroundRepeat = "no-repeat"
    b.style.backgroundSize = "cover"
    b.innerHTML = "<h1>Zdrajca4</h1>"
})