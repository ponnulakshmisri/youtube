import React from "react";
import DataFetch from "../Fetch/DataFetch";
import Videobar from "../Videobar/Videobar";
import "./HomePage.css";
import { Link } from "react-router-dom";
function HomePage({ handlerVideoInput, activeElement }) {
  const localStorageData = localStorage.getItem("localVideo");
  const parsedLocalStorageData = localStorageData
    ? JSON.parse(localStorageData)
    : [];
  const trendingData = parsedLocalStorageData.data;
  console.log("data", trendingData);

  return (
    <>
      <div className={`video-container ${activeElement ? "active" : ""}`}>
        {trendingData?.map((item, index) => (
          <Link
            to={`/display/${item.title}/${item._id}`}
            key={`${item}${index}`}
            onClick={() => handlerVideoInput(item)}
          >
            <Link to={`/display`} onClick={() => handlerVideoInput(item)} />
            <Videobar
              key={item._id}
              video={item.video_url}
              description={item.description}
              value={item.thumbnail}
              title={item.title}
              cast={item.cast}
              director={item.director}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
export default HomePage;
