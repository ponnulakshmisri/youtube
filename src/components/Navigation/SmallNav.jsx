import "./SmallNav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineFire } from "react-icons/ai";
import { BsCollectionPlay } from "react-icons/bs";
import { GrHistory } from "react-icons/gr";
import { Link } from "react-router-dom";
function SmallNav() {
  return (
    <>
      <div className="small-nav-container">
        <Link to="/">
          <div className="small-nav-align">
            <AiOutlineHome />
            <div>Home</div>
          </div>
        </Link>
        <Link to="/trendingdata">
          <div className="small-nav-align">
            <AiOutlineFire />
            <div>Trending</div>
          </div>
        </Link>
        <Link to="/comingsoon">
          <div className="small-nav-align">
            <BsCollectionPlay />
            <div>Subscription</div>
          </div>
        </Link>
        <Link to="/comingsoon">
          <div className="small-nav-align">
            <GrHistory />
            <div>History</div>
          </div>
        </Link>
      </div>
    </>
  );
}
export default SmallNav;
