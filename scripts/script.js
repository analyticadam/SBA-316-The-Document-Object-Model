// DOM Manipulation
const form = document.getElementById("registrationForm"); // Cache element by ID
const message = document.querySelector("#message"); // Cache element with querySelector

// Event Handling
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Form validation
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // BOM method example (alert) and display message based on form data
  if (username && email && password) {
    alert("Registration successful!"); // Use BOM alert
    message.textContent = "Registration Complete!";
    message.style.color = "green";
    form.reset(); // Clear form after successful submission
  } else {
    message.textContent = "Please fill in all fields.";
  }
});

// Modify style based on user interaction
form.addEventListener("mouseover", function () {
  form.style.border = "2px solid green";
});
form.addEventListener("mouseout", function () {
  form.style.border = "2px solid yellow";
});

// Iterate over input fields for example validation feedback
const inputs = form.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value === "") {
      input.style.border = "2px solid red";
    } else {
      input.style.border = "1px solid yellow";
    }
  });
});
