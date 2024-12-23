import React, { useState } from "react";
import "./Register.css";


const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); // State to hold the error message
  const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

const setUsernameValue= (event) => {
    setUsername(event.target.value)
}
const setEmailValue = (event) => {
    setEmail(event.target.value)
}
const setPasswordValue = (event) => {
    setPassword(event.target.value) 
}
const setConfirmPasswordValue = (event) => {
  
    setConfirmPassword(event.target.value)
}


  const handleSubmit = async (event) => {
    event.preventDefault(); 
    setIsLoading(true); // Set loading to true while the request is being processed
    setError(""); // Clear any previous error

    console.log("Form data:", { username, email, password, confirmPassword })

    const raw = JSON.stringify({
      username,
      email,
      password,
      confirmPassword
    });
    
    console.log(raw);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: raw,
      redirect: "follow"
    };
    
    try {
        const response = await fetch("http://localhost:5000/api/register", requestOptions);
        const result = await response.json(); 
         // Parse JSON response

        if (response.ok) {
          console.log('User created:', result);
          alert("User registered successfully!"); 
          setUsername("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        } else {
          setError(result.message || "Registration failed. Please try again.");
          console.error('Error:', result.message);  // Display the error message
        }
      } catch (error){
        console.error("Error during fetch:", error);
      setError("Registration failed. Please try again.");
    } finally {
      setIsLoading(false); // Set loading to false after the request finishes
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
        <div>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={setUsernameValue}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={setEmailValue}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={setPasswordValue}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={setConfirmPasswordValue}
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit" className="login-button" disabled={isLoading}>
          {isLoading ? "Registering..." : "Register"}
          </button>
          </div>
        </form> 
        {error && <p className="error-message">{error}</p>} {/* Display error message if any */}
      </div>
      </div> 
  );
}

export default Register;

