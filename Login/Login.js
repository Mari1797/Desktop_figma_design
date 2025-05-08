const email = document.querySelector(".email");
const password = document.querySelector(".password");
const form = document.getElementById("form_id");
const emailError = document.querySelector(".error_email");
const passwordError = document.querySelector(".error_password");

form.addEventListener("submit", (e) => {
  if (!email.value.includes("@")) {
    emailError.textContent = "Please add a valid email";
    e.preventDefault();
  } else {
    emailError.textContent = "";
  }

  if (password.value.length < 6) {
    passwordError.textContent = "Password must be more than 6 characters";
    e.preventDefault();
  }
});
