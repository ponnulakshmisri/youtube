import { ButtonGroup } from "@mui/material";
import HomePage from "./Homepage/HomePage.jsx";
import Signup from "./LoginForm/Signup.jsx";
import SignIn from "./LoginForm/SignIn.jsx";
import Navbar from "./Navgation/Navbar.jsx";
import Slidebar from "./Slidebar/Slidebar.jsx";
import "./First.css";
import Videobar from "./Videobar/Videobar.jsx";
import Buttongroup from "./ButtonGroup/Buttongroup.jsx";
import DisplayVideo from "./DisplayVideo/DisplayVideo.jsx";
import SuggestionVideo from "./SuggestionVideo/SuggestionVideo.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import SmallNav from "./Navigation/SmallNav.jsx";
import SearchVideo from "./SearchVideo/SearchVideo.jsx";
import Comingsoon from "./Comingsoon/Comingsoon.jsx";

import "./First.css";
import { useEffect } from "react";
import Profile from "./ProfileClick/Profile.jsx";
import YourChannel from "./Yourchannel/YourChannel.jsx";
import { useDataContext } from "./Service.jsx";
import Trending from "./Trending/Trending.jsx";
import Help from "./Help/Help.jsx";
import Music from "./Trending/Music.jsx";
import Movie from "./Trending/Movie.jsx";
import Live from "./Trending/Live.jsx";
import Document from "./Trending/Document.jsx";

function First() {
  const location = useLocation();
  const [videoInput, setVideoInput] = useState();
  const [searchInput, setSearchInput] = useState();
  const [navbarScreenWidth, setNavbarScreenWidth] = useState(false);
  const [profileInput, setProfileInput] = useState(false);

  const [showhelpContainer, setShowHelpContainer] = useState(false);

  const { refreshBar } = useDataContext();

  const [loginStatus, setLoginStatus] = useState(false);

  const handlerHelpContainer = (value) => {
    setShowHelpContainer(value);
  }

  const handlerVideoInput = (data) => {
    setVideoInput(data);
  };
  const handleprofileclick = () => {
    setProfileInput(!profileInput);
  };
  const handlerSearchDataSending = (data) => {
    setVideoInput(data);
  };

  const [barClick, setBarClick] = useState(false);
  const [searchKey, setSearchKey] = useState("");

  const handleBarClick = () => {
    setBarClick(!barClick);
  };
  const handlerNavClose = () => {
    setBarClick(true);
  };
  const handlerSearchValue = (value) => {
    setSearchKey(value);
  };

  useEffect(() => {
    setNavbarScreenWidth(barClick);
    const loginStore = JSON.parse(localStorage.getItem("UserDetails")) || [];
    if (loginStore.username) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }

  }, [barClick, refreshBar, loginStatus,location.pathname]);

  console.log("loginStatus", loginStatus);

  return (
    <>
      {location.pathname === "/" && !barClick && <Slidebar handlerHelpContainer={handlerHelpContainer} />}
      {location.pathname === "/" && barClick && <SmallNav />}
      {location.pathname !== "/" && !barClick && (
        <div className="navbar-splitter">
          <div className="navbar-first-part">
            <Slidebar />
          </div>
          
          <div
            onClick={() => handlerNavClose()}
            className="navbar-second-part"
          >
          </div>
        </div>
      )}
      {location.pathname !== "/signin" && location.pathname !== "/signup" && (
        <Navbar
          handlerSearchValue={handlerSearchValue}
          handleBarClick={handleBarClick}
          handleprofileclick={handleprofileclick}
        />
      )}
      {profileInput && loginStatus && (
        <div className="profile-control">
          <Profile />
        </div>
      )}
      <Routes>
        <Route path="/" element={
            <HomePage
              activeElement={navbarScreenWidth}
              handlerVideoInput={handlerVideoInput}
            />
          }
        />
        <Route
          path="/trendingdata"
          element={
            <Trending
              activeElement={navbarScreenWidth}
              handlerVideoInput={handlerVideoInput}
              handlerNavClose = {handlerNavClose}
            />
          }
        />
        <Route
          path="/music"
          element={
            <Music
              activeElement={navbarScreenWidth}
              handlerVideoInput={handlerVideoInput}
              handlerNavClose = {handlerNavClose}
            />
          }
        />
        <Route
          path="/live"
          element={
            <Live
              activeElement={navbarScreenWidth}
              handlerVideoInput={handlerVideoInput}
              handlerNavClose = {handlerNavClose}
            />
          }
        />
        <Route
          path="/movie"
          element={
            <Movie
              activeElement={navbarScreenWidth}
              handlerVideoInput={handlerVideoInput}
              handlerNavClose = {handlerNavClose}
            />
          }
        />
        <Route
          path="/document"
          element={
            <Document
              activeElement={navbarScreenWidth}
              handlerVideoInput={handlerVideoInput}
              handlerNavClose = {handlerNavClose}
            />
          }
        />
        <Route
          path="/display/:name/:id"
          element={<DisplayVideo dataSending={videoInput} />}
        />
        <Route
          path="/search-result"
          element={
            <SearchVideo
              searchValue={searchKey}
              handlerSearchDataSending={handlerSearchDataSending}
            />
          }
        />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/yourchannel" element={<YourChannel />} />
        <Route path="/comingsoon" element={<Comingsoon />} />
      </Routes>
      { showhelpContainer &&  <Help  handlerHelpContainer={handlerHelpContainer} />}
    </>
  );
}
export default First;
