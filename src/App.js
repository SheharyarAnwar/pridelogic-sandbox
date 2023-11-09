import "./styles.css";
import { useState } from "react";

const usersInit = ["Admin", "User"];
export default function App() {
  const [users, setUsers] = useState(usersInit);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Name cannot be empty");
    }
    if (!validateEmail(email)) {
      setError("Email is invalid");
    }
    if (password.length > 8) {
    }
  };
  /**
   *
   * @param {string} password
   */
  const validatePassword = (password) => {
    const regex = new RegExp(/^[ A-Za-z0-9_@./#&+-]*$/);
    if (!password.length > 8) return false;
    if (!password.match(regex)) {
    }
  };

  const validateEmail = (email) => {
    const [beforeAt, afterAt] = email.split("@");
    if (afterAt && afterAt.endsWith(".com")) {
      return true;
    }
    return false;
  };

  return (
    <div className="App">
      <div>Current User: {users[0]}</div>
      <button
        onClick={() => {
          setUsers((prev) => {
            const copy = [...prev];
            return copy.reverse();
          });
        }}
      >
        Toggle User
      </button>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>{" "}
        <label>
          Password:
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button onClick={handleSubmit}>Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

/*
Name Validation: The name field should not be empty.
Email Validation: The email address should be in a valid format.
Password Validation: The password should be alphanumeric, include at least one special character, and be at least 8 characters long.
Toggle Functionality: Ensure the toggle between "User" and "Manager" is functioning properly.
Log In Action: The "Log in" button should redirect the user to another (empty) page.
Code Upload: At the end of the task, upload the code to a public proje
*/
