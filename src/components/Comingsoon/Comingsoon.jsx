import "./Comingsoon.css";
import img from "../../assets/Youtubeicon.png";
function Comingsoon() {
  return (
    <>
      <div class="centered-container">
        <img src={img} className="coming-soon" />
        <div className="coming-soon-word">We Will be back with something</div>
        <div className="coming-soon-word">Amazing! Coming Soon...!!</div>
      </div>
    </>
  );
}
export default Comingsoon;
