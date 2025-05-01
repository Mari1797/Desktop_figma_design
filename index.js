const form = document.querySelector(".form");
const user_name = document.querySelector(".name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const terms = document.querySelector('input[name="terms"]'); // Target checkbox by name
const nameError = user_name.parentElement.querySelector(".error_name");
const emailError = email.parentElement.querySelector(".error_email");
const passwordError = password.parentElement.querySelector(".error_password");
const termsError = document.querySelector(".terms-error");

function Validation() {
  form.addEventListener("submit", (e) => {
    let hasError = false;

    // Name validation
    if (user_name.value.trim() === "") {
      nameError.textContent = "Name must not be empty";
      hasError = true;
    } else {
      nameError.textContent = "";
    }

    // Email validation
    if (!email.value.includes("@")) {
      emailError.textContent = "Enter a valid email address";
      hasError = true;
    } else {
      emailError.textContent = "";
    }

    // Password validation
    if (password.value.trim().length < 6) {
      passwordError.textContent = "Password must be at least 6 characters";
      hasError = true;
    } else {
      passwordError.textContent = "";
    }

    // Terms checkbox validation
    if (!terms.checked) {
      termsError.textContent = "You must agree to the terms and policy";
      hasError = true;
    } else {
      termsError.textContent = "";
    }

    // Prevent form submission if there's any validation error
    if (hasError) {
      e.preventDefault(); // Prevent the form from submitting if any error
    }
  });
}

Validation(); // Call the validation function to enable the event listener
