import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineFire } from "react-icons/ai";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { HiOutlineThumbUp } from "react-icons/hi";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { LuClapperboard } from "react-icons/lu";
import { FaRegDotCircle } from "react-icons/fa";
import { ImNewspaper } from "react-icons/im";
import { FiSettings } from "react-icons/fi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { BsGooglePlay } from "react-icons/bs";
import { SiYoutubemusic } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa";
import SlidebarRow from "./SlidebarRow.jsx";
import "./Slidebar.css";
import { Link } from "react-router-dom";

function Slidebar( { handlerHelpContainer } ) {

  return (
    <>
      <div className="sidebar">
        <div className="scroll-container">
          <div className="scroll-content">
            <Link to="/">
            <SlidebarRow selected Icon={AiOutlineHome} title="Home" />
            </Link>
            <Link  to="/trendingdata">
              <SlidebarRow selected Icon={AiOutlineFire} title="Trending" />
            </Link>
            <Link to="/comingsoon">
            <SlidebarRow selected Icon={BsFillCollectionPlayFill} title="Subscriptions" />
            </Link>
            <div className="divider"></div>
            <SlidebarRow
              selected
              Icon={MdOutlineVideoLibrary}
              title="Library"
            />
            
            <SlidebarRow
              selected
              Icon={AiOutlinePlaySquare}
              title="Watch Later"
            />
            <SlidebarRow
              selected
              Icon={HiOutlineThumbUp}
              title="Liked videos"
            />
            <div className="divider"></div>
            <Link to="/music">
            <SlidebarRow selected Icon={IoMusicalNoteOutline} title="Music" />
            </Link>
            <Link to="/movie">
            <SlidebarRow selected Icon={LuClapperboard} title="Movies & TV" />
            </Link>
            <Link to="/live">
            <SlidebarRow selected Icon={FaRegDotCircle} title="Live" />
            </Link>
            <Link to="/document">
            <SlidebarRow selected Icon={ImNewspaper} title="Documentary" />
            </Link>
            <Link to="/comingsoon">
            <SlidebarRow selected Icon={FiSettings} title="Setting" />
            </Link>
            <Link onClick={()=>handlerHelpContainer(true)}>
            <SlidebarRow selected Icon={IoMdHelpCircleOutline} title="Help" />
            </Link>
            <div className="divider"></div>
            <Link to="/comingsoon">
            <SlidebarRow selected Icon={FaYoutube} title="Youtube" />
            <SlidebarRow selected Icon={SiYoutubemusic} title="Youtube Music" />
            <SlidebarRow selected Icon={BsGooglePlay} title="Youtube Play" />
            <SlidebarRow selected Icon={TbBrandYoutubeKids} title="Youtube Kids" />
            </Link>
            <div className="divider"></div>
            <h5>Clone By: PonnuLakshmi</h5>
            <div className="divider"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Slidebar;
