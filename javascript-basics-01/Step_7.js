document.getElementById("validate").onclick = function() {
    var I;
    var shoe = document.getElementById("shoe_size").value;
    var year = document.getElementById("year").value;

    if (isNaN(shoe) || isNaN(year)) {
        alert("Please, only Enter Numbers.");
    } else {
        I = ((shoe * 2) + 5);
        I = I * 50;
        I = I - year;
        I = I + 1766;
        alert("Your result is " + I);
    }

}