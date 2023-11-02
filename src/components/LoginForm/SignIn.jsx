import React, { Component } from "react";
import "./SignIn.css";
import { TextField } from "@mui/material";
import image from "../../assets/google.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDataContext } from "../Service";

function SignIn() {
  const { refreshNavBar, refreshBar } = useDataContext();
  const [userName, setUserName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signingToggle = false;

  const [userNameError, setUserNameError] = useState(true);
  const [userEmailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);

  const [loginStatusError, setLoginStatusError] = useState(true);

  let allStatus =
    (signingToggle && !userNameError && !userEmailError && !passwordError) ||
    (!signingToggle && !userEmailError && !passwordError);

  const nameRegex = /^[a-zA-Z\-]+$/;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handlerUserName = (e) => {
    if (e.target.value.match(nameRegex)) {
      setUserName(e.target.value);
      setUserNameError(false);
    } else {
      setUserName(e.target.value);
      setUserNameError(true);
    }
  };
  const handlerEmail = (e) => {
    if (e.target.value.match(emailRegex)) {
      setEmail(e.target.value);
      setEmailError(false);
    } else {
      setEmail(e.target.value);
      setEmailError(true);
    }
  };
  const handlerPassword = (e) => {
    if (e.target.value.length > 7) {
      setPassword(e.target.value);
      setPasswordError(false);
    } else {
      setPassword(e.target.value);
      setPasswordError(true);
    }
  };

  const signUp = "api/v1/user/signup";
  const login = "api/v1/user/login";
  const updatePassword = "api/v1/user/updateMyPassword";

  const [loginStatus, setLoginStatus] = useState(false);

  const localStorageUserDetails = () => {
    const dataFromLocal = JSON.parse(localStorage.getItem("UserDetails")) || [];
    if (dataFromLocal.username) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  };

  useEffect(() => {
    localStorageUserDetails();
    setEmail("");
    setUserName("");
    setPassword("");
    setUserNameError(true);
    setEmailError(true);
    setPasswordError(true);
  }, [loginStatus, refreshBar]);

  const signingFetch = async (url, username, useremail, userpassword) => {
    let myHeaders = new Headers();
    myHeaders.append("projectID", "f104bi07c490");
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      name: `${username}`,
      email: `${useremail}`,
      password: `${userpassword}`,
      appType: "ott",
    });

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(
      `https://academics.newtonschool.co/${url}`,
      requestOptions
    );
    const result = await response.json();
    if (result.status === "success") {
      const userDetailsFromFetch = {
        username: result?.data.name,
        emailId: result?.data.email,
        id: result?.data._id,
        token: result?.token,
      };
      setLoginStatus(true);
      localStorage.setItem("UserDetails", JSON.stringify(userDetailsFromFetch));
    } else {
      setLoginStatusError(result.message);
    }
  };

  const handlerSigning = () => {
    refreshNavBar();
    signingFetch(login, userName, userEmail, password);
  };

  const handlerLogout = () => {
    setLoginStatus(false);
    localStorage.removeItem("UserDetails");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <>
          <img src={image} className="logo" alt="google"></img>
          <h1 className="signin">Sign In</h1>
          <p className="para-signin">Use your google account</p>
          <TextField
            onChange={(e) => handlerEmail(e)}
            className="inputfield"
            label="Enter your email or phone"
            placeholder="Email"
            error={userEmailError}
            helperText={userEmailError ? "Invalid email format" : ""}
          />
          <p className="forgot-password-link"></p>
        </>
        <>
          <TextField
            onChange={(e) => handlerPassword(e)}
            className="inputfield"
            label="Enter your password"
            placeholder="password"
            type="password"
          />
          <p className="forgot-password-link">Forgot password?</p>
        </>
        <p className="learnmore">
          Not your computer? Use Guest mode to sign in privately.
        </p>
        <div className="learnmore1">Learn More</div>
        <div className="container">
          <Link to="/signup">
            <p className="create-account-link">Create Account</p>
          </Link>
          <Link to="/">
            <button
              className="signup-btn"
              onClick={() => handlerSigning()}
              disabled={!allStatus}
            >
              Sign In
            </button>
          </Link>
        </div>
        {!allStatus && (
          <p className="error-message">Please enter correct input.</p>
        )}
      </div>
    </div>
  );
}

export default SignIn;
