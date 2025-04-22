var form = document.getElementById("registerForm");

var inputs = {
  fullName: document.getElementById("fullName"),
  email: document.getElementById("email"),
  password: document.getElementById("password"),
  age: document.getElementById("age"),
  terms: document.getElementById("terms"),
};

var errors = {
  nameError: document.getElementById("nameError"),
  emailError: document.getElementById("emailError"),
  passwordError: document.getElementById("passwordError"),
  ageError: document.getElementById("ageError"),
  genderError: document.getElementById("genderError"),
  termsError: document.getElementById("termsError"),
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var valid = true;

  if (inputs.fullName.value.trim().length < 3) {
    errors.nameError.textContent = "Full Name must be at least 3 characters.";
    valid = false;
  } else {
    errors.nameError.textContent = "";
  }

  var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(inputs.email.value)) {
    errors.emailError.textContent = "Enter a valid email address.";
    valid = false;
  } else {
    errors.emailError.textContent = "";
  }

  if (inputs.password.value.length < 8) {
    errors.passwordError.textContent =
      "Password must be at least 8 characters.";
    valid = false;
  } else {
    errors.passwordError.textContent = "";
  }

  var ageValue = +inputs.age.value;
  if (ageValue < 18 || ageValue > 99) {
    errors.ageError.textContent = "Age must be between 18 and 99.";
    valid = false;
  } else {
    errors.ageError.textContent = "";
  }

  var genders = document.getElementsByName("gender");
  var genderSelected = false;
  for (var i in genders) {
    if (genders[i].checked) {
      genderSelected = true;
      break;
    }
  }
  if (!genderSelected) {
    errors.genderError.textContent = "Please select a gender";
    valid = false;
  } else {
    errors.genderError.textContent = "";
  }

  if (!inputs.terms.checked) {
    errors.termsError.textContent = "You must agree to the terms";
    valid = false;
  } else {
    errors.termsError.textContent = "";
  }

  if (valid) {
    location.href = "server.html";
  }
});
