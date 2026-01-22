const subtitle_description = document.querySelector(".subtitle__description")
for (let i = 0; i < 8; i++) {
    const div = document.createElement("div")
    div.classList.add("line")
    div.style.top = "50%"
    div.style.transform = `rotateZ(${i*(360/16)}deg)`
    subtitle_description.append(div)
}