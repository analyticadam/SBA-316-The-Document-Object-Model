# SBA 316: The Document Object Model - User Registration Project

This project is a user registration and newsletter subscription form that includes custom form validation, DOM manipulation, and interactive styling. It meets all specified requirements for SBA 316, demonstrating a comprehensive application of JavaScript, HTML, and CSS techniques.

## Project Description

The application features a **User Registration Form** with robust validation, enforcing minimum length requirements and a strong password policy. Users can create an account and receive feedback on successful registration. The project also includes a **Newsletter Subscription Form** and a **Create Account** button that toggles the registration form’s visibility. Interactive validation and dynamic feedback enhance user experience.

## Requirements

All project requirements are completed, as detailed below:

### DOM Manipulation

- [x] **Cache at least one element using `getElementById`.**
- [x] **Cache at least one element using `querySelector` or `querySelectorAll`.**
- [x] **Iterate over a collection of elements to accomplish a task.**
  - _Used `forEach` to validate input fields and adjust styling based on field values._
- [x] **Create at least one element using `createElement`.**
  - _Created a welcome message element upon successful registration._
- [x] **Use `appendChild` or `prepend` to add elements to the DOM.**
  - _Appended the welcome message to the page after successful registration._

### User Interaction and Styling

- [x] **Modify HTML or text content based on user interaction (`innerHTML`, `innerText`, or `textContent`).**
  - _Updated message content based on registration success or failure._
- [x] **Modify style or CSS classes of elements in response to user actions (`style`, `classList`).**
  - _Adjusted input borders based on validation and added a highlight class to the form on hover._
- [x] **Modify at least one attribute of an element in response to user interaction.**
  - _Set focus to specific fields with `.focus()` based on validation feedback._

### Browser Object Model (BOM)

- [x] **Use at least two BOM properties or methods.**
  - _Used `alert()` for user feedback and `location.href` to simulate a redirect after registration._

### Form Validation

- [x] **Include a form or input with HTML attribute-based validation.**
  - _Used `required` and `minlength` attributes for form fields._
- [x] **Include DOM event-based validation for a form or input.**
  - _Implemented custom validation for password complexity, minimum length, and confirmation matching, displaying error messages with `alert()`._

### Git and Documentation

- [x] **Commit frequently to a git repository.**
- [x] **Include a README file with a description of your application.**
