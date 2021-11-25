document.querySelector("form button").addEventListener("click", reset);

function reset() {
    var x = window.confirm("Are you sure you want to reset the form?");
    if (x == true) {
        document.querySelector("form").reset();
        alert("form has been reset!");
    } else { alert("Operation cancelled"); }
}