import React, { useEffect } from "react";
import DataFetch from "../Fetch/DataFetch";
import Videobar from "../Videobar/Videobar";
import "../Homepage/HomePage.css";
import { Link } from "react-router-dom";

function Trending({ handlerVideoInput, activeElement, handlerNavClose }) {
  const localStorageData = localStorage.getItem("localVideo");
  const parsedLocalStorageData = localStorageData
    ? JSON.parse(localStorageData)
    : [];
  const trendingData = parsedLocalStorageData.data;
  console.log("data", trendingData);

  const getRandomItems = (count) => {
    const randomItems = [];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * trendingData.length);
      const randomItem = trendingData[randomIndex];
      randomItems.push(randomItem);
    }
    return randomItems;
  };

  const numberOfRandomItems = 30;

  const randomItemsArray = getRandomItems(numberOfRandomItems);

  useEffect(()=> {
    handlerNavClose();
  }, [])

  return (
    <div className={`video-container ${activeElement ? "active" : ""}`}>
      {randomItemsArray.map((randomItem, index) => (
        <Link
          to={`/display/${randomItem.title}/${randomItem._id}`}
          onClick={() => handlerVideoInput(randomItem)}
          key={index}
        >
          <Link to={`/display`} onClick={() => handlerVideoInput(randomItem)} />
          <Videobar
            key={randomItem._id}
            video={randomItem.video_url}
            description={randomItem.description}
            value={randomItem.thumbnail}
            title={randomItem.title}
            cast={randomItem.cast}
            director={randomItem.director}
          />
        </Link>
      ))}
    </div>
  );
}

export default Trending;
