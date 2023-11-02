// // ExampleComponent.js
import React from "react";
// import img from '../../assets/google1.png'; // Check the image path
import "./SuggestionVideo.css";
import DisplayVideo from "../DisplayVideo/DisplayVideo";

function SuggestionVideo({ data, handlerVideoSuggestion }) {
  // const randomViews = (Math.random() * 100).toFixed(2);
  // const randomMinutes = Math.floor(Math.random() * 60) + 1;

  const localStorageData = localStorage.getItem("localVideo");
  const parsedLocalStorageData = localStorageData
    ? JSON.parse(localStorageData)
    : [];
  const allVideos = parsedLocalStorageData.data;
  const keywords = data.keywords;
  // console.log("value",allVideos)
  const recommend = [];
  keywords?.map((d) => {
    allVideos.map((dd) => {
      if (dd.keywords.includes(d)) {
        recommend.push(dd);
      }
    });
  });
  // ... (previous code)

return (
  <>
    <div className="recommend-container">
      {recommend?.map((item, index) => {
        const randomViews = (Math.random() * 100).toFixed(2);
        const randomMinutes = Math.floor(Math.random() * 60) + 1;

        return (
          <div
            onClick={() => handlerVideoSuggestion(item)}
            key={`${item._id}${index}`}
            className="container2"
          >
            <div className="text">
              <h3 className="sugVideo-heading">{item.title}</h3>
              <div className="sugvideo-title">
                <h5>{item.director}</h5>
                <p className="sugvideo-views">{`${randomViews.toLocaleString()}M Views • ${randomMinutes} minutes ago`}</p>
              </div>
            </div>

            <div className="image">
              <img
                src={item.thumbnail}
                alt="Your Image Description"
                className="recommend-image"
              />
            </div>
          </div>
        );
      })}
    </div>
  </>
);

  // return (
  //   <>
  //     <div className="recommend-container">
        
  //       {recommend?.map((item, index) => (
  //         <div
  //           onClick={() => handlerVideoSuggestion(item)}
  //           key={`${item._id}${index}`}
  //           className="container1"
  //         >
  //           <div className="text">
  //             <h3 className="sugVideo-heading">{item.title}</h3>
  //             <div className="sugvideo-title">
  //               <h5>{item.director}</h5>
  //               <p>{`${randomViews.toLocaleString()}M Views • ${randomMinutes} minutes ago`}</p>
  //             </div>
  //           </div>

  //           <div className="image">
  //             <img
  //               src={item.thumbnail}
  //               alt="Your Image Description"
  //               className="recommend-image"
  //             />
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </>
  // );
}

export default SuggestionVideo;

// import React from 'react';
// import './SuggestionVideo.css';

// function SuggestionVideo({ data }) {
//   const localStorageData = localStorage.getItem("localVideo");
//   const parsedLocalStorageData = localStorageData ? JSON.parse(localStorageData) : [];
//   const allVideos = parsedLocalStorageData.data;
//   const keywords = data.keywords;
//   console.log("value", allVideos);

//   const recommend = [];
//   keywords.forEach((d) => {
//     allVideos.forEach((dd) => {
//       if (dd.keywords.includes(d) && !recommend.some((item) => item._id === dd._id)) {
//         recommend.push(dd);
//       }
//     });
//   });

//   console.log("recommend", recommend);

//   return (
//     <>
//       <div className='recommend-container'>
//         {recommend?.map((item) => {
//           // Check if item._id is present
//           const isIdPresent = recommend.filter((recItem) => recItem._id === item._id).length > 0;

//           // Render the item only if its _id is present
//           if (isIdPresent) {
//             return (
//               <div className='main-container' key={item._id}>
//                 <div className="container1">
//                   <div className="text">
//                     <h1>{item.title}</h1>
//                     <h5>{item.director}</h5>
//                     <p>{item.description}</p>
//                   </div>
//                   <div className="image">
//                     <img src={item.thumbnail} alt="Your Image Description" />
//                   </div>
//                 </div>
//               </div>
//             );
//           } else {
//             return null; // or any other action you want for items that don't match the condition
//           }
//         })}
//       </div>
//     </>
//   );
// }

// export default SuggestionVideo;
