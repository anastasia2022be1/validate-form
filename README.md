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

  ## Redux

Although not included in this example, Redux is often used in larger React applications for managing global state. If you want to manage the form state, such as the validation error messages, across multiple components, Redux can help centralize and manage that state effectively. For more details, check out the [Redux documentation](https://react-redux.js.org/introduction/getting-started).

## validator Package

The `validator` package is a widely used npm package that offers a variety of string validation methods. For this project, we use the `isEmail` method from the package to check if the email entered by the user is in a valid format.

- **Official Documentation**: [validator on npm](https://www.npmjs.com/package/validator)
- **Usage Example**:
  ```
  import validator from 'validator';
  console.log(validator.isEmail('user@example.com'));  // true
  ```

## Dependencies

- **React**: A JavaScript library for building user interfaces.

- **validator** (npm package): A popular string validation library that includes methods like isEmail for email validation and many more.
