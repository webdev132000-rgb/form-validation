let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");

// Show Input Error Message
function showError(input, message) {
  let formControl = input.parentElement;
  formControl.className = "form-control error";
  let small = formControl.querySelector("small");
  small.textContent = message;
}

// Show success outline
function showSuccess(input) {
  let formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Check Required field
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value === "") {
      showError(input, getFieldName(input) + " is required");
    } else {
      showSuccess(input);
    }
  });
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      getFieldName(input) + "Must be at least " + min + " characters",
    );
  } else if (input.value.length > max) {
    showError(
      input,
      getFieldName(input) + "Must be less than " + max + " characters",
    );
  } else {
    showSuccess(input);
  }
}

// Check Passwords Match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  } else {
    showSuccess(input2);
  }
}

// Refactor Name
function getFieldName(input) {
  if (input.id === "password2") {
    return "Confirm Password";
  }
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 8, 25);
  checkLength(password2, 8, 25);
  checkPasswordsMatch(password, password2);
});
