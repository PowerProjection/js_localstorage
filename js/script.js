let counter = 100
localStorage.setItem("counter", counter)
let getir = localStorage.getItem("counter")

const olustur = () => {
    let counterSpan = document.querySelector('#counterSpan')
    
    
    const arttir = () => {
        localStorage.setItem("counter", getir++)
        counterSpan.innerHTML = getir
    }
    
    const azalt = () => {
        localStorage.setItem("counter", getir--)
        counterSpan.innerHTML = getir
    }
    
    
    let buttonArttir = document.querySelector('#arttir')
    buttonArttir.addEventListener("click", arttir)
    let buttonAzalt = document.querySelector('#azalt')
    buttonAzalt.addEventListener("click", azalt)
}

window.onload = (event) => {
    olustur()
  };