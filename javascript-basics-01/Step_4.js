console.log("hello");

document.getElementById("validate").onclick = function() {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let city = document.getElementById("city").value;

    alert("You entered the Following info !" +
        "\n\nName: " + name + "\nSurname: " + surname + "\nCity: " + city + "\n\nThank you.");
}