// Cache DOM elements
const form = document.getElementById("registrationForm");
const message = document.getElementById("message");
const createAccountButton = document.getElementById("create-account");
const registrationBox = document.querySelector(".registration-box");

// Toggle the visibility of the User Registration Form
createAccountButton.addEventListener("click", () => {
  if (registrationBox.style.display === "none") {
    registrationBox.style.display = "block";
    createAccountButton.textContent = "Hide Registration Form";
  } else {
    registrationBox.style.display = "none";
    createAccountButton.textContent = "Create New Account";
  }
});

// **DOM Manipulation**: Style input fields based on whether they are empty or filled
const inputs = form.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    input.style.border =
      input.value === "" ? "2px solid red" : "1px solid yellow";
  });
});

// **Event Handling and Form Validation**
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  // **Validation Checks**
  if (username.trim().length < 3) {
    alert("Username must be at least 3 characters.");
    return;
  }
  if (email.trim() === "") {
    alert("Email is required.");
    return;
  }
  const passwordPattern =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  if (password.length < 6 || !passwordPattern.test(password)) {
    alert(
      "Password must be at least 6 characters long and include one uppercase letter, one number, and one special character."
    );
    return;
  }
  if (password !== confirmPassword) {
    message.textContent = "Passwords do not match.";
    message.style.color = "red";
    return;
  }

  // **Success Actions**
  alert("Registration successful!");
  message.textContent = "You are now registered!";
  message.style.color = "green";
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);

  // Add welcome message to DOM
  const welcomeMessage = document.createElement("p");
  welcomeMessage.textContent = `Welcome, ${username}! Thank you for registering.`;
  welcomeMessage.style.color = "yellow";
  document.body.appendChild(welcomeMessage);

  form.reset(); // Clear form fields

  // Redirect to dashboard after a short delay
  setTimeout(() => {
    alert("Redirecting to your dashboard...");
    location.href = "/dashboard"; // Update URL as needed
  }, 3000); // 3-second delay before redirect
});

// **User Interaction and Styling**: Add hover effects to form
form.addEventListener("mouseover", function () {
  form.classList.add("highlight");
});
form.addEventListener("mouseout", function () {
  form.classList.remove("highlight");
});
