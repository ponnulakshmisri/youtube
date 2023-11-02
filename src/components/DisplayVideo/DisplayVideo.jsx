// 

import React, { useEffect, useState } from "react";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFatThin } from "react-icons/pi";
import { BsDownload } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import SuggestionVideo from "../SuggestionVideo/SuggestionVideo";
import ReactPlayer from "react-player";
import "./DisplayVideo.css";
import * as Popover from "@radix-ui/react-popover";
import { AiOutlineScissor } from "react-icons/ai";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { PiFlagPennantFill } from "react-icons/pi";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";

function DisplayVideo({ dataSending }) {
  const randomViews = (Math.random() * 10).toFixed(2);
  const [dataReceive, SetDataReceive] = useState([]);

  const handlerVideoSuggestion = (e) => {
    SetDataReceive(e);
  };

  useEffect(() => {
    SetDataReceive(dataSending);
  }, []);

  console.log("DataReceive", dataReceive);

  return (
    <div className="container1">
      <div className="videodisplay-container">
        <ReactPlayer
          className="video-display"
          url={dataReceive.video_url}
          controls={true}
          width="865px"
          height="487px"
          light={false}
          thumbnail={dataReceive?.thumbnail}
        />
        <div className="video-info">
          <h1 className="video-title">{dataReceive?.title}</h1>
          <span className="separator">|</span>
          <div className="cast-list">
            {dataReceive?.cast?.map((item, index) => (
              <React.Fragment key={index}>
                <p className="cast-item">{item}</p>
                {index !== dataReceive?.cast.length - 1 && (
                  <span className="separator">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="icon">
          <div className="icon-title-container">
            <div className="icon-circle">
              <img src={dataReceive?.thumbnail} alt="Icon" />
            </div>
            <div className="display-heading">
              <h2>{dataReceive?.director}</h2>
              <p>{`${randomViews.toLocaleString()}M Views`}</p>
            </div>
            <div className="subscribe-btn">Subscribe</div>
            <div className="action-buttons">
              <div className="like-dislike">
                <div className="like">
                  <BiLike className="icon-shape" />
                  <div>Like</div>
                </div>
                <span className="line"></span>
                <div className="dislike">
                  <BiDislike className="icon-shape" />
                </div>
              </div>
              <div className="space"></div>
              <div className="share">
                <PiShareFatThin className="icon-shape" />
                <span>Share</span>
              </div>
              <div className="space"></div>
              <div className="download">
                <BsDownload className="icon-shape" />
                <span>Download</span>
              </div>
              <div className="space"></div>
              <div className="menu">
                <Popover.Root>
                  <Popover.Trigger asChild>
                    <button className="IconButton" aria-label="Update dimensions">
                      <BsThreeDots className="icon-shape" />
                    </button>
                  </Popover.Trigger>
                  <Popover.Content className="PopoverContent" sideOffset={5}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                        <AiOutlineScissor />
                        <label style={{ marginLeft: '10px' }}>Clip</label>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                        <MdOutlinePlaylistAdd />
                        <label style={{ marginLeft: '10px' }}>Playlist</label>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                        <PiFlagPennantFill />
                        <label style={{ marginLeft: '10px' }}>Report</label>
                      </div>
                    </div>
                  </Popover.Content>
                </Popover.Root>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SuggestionVideo
          handlerVideoSuggestion={handlerVideoSuggestion}
          data={dataReceive}
        />
      </div>
    </div>
  );
}

export default DisplayVideo;
