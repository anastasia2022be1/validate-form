import { useState } from 'react'
import './App.css'
import validator from "validator";

// console.log(validator.isEmail('foo@bar.com'));

function App() {
  const [hasError, setHasError] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChangeUsername(e) {
    if (/^[a-zA-Z0-9_]+$/.test(e.target.value)) {
      setHasError(false);
    } else {
      setHasError(true);
      setErrorMessage("Folgende Zeichen sind erlaubt: alphanumerische Zeichen und _")
    }
    // setzte den Wert unabhängig davon, Benutzer kann Formular aber erst abschicken wenn richtig
    setUsername(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    if (hasError === false) {
      // nur dann darfst du abschicken
    }
  }

  function handleChangeEmail(e) {
    // check ob email korrekt
    const input = e.target.value.trim();
    if (validator.isEmail(input)) {
      setHasError(false);
    } else {
      setHasError(true);
      setErrorMessage("Gebe eine gültige E-Mail ein")
    }

    setEmail(input);
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={username} onChange={handleChangeUsername} />
        </div>

        <div>
        <label htmlFor="email">Email</label>
        <input type="email"  id="email" value={email} onChange={handleChangeEmail} />
        </div>

        <button disabled={hasError}>Send</button>
      </form>
      {
        hasError &&
        <div>{errorMessage}</div>
      }
      
    </>
  )
}

export default App