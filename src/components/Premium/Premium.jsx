import img from "../../assets/premium.png";
import "./Premium.css";

function Premium() {
  return (
    <>
      <div className="premium-maincontainer">
        <div className="premium-container">
          <img src={img} style={{ width: "230px", height: "78px" }} />
          <div className="premium-title">
            YouTube and YouTube Music ad-free, offline,
            <span className="next-line">and in the background</span>
          </div>

          <button className="premium-btn">Get Youtube Premium</button>
          <div className="premium-sub">
            Pre-paid and Subscription palns available. Starting at
            <span className="next-line">₹129.00/month</span>
          </div>
          <div>
          Or save money with an 
    <span className="premium-span">
          annual, family, or student membership.
    </span>
</div>
          <div className="premium-res">
            Restrictions apply. Learn more here.
          </div>
        </div>
      </div>
    </>
  );
}
export default Premium;
