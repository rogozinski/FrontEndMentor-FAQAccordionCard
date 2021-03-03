const H2 = document.querySelectorAll("h2");

for (let i = 0; i < H2.length; i++) {
    H2[i].addEventListener("click", function () {

        let paragraph = H2[i].nextElementSibling;
        paragraph.classList.toggle("hide");
        console.log(paragraph);
    });
}