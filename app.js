const allHeaders = document.querySelectorAll(".cardHeader");

for (let cardHeader of allHeaders) {
    cardHeader.addEventListener("click", function () {
        toggleFunction(this);
    });
}

function toggleFunction(x) {
    // Remove all active classes
    for (let cardHeader of allHeaders) {
        var h2Header = cardHeader.firstElementChild;
        h2Header.classList.remove("active");
    }

    // Get parent of clicked element and get element with class ".collapse" in it. 
    // Check if this element have "show" class.
    var y = x.parentElement.querySelector('.collapse').classList.contains('show');

    // Add or Remove "active" class on clicked child "h2" element
    var h2Header = x.firstElementChild;
    if (y) {
        h2Header.classList.remove("active");
    } else {
        h2Header.classList.add("active");
    }
}