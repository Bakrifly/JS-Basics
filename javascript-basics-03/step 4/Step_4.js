// get buttom element and input field array
var button = document.querySelector(" body form button");
var boxs = document.querySelectorAll("body input");

//button on click function
button.addEventListener("click", function() {

    //save field values in variable.
    let a = boxs[0].value
    let b = boxs[1].value

    // check if there is a password input
    if (a == "" || b == "") { alert("Please Input a password") }

    // check if passwords match
    else {
        if (a == b) { alert("Your password was saved") }

        //show red border and warning msg if passwords don't match
        else {
            alert("Passwords do not match");
            for (let i = 0; i < boxs.length; i++) {
                boxs[i].style = "Border: 3px red solid"
            };
        }
    }
})