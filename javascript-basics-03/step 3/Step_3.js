let text = document.getElementById("text");
let colors = document.querySelectorAll(".color");

for (let i = 0; i < colors.length; i++) {
    // add event Listener for the 3 divs
    colors[i].addEventListener("click", function() { changecolor(i) })
}

//swith color function for the event Listener
function changecolor(color) {
    switch (color) {
        case 0:
            text.style = "color: green";
            break;
        case 1:
            text.style = "color: red";
            break;
        case 2:
            text.style = "color: blue";
            break;
        default:
            text.style = "color: orange";
    }
}