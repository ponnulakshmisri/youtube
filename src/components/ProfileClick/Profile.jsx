import React, { useEffect, useState } from "react";
// import img from '../../assets/google1.png'
import "./Profile.css";
import { AiOutlineGoogle } from "react-icons/ai";
import { LiaPortraitSolid } from "react-icons/lia";
import { BiArrowFromLeft } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { LuLanguages } from "react-icons/lu";
import { TbShieldLock } from "react-icons/tb";
import { BsGlobe, BsMoon } from "react-icons/bs";
import { FaRegKeyboard } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { RiFeedbackLine } from "react-icons/ri";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDataContext } from "../Service";

function Profile() {
  const { profileFetched } = useDataContext();
  const [showProfilePhoto, setShowProfilePhoto] = useState(false);

  const { refreshNavBar } = useDataContext();
  const [userNameLetter, setUserNameLetter] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const handlelogout = () => {
    refreshNavBar();

    localStorage.removeItem("UserDetails");
    setUserName("No Name");
    setUserEmail("No");
    setUserNameLetter("");
  };
  const [loginStatus, setLoginStatus] = useState(false);

  const localStorageUserDetails = () => {
    const dataFromLocal = JSON.parse(localStorage.getItem("UserDetails")) || [];
    if (dataFromLocal.username) {
      setLoginStatus(true);
      setUserEmail(dataFromLocal.emailId);
      setUserNameLetter(dataFromLocal.username.charAt(0));
      setUserName(dataFromLocal.username);
    } else {
      setLoginStatus(false);
    }
  };

  useEffect(() => {
    localStorageUserDetails();
  }, []);
  return (
    <>
      <div className="Subscription-container">
        <div className="profile-container">
          <div className="icon-circle1">
            {profileFetched ? (
              <img src={profileFetched} alt="Profile" className="profile-img" />
            ) : (
              <div className="icon-circle1">{userNameLetter.toUpperCase()}</div>
            )}
          </div>
          <div style={{ backgroundColor: "white" }}>
            <p
              style={{
                marginBottom: "5px",
                fontSize: "16px",
                fontWeight: "bold",
                whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
              }}
            >
              {userName.toUpperCase()}
            </p>
            <p style={{ marginBottom: "5px", fontSize: "16px",
      overflow: "hidden" }}>{userEmail}</p>
            <Link to="/yourchannel">
              <p
                style={{ marginBottom: "5px", fontSize: "16px", color: "Blue" }}
              >
                Your Account
              </p>
            </Link>
          </div>
        </div>
        <div className="main-container">
          <div className="scroll-container1">
            <div className="your-channel">
              <div className="icon-channel">
                <AiOutlineGoogle size={24} style={{ marginRight: "8px" }} />
                <p style={{ fontSize: "16px" }}>Google Account</p>
              </div>
              <div className="icon-channel">
                <LiaPortraitSolid size={24} style={{ marginRight: "8px" }} />
                <p style={{ fontSize: "16px" }}>Switch account</p>
                <IoIosArrowDropright size={24} style={{ marginLeft: "70px" }} />
              </div>
              <div className="icon-channel">
                <BiArrowFromLeft size={24} style={{ marginRight: "8px" }} />
                <p style={{ fontSize: "16px" }} onClick={() => handlelogout()}>
                  Sign out
                </p>
              </div>
            </div>
            <div className="your-channel">
              <div className="icon-channel">
                <BiArrowFromLeft size={24} style={{ marginRight: "8px" }} />
                <p style={{ fontSize: "16px" }}>Purchases and memberships</p>
              </div>
              <div className="icon-channel">
                <AiOutlineDollarCircle
                  size={24}
                  style={{ marginRight: "8px" }}
                />{" "}
                {/* Corrected the icon usage */}
                <p style={{ fontSize: "16px" }}> Your data in YouTube</p>
              </div>
            </div>
            <div className="your-channel">
              <div className="icon-channel">
                <BiArrowFromLeft size={24} style={{ marginRight: "8px" }} />
                <p style={{ fontSize: "16px" }}> Purchases and memberships</p>
              </div>
              <div className="icon-channel">
                <AiOutlineDollarCircle
                  size={24}
                  style={{ marginRight: "8px" }}
                />{" "}
                {/* Corrected the icon usage */}
                <p style={{ fontSize: "16px" }}> Your data in YouTube</p>
              </div>
            </div>
            <div className="your-channel">
              <div className="icon-channel">
                <BsMoon size={24} style={{ marginRight: "8px" }} />
                <p style={{ fontSize: "16px" }}> Appearance: Dark</p>
                <IoIosArrowDropright size={24} style={{ marginLeft: "70px" }} />
              </div>
              <div className="icon-channel">
                <LuLanguages size={24} style={{ marginRight: "8px" }} />
                <p style={{ fontSize: "16px" }}> Language: British English</p>
              </div>
              <div className="icon-channel">
                <TbShieldLock size={24} style={{ marginRight: "8px" }} />
                <p style={{ fontSize: "16px" }}> Restricted Mode: Off</p>
              </div>
              <div className="icon-channel">
                <BsGlobe size={24} style={{ marginRight: "8px" }} />
                <p style={{ fontSize: "16px" }}> Location: United Kingdom</p>
              </div>
              <div className="icon-channel">
                <FaRegKeyboard size={24} style={{ marginRight: "8px" }} />
                <p style={{ fontSize: "16px" }}> Keyboard shortcuts</p>
              </div>
            </div>

            <div className="your-channel">
              <div className="icon-channel">
                <AiOutlineSetting size={24} style={{ marginRight: "8px" }} />
                <p style={{ fontSize: "16px" }}>Setting</p>
              </div>
            </div>
            <div className="your-channel">
              <div className="icon-channel">
                <BiHelpCircle size={24} style={{ marginRight: "8px" }} />
                <p style={{ fontSize: "16px" }}> Help</p>
              </div>
              <div className="icon-channel">
                <RiFeedbackLine size={24} style={{ marginRight: "8px" }} />
                <p style={{ fontSize: "16px" }}> Send feedback</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
