const contents = document.querySelector(".contents")
const links = document.querySelectorAll(".links>.link")

function click() {
    links.forEach(el=>{
        el.classList.remove("show")
    })
    this.classList.add("show")
}

links.forEach(el=>{
    el.onclick = click
    el.style.cursor = "pointer"
})

for (let i = 0; i < 20; i++) {
    const div = document.createElement("div")
    const img = document.createElement("div")
    const caption = document.createElement("div")
    const b = document.createElement("b")
    const i = document.createElement("i")

    img.classList.add("img")
    caption.classList.add("caption")

    img.innerHTML = "Photo"
    b.innerHTML = "Title"
    i.innerHTML = "Subtitle"

    caption.append(b)
    caption.append(i)

    div.append(img)
    div.append(caption)
    contents.append(div)
}