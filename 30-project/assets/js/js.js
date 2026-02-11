const bars = document.querySelector(".bar")
let show = true

function bar() {
    list = [
        "HOME", "HOSTING", "DOMAIN", "NEWS", "CONTACT"
    ]
    const p = bars.parentElement
    const e = document.createElement("div")
    e.className="linkj"
    
    for (let i = 0; i < 5; i++) {
        const a = document.createElement("a")
        a.href = "#"
        a.append(document.createElement("div").innerHTML = list[i])
        a.className="link"
        if (i == 0) {
            a.className="tx-chocolate"
        }
        e.append(a)
    }
    
    const lj = document.querySelector(".linkj")

    if (show == true) {
        p.append(e)
        show = !show
    }
    else {
        lj.remove()
        show = !show
    }
}