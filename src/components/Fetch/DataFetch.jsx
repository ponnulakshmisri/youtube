import { useEffect, useState } from "react";
import axios from "axios";

function DataFetch() {
  const [videoStore, setVideoStore] = useState([]);

  const handleVideo = () => {
    const tempLocalVideo = JSON.parse(localStorage.getItem("localvideo")) || [];
    if (!tempLocalVideo || tempLocalVideo.length === 0) {
      const headers = {
        "Content-Type": "application/json",
        projectId: "f104bi07c490",
      };

      axios
        .get("https://academics.newtonschool.co/api/v1/ott/show?limit=100", {
          headers: headers,
        })
        .then((data) => {
          const result = data.data;
          console.log(result);
          setVideoStore(result);
          localStorage.setItem("localVideo", JSON.stringify(result));
        })
        .catch((error) => console.log(error));
    } else {
      setVideoStore(tempLocalVideo);
    }
  };
  useEffect(() => {
    handleVideo();
  }, []);
  return <>{/* <h1>Hai</h1> */}</>;
}
export default DataFetch;
