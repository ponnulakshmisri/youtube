import React from "react";
import { BsSearch } from "react-icons/bs";
import { BiSolidVideoPlus } from "react-icons/bi";
import { BsFillBellFill } from "react-icons/bs";
import { VscThreeBars } from "react-icons/vsc";
import avatarImage from "../../assets/avatar.png";
import youtubeicon from "../../assets/youtubeicon.png";
import { CgProfile } from "react-icons/cg";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Profile from "../ProfileClick/Profile.jsx";
import { useEffect } from "react";
import SignIn from "../LoginForm/SignIn";
import { useDataContext } from "../Service";

function Navbar({ handleBarClick, handlerSearchValue, handleprofileclick }) {
   const { refreshBar,profileFetched } = useDataContext();
    const [inputType, setInputType] = useState();
  const [userNameLetter, setUserNameLetter] = useState("")
  const handlerSearchInputType = (e) => {
    setInputType(e.target.value);
    handlerSearchValue(e.target.value);
  };

  const [loginStatus, setLoginStatus] = useState(false);
  console.log(" nav bar loginStatus", loginStatus);
  const dataFromLocal = JSON.parse(localStorage.getItem('UserDetails')) || [];
  
  useEffect(() => {
    console.log("rerender chk")
    if (dataFromLocal.username) {
      setLoginStatus(true);
      setUserNameLetter(dataFromLocal.username.charAt(0));
    } else {
      setLoginStatus(false);
    }
  }, [loginStatus, refreshBar, location.pathname]);

  


  return (
    <div className="header">
      <div className="header-left">
        <VscThreeBars onClick={() => handleBarClick()} className="navbar" />
        <div className="icon-container">
          <Link to="/">
            <img src={youtubeicon} className="you-icon" />
          </Link>
        </div>
      </div>
      <div className="header-mid">
        <input
          onChange={(e) => handlerSearchInputType(e)}
          type="text"
          placeholder="Search"
        />
        <div className="line"></div>
        <Link to="/search-result">
          <BsSearch className="search-icon" />
        </Link>
      </div>
      <div className="header-right">
        {!loginStatus && (
          <Link to="/signin">
            <div className="sign-in-container">
              <CgProfile style={{ fontSize: 24 }} />
              Sign In
            </div>
          </Link>
        )}
        {loginStatus && (
          <div className="name-container">
            {/* Your icons and image */}
            <BiSolidVideoPlus
              style={{ fontSize: 24 }}
              className="header-icon"
            />
            <BsFillBellFill style={{ fontSize: 24 }} className="header-icon" />
           
            <div onClick={handleprofileclick} className="header-icon">
            
            {profileFetched ? (
              <img src={profileFetched} alt="Profile" className="nav-profile-img" />
            ) : (
              <div className="letter-styling">{userNameLetter.toUpperCase()}</div>
            )}
         
           

            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Navbar;
