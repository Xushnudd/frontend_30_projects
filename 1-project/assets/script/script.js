const info_item = document.querySelectorAll(".info__item")
for (let i = 0; i < info_item.length; i++) {
    if (i%2 == 0) {
        info_item[i].classList.add("icon")
    }
}