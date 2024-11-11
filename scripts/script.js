// Cache DOM elements
const form = document.getElementById("registrationForm");
const message = document.getElementById("message");
const createAccountButton = document.getElementById("create-account");
const registrationBox = document.getElementById("registration-box");

// Function to clear the success message
function clearMessage() {
  message.textContent = ""; // Clears the success message
  message.style.color = ""; // Reset color
}

// Clear message on page load
window.addEventListener("load", clearMessage);

// Toggle the registration form visibility and clear message when "Create New Account" is clicked
createAccountButton.addEventListener("click", () => {
  registrationBox.style.display =
    registrationBox.style.display === "none" ? "block" : "none";
  createAccountButton.textContent =
    registrationBox.style.display === "none"
      ? "Create New Account"
      : "Hide Registration Form";
  clearMessage(); // Clear the message when toggling form
});

// Minimum length validation, sequential field validation, and password complexity check
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");

  // Password validation regex: at least one uppercase, one number, and one special character
  const passwordPattern =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  // Allowed email domains
  const allowedDomains = [
    "hotmail.com",
    "gmail.com",
    "outlook.com",
    "yahoo.com",
  ];

  // Validate username
  if (username.value.trim().length < 3) {
    message.textContent = "Username must be at least 3 characters.";
    message.style.color = "red";
    username.focus();
    return;
  }

  // Validate email length
  if (email.value.trim().length < 3) {
    message.textContent = "Email must be at least 3 characters.";
    message.style.color = "red";
    email.focus();
    return;
  }

  // Validate email domain
  const emailDomain = email.value.split("@")[1];
  if (!allowedDomains.includes(emailDomain)) {
    message.textContent =
      "Email domain must be one of the following: hotmail.com, gmail.com, outlook.com, yahoo.com.";
    message.style.color = "red";
    email.focus();
    return;
  }

  // Check if passwords match before validating password complexity
  if (confirmPassword.value !== password.value) {
    message.textContent = "Passwords do not match. Please check and try again.";
    message.style.color = "red";
    confirmPassword.focus();
    return;
  }

  // Validate password complexity
  if (password.value.length < 6 || !passwordPattern.test(password.value)) {
    message.textContent =
      "Password must contain at least one uppercase letter, one number, and one special character.";
    message.style.color = "red";
    password.focus();
    return;
  }

  // Store registration data in local storage
  localStorage.setItem("username", username.value);
  localStorage.setItem("email", email.value);

  message.textContent = "Registration successful!";
  message.style.color = "green";

  form.reset();
});
