import { useEffect, useState } from "react";
import * as Dialog from '@radix-ui/react-dialog';
import {AiOutlineFilter} from 'react-icons/ai'
import { Cross2Icon } from '@radix-ui/react-icons';
import axios from "axios";
import './SearchVideo.css';
import { Link } from "react-router-dom";


function SearchVideo( {searchValue, handlerSearchDataSending} ){
    const [ videoStore, setVideoStore ] = useState([]);
    
   const [fetchedResult, setFetchedResult] = useState([]);
    console.log("searchvalue",searchValue)
    const handleSearchVideo = async (searchValue) => {
        try {
            const headers = {
              'Content-Type': 'application/json',
              'projectId': 'f104bi07c490'
            };
      
            const response = await fetch(`https://academics.newtonschool.co/api/v1/ott/show?search={"title": "${searchValue}" }`, {
              method: 'GET',
              headers: headers
            });
      
            if (response.ok) {
              const result = await response.json();
              console.log("SearchResult", result);
                const results=result.data;
                console.log("datas",results)
                setFetchedResult(results);
                // console.log("Fecthresult",fetchedResult[0].title)
              localStorage.setItem("searchVideo", JSON.stringify(result));
            //   const searchData1 = parsedLocalStorageData.data;
            // console.log("SearchVideo",resultvideo)
            } else {
              console.log("Request failed with status:", response.status);
            }
        } catch (error) {
          console.log(error);
        }
      };
      
      useEffect(() => {
        const delay = 2000; // Adjust the delay time (in milliseconds) as needed
        const timer = setTimeout(() => {
          handleSearchVideo(searchValue);
        }, delay);
      
        return () => {
          // This cleanup function cancels the timeout if the component unmounts
          clearTimeout(timer);
        };
      }, [searchValue]);

    //   useEffect(() => {
    //     handleSearchVideo(searchValue); 
    //   }, [searchValue]);


    // const [dataRender,setDataRender]=useState([]);
    // useEffect(()=> {
    //     setDataRender(allVideos)
    //     console.log("AllVideo",allVideos)
    // }, [])
    
    return(
        <>
       {/* <div className='searchvideo-container'>{fetchedResult[0].title} */}
       <Dialog.Root>
         <Dialog.Trigger asChild>
           <button className="Button">Filter
           <AiOutlineFilter className="filter-icon"/>
           </button>
         </Dialog.Trigger>
         <Dialog.Portal>
           <Dialog.Overlay className="DialogOverlay" />
         
     
           <Dialog.Content className="DialogContent">
           <h2 className='filter-heading'>Search filter</h2>
             <div className='filter'>
             <div className='filter-container'>
              <div className='filter-title'>Cast</div>  
               <div className='filter-names'>
                John
                </div>
                <div className='filter-names'>
                Emma 
                </div>
                <div className='filter-names'>
                Ella
                </div>
                <div className='filter-names'>
                Alex
                </div>
                <div className='filter-names'>
                Chris 
                </div>
                <div className='filter-names'>
                Michael
                </div>
                <div className='filter-names'>
                Jane
                </div>
                <div className='filter-names'>
                Sarah 
                </div>
                <div className='filter-names'>
                Ryan
                </div>
                </div>
             <div className='filter-container'>
             <div className='filter-title'>Type</div>
             <div className='filter-names'>
                Video song
                </div>
                <div className='filter-names'>
               Web series
                </div>
                <div className='filter-names'>
                Documentary
                </div>
                <div className='filter-names'>
               Tv shows
                </div>
                <div className='filter-names'>
                Short flim
                </div>  
                <div className='filter-names'>
                Trailer
                </div> 
                <div className='filter-names'>
               Movie
                </div> 
             </div>
             <div className='filter-container'>
             <div className='filter-title'>Geners</div>
             <div className='filter-names'>
             Romance
                </div>
                <div className='filter-names'>
                Fantasy
                </div>
                <div className='filter-names'>
                Drama
                </div>
                <div className='filter-names'>
                Comedy
                </div>
                <div className='filter-names'>
                Horror
                </div>  
                <div className='filter-names'>
                Survival
                </div>
                <div className='filter-names'>
               Revenge
                </div>
                <div className='filter-names'>
                Mystery
                </div>
                <div className='filter-names'>
                Magic
                </div>
                <div className='filter-names'>
                Thriller
                </div>  
             </div>
             <div className='filter-container'>
             <div className='filter-title'>Director</div>  
             <div className='filter-names'>
             Ava Davis
                </div>
                <div className='filter-names'>
                Michael Williams
                </div>
                <div className='filter-names'>
                Jane Davis
                </div>
                <div className='filter-names'>
                Emma Johnson
                </div>
                <div className='filter-names'>
                Jane Smith
                </div>
                <div className='filter-names'>
                John Brown
                </div>
                <div className='filter-names'>
                Chris Miller
                </div>
                <div className='filter-names'>
                Ella Brown
                </div>
                <div className='filter-names'>
                Jane Johnson
                </div>
                <div className='filter-names'>
                Ava Moore
                </div>
                <div className='filter-names'>
                Ava Jones
                </div>
                <div className='filter-names'>
                Jane Davis
                </div>
             </div>
             </div>
                     <Dialog.Close asChild>
           
               <button className="IconButton" aria-label="Close">
               
                 <Cross2Icon />
               </button>
             </Dialog.Close>
           </Dialog.Content>
         </Dialog.Portal>
       </Dialog.Root>
       <div>
      {fetchedResult?.map((item, index) => {
        const randomViews = (Math.random() * 100).toFixed(2);
        const randomMinutes = Math.floor(Math.random() * 60) + 1;
        return (
          <Link
            to={`/display/${item.title}/${item._id}`}
            key={`${item}${index}`}
            onClick={() => handlerSearchDataSending(item)}
          >
            <div key={index} className='searchvideo-container'>
              <div className='searchVideo-left'>
                <img src={item.thumbnail} alt='Video Thumbnail' className='searchvideo-image' />
              </div>
              <div className='searchVideo-right'>
              <h3 style={{marginBottom: '20px', fontSize: '20px',color:'black' }}>{item.title}</h3>

                {/* <h3 style={{fontsize:'20px'}}>{item.title}</h3> */}
                <p>{`${randomViews.toLocaleString()}M Views • ${randomMinutes} minutes ago`}</p>
                <div className="icon-title-container">
                  <div className="search-icon-circle">
                    <img src={item.thumbnail} alt="Icon" />
                  </div>
                  <h2>{item.director}</h2>
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  </>
    )
}
export default SearchVideo;