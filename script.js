
function form() {


    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");

    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var submitBtn = document.getElementById("submitBtn");
    if (nameInput.value === "") {
        nameError.textContent = "Name is required";


    }
    else {
        nameError.textContent = "";
    }

    if (emailInput.value === "") {
        emailError.textContent = "email is required";


    }
    else {
        emailError.textContent = "";
    }
    if (passwordInput.value.length < 6) {
        passwordError.textContent = "password must be six characters";


    }
    else {
        passwordError.textContent = "";
    }
if (nameInput.value !== "" && emailInput.value !== "" && passwordInput.value.length >= 6) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }

}
