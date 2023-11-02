import React from "react";
import ReactPlayer from "react-player";
import image from "../../assets/video.jpg";
import "./Videobar.css";

function Videobar(props) {
  const randomViews = (Math.random() * 100).toFixed(2);
  const randomMinutes = Math.floor(Math.random() * 60) + 1;

  return (
    <>
      <div className="container">
        <div className="videocardContainer">
          <div className="videocard">
            <img src={props.value} className="video-bar" alt="image" />
            <div className="icon-title-container">
              <div className="icon-circle">
                <img src={props.value} alt="Icon" />
              </div>
              <h2>{props.title}</h2>
            </div>
            <div className="para">
              <p>{props.director}</p>
              <p>{`${randomViews.toLocaleString()}M Views • ${randomMinutes} minutes ago`}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Videobar;
