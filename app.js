const cardHeaders = document.querySelectorAll(".cardHeader");

/* looping over h2 and removing class boldFont */
function removeClass() {
    for (let cardHeader of cardHeaders) {
        const h2Header = cardHeader.firstElementChild;
        h2Header.classList.remove("boldFont");
    }
}

/* collapsed elements have class collapse. if clicked element is without that class we change font weight */
for (let cardHeader of cardHeaders) {
    cardHeader.addEventListener("click", function () {
        removeClass();
        const h2Header = cardHeader.firstElementChild;
        if (!cardHeader.classList.contains("collapse")) {
            h2Header.classList.toggle("boldFont");
        }

    });
}
