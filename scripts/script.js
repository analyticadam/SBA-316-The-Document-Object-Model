// Cache DOM elements
const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

// Cache DOM elements
const createAccountButton = document.getElementById("create-account");
const registrationSection = document.getElementById("registration-section");

//Toggle User Registration Form Visibility
createAccountButton.addEventListener("click", () => {
  // Show the registration form
  registrationBox.style.display = "block";
  // Optionally hide the "Create New Account" button after clicking
  createAccountButton.style.display = "none";
});

// // Toggle Registration Form Visibility
// createAccountButton.addEventListener("click", () => {
//   if (registrationBox.style.display === "none") {
//     registrationBox.style.display = "block";
//     createAccountButton.textContent = "Hide Registration Form";
//   } else {
//     registrationBox.style.display = "none";
//     createAccountButton.textContent = "Create New Account";
//   }
// });

// Form Validation and Password Requirements
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  // Regex for Password Validation (Uppercase, Number, Special Character)
  const passwordPattern =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  // Sequential Validation
  if (username.value.trim().length < 3) {
    alert("Username must be at least 3 characters.");
    username.focus();
    return;
  }

  if (email.value.trim() === "") {
    alert("Email is required.");
    email.focus();
    return;
  }

  if (
    password.value.trim().length < 6 ||
    !passwordPattern.test(password.value)
  ) {
    alert(
      "Password must be at least 6 characters long and include one uppercase letter, one number, and one special character."
    );
    password.focus();
    return;
  }

  // Success Message
  message.textContent = "Registration successful!";
  message.style.color = "green";
  form.reset();
});
