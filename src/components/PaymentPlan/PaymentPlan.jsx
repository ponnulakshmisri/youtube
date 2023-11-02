import "./PaymentPlan.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import img from "../../assets/whitepremium-1.png";
import { MdOutlineArrowForwardIos } from "react-icons/md";
function PaymentPlan() {
  return (
    <>
      <div className="items-center">
        <div className="payment-container">
          <div className="payment-title">
            <AiOutlineArrowLeft
              style={{ fontSize: "20px", marginRight: "10px", color: "white" }}
            />
            Choose Your plan
          </div>
          <div className="payment-imgcontainer">
            <div className="payment-image">
              <img className="payment-image-inside" src={img} alt="Image" />
            </div>
            <span className="payment-member">Individual Membership</span>
          </div>
          <div className="prepaid-payment">
            <strong>Pre-paid plans</strong>
            <div>
              Pay up front. Top up at any time. We accept many forms of payment,
              including UPI.
            </div>
          </div>
          <div className="flex-center">
            <div className="monthlypayment-plan">
              <div className="twelve-month">
                <div className="padding">
                  <div>
                    12-month
                    <span className="best-value">Best Value</span>
                  </div>

                  <div>₹1,290.00</div>
                </div>
                <div className="padding">
                  <MdOutlineArrowForwardIos />
                </div>
              </div>
              <div className="twelve-month">
                <div className="padding">
                  <div>3-month</div>

                  <div>₹399.00</div>
                </div>
                <div className="padding">
                  <MdOutlineArrowForwardIos />
                </div>
              </div>
              <div className="twelve-month">
                <div className="padding">
                  <div>1-month</div>

                  <div>₹139.00</div>
                </div>
                <div className="padding">
                  <MdOutlineArrowForwardIos />
                </div>
              </div>
            </div>
          </div>
          <div className="subscription-container">
          <strong>Subscription plan</strong>
          <div>
            Automatic payments such as credit cards are requried. Billing recurs
            monthly. Cancel at any time.
          </div>
          </div>
          <div className="flex-center">
            <div className="monthlypayment-plan">
              <div className="twelve-month">
                <div className="padding">
                  <div>Monthly Subscription</div>

                  <div>₹129.00</div>
                </div>
                <div className="padding">
                  <MdOutlineArrowForwardIos />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PaymentPlan;
