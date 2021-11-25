document.getElementById("validate").onclick = function()

{
    let age = document.getElementById("age").value;

    if (!isNaN(age)) {
        if (age < 18) { alert("You are Under 18!") } else { alert("You are Over 18!") }
    } else { alert("Please enter a Number only") }
}