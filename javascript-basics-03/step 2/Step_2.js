var Links = document.querySelectorAll("a")
var text = document.getElementById("texte")
console.log(Links)

{ Links[0].addEventListener("click", function() { text.style.display = "block"; }) }

{ Links[1].addEventListener("click", function() { text.style.display = "none"; }) }