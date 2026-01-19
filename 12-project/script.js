let paint = [
    'red',
    'blue',
    'chocolate',
    'yellow',
    'yellowgreen',
    'green',
    'orange'
]
let num = 0
function repaint() {
    document.querySelector("body").style.backgroundColor = paint[num]
    num+=1
    if (num > 6) {
        num = 0
    }
}