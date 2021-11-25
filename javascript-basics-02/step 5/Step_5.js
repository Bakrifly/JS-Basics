var Image = document.querySelectorAll("img");

for (let i = 0; i < Image.length; i++) {
    Image[i].addEventListener("mouseover", function() {
        document.getElementById("image" + (i + 1)).src = "images/image" + (i + 1) + "_2.jpg"
    })
}