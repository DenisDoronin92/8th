
let btn = document.querySelector('.btn')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let a = document.querySelector('.element')

btn.onclick = function(){
    a.classList.toggle('black')
}
btn2.onclick = function(){
    a.classList.toggle('red')
    a.classList.toggle('blue')
    a.classList.toggle('green')
}


btn3.onclick = function(){
    a.classList.remove('green')
}