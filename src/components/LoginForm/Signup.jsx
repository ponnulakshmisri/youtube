import React, { Component } from "react";
import "./SignIn.css";
import "./SignUp.css";
import { TextField } from "@mui/material";
import image from "../../assets/google.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDataContext } from "../Service";

function Signup() {
  const [userName, setUserName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signingToggle = true;
  const { refreshNavBar, refreshBar } = useDataContext();
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
    console.log("result", result);
    if (result.status === "success") {
      const userDetailsFromFetch = {
        username: result?.data.user.name,
        emailId: result?.data.user.email,
        id: result?.data.user._id,
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
    signingFetch(signUp, userName, userEmail, password);
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
          <h1 className="signin">Sign Up</h1>
          <p className="para-signin">Use your google account</p>
          <TextField
            onChange={(e) => handlerUserName(e)}
            className="inputfield"
            label="Enter your Username"
            placeholder="Username"
          />
          {userNameError && <p>Type a valid name</p>}
          <p className="forgot-password-link"></p>
          <TextField
            onChange={(e) => handlerEmail(e)}
            className="inputfield"
            label="Enter your email or phone"
            placeholder="Email"
            value={userEmail}
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
          {passwordError && <p>Type a valid password</p>}
          <p className="forgot-password-link"></p>
        </>
        <Link to="/">
          <button
            className="signup-btn"
            onClick={() => handlerSigning()}
            disabled={!allStatus}
          >
            Sign Up
          </button>
          {!allStatus && (
            <p className="error-message">
              Please enter valid input for all fields.
            </p>
          )}
        </Link>
      </div>
    </div>
  );
}

export default Signup;
