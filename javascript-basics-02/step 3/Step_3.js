var x = document.createElement("div");
document.body.appendChild(x);
document.querySelector("body div").id = ("msg");

document.getElementById("name").addEventListener("input", showMsg)

function showMsg() {
    var text = document.getElementById("name").value;
    document.getElementById("msg").innerHTML = text;
    console.log(text);
}