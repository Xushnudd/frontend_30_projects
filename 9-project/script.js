document.querySelectorAll(".div").forEach((el, i)=>{
    if (i%2 == 0) {
        el.classList.add("e")
    }
    else {
        el.classList.add("o")
    }
})