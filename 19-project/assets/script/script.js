const cards = document.querySelectorAll(".card")

for (let i = 0; i < cards.length; i++) {
    cards[i].onclick = press
}

function press() {
    cards.forEach(el=>{
        el.classList.remove("show")
    })
    this.classList.add("show")
}