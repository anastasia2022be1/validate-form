# React Form Validation with Regex and Validator

This is a React project demonstrating how to perform form validation for a username and an email address. The project uses React State and the `validator` npm package to ensure the inputs are correct before the form is submitted.

## How it Works

The project includes:

- A form with two input fields: one for the username and one for the email address.
- A username input field validated using a Regex. Allowed characters are alphanumeric characters and the underscore (`_`).
- An email validation using the `validator` package, which checks if the email address follows a valid format.
- Error messages are displayed if the inputs are invalid.

## Features

- Username Validation:
  The username must only contain alphanumeric characters and underscores (\_). If the input is invalid, an error message is displayed.

- Email Validation:
  The validator package checks if the email is in a valid format (e.g., user@example.com).

- Button State:
  The "Send" button is disabled if either the username or email is invalid.

## Dependencies

- React
- validator (npm package)
