var btn = document.querySelector(".button")
var header = document.querySelector(".header")


function color (){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return `rgb(${r} ${g} ${b})`
}
btn.onclick = function(){
    let vpn = Math.floor(Math.random()*color.length)
     header.style.background = color()
}
   


