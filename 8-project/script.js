let color = [
    "yellow",
    "pink",
    "green",
    "aqua",
    "red",
    "blueviolet"
]
document.querySelectorAll("div").forEach((el, i)=>{
    el.style.backgroundColor = `${color[i]}`
    el.style.animationDelay = `${i*0.15}s`
})