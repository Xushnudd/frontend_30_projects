const move_name = [
    move_top,
    move_left,
    move_right,
    move_bottom
]

document.querySelectorAll("button").forEach((el, i)=>{
    el.onclick = move_name[i]
})

const box = document.querySelector(".box")

let x = 1
let y = 1

function move_top() {
    y-=1
    box.style.top = `${y}%`
}
function move_right() {
    x+=1
    box.style.left = `${x}%`
}
function move_bottom() {
    y+=1
    box.style.top = `${y}%`
}
function move_left() {
    x-=1
    box.style.left = `${x}%`
}
