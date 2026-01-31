const door = document.querySelector(".door")
const img = document.querySelector("img")

let a = 0

function open_a_door() {
    door.classList.remove("close")
    door.classList.toggle("open")
}
function close_a_door() {
    door.classList.remove("open")
    door.classList.toggle("close")
}

function mdoor() {
    a%2 == 0 ? open_a_door() : close_a_door()
    a+=1
}