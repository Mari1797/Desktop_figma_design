// index.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB17qm8SoOB3Z4q7tbZl5n5Zqh-NaSvoIc",
  authDomain: "portfolio-70f27.firebaseapp.com",
  projectId: "portfolio-70f27",
  storageBucket: "portfolio-70f27.appspot.com",
  messagingSenderId: "768143289195",
  appId: "1:768143289195:web:eea8e5c5c9b2a89a2d7a2e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
auth.languageCode = "en";

document.getElementById("google-btn").addEventListener("click", () => {
  const mediaQuery = window.matchMedia("(min-width: 769px)");

  if (mediaQuery.matches) {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        window.location.href = "./Login/Login.html";
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  } else {
    const auth = getAuth();
    signInWithRedirect(auth, provider);
    window.location.href = "./Login/Login.html";
  }
  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
});

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
