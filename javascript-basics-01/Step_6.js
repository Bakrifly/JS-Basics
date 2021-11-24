document.getElementById("validate").onclick = function() {

    var x = document.getElementById("first_number").value;
    var y = document.getElementById("second_number").value;

    if (isNaN(x) || isNaN(y)) {
        alert("You did not enter a number");
    } else {
        var I = x / y;
        alert("The result is " + I);
    }
}