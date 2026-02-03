const tags_body = document.querySelector(".tags__body")

const tags = [
    "Travel", "New York", "London", "IKEA",
    "NORWAY", "DIY", "Ideas", "Baby",
    "Family", "News", "Clothing", "Shopping",
    "Sports", "Games"
]

tags.forEach(el => {
    const span = document.createElement("span")
    span.classList.add("bg-eee")
    span.classList.add("tag")
    span.innerHTML = el
    tags_body.append(span)
})