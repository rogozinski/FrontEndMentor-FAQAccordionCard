<<<<<<< HEAD
// const allHeaders = document.querySelectorAll(".cardHeader");
// /* looping over h2 and removing class active */
// function removeClass() {
//     for (let cardHeader of allHeaders) {
//         const h2Header = cardHeader.firstElementChild;
//         h2Header.classList.remove("active");
//     }
// }

// for (let cardHeader of allHeaders) {
//     cardHeader.addEventListener("click", function () {
//         const h2Header = cardHeader.firstElementChild;
//         removeClass();
//         h2Header.classList.toggle("active");
//     });
// }
=======
const cardHeaders = document.querySelectorAll(".cardHeader");

/* looping over h2 and removing class boldFont */
function removeClass() {
    for (let cardHeader of cardHeaders) {
        cardHeader.style.pointerEvents = "auto";
        const h2Header = cardHeader.firstElementChild;
        h2Header.classList.remove("boldFont");

    }
}

/* collapsed elements have class collapse. if clicked element is without that class we change font weight */
for (let cardHeader of cardHeaders) {
    cardHeader.addEventListener("click", function () {
        removeClass();
        cardHeader.style.pointerEvents = "none";
        const h2Header = cardHeader.firstElementChild;
        if (!cardHeader.classList.contains("collapse")) {
            h2Header.classList.add("boldFont");
        }

    });
}
>>>>>>> parent of b0ff0b3 (project update)
