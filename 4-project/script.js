document.querySelectorAll(".div").forEach((el, i)=> {
    el.style.inset = `${i*10}px`
    el.style.animationDelay = `${1.5-i*0.1}s`
})