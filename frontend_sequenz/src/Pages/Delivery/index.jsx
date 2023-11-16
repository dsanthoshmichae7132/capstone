import { useState } from "react";

import Image from "../../Components/Image";
import backArrow from "../../assets/white_arrow.svg";
import OrderSummary from "../../Components/Order-Summary";
import "./delivery.css";
import Input from "../../Components/Input";
import { useNavigate } from "react-router-dom";

export default function Delivery() {
  const navigate = useNavigate();
  const [tabChange, setTabChange] = useState("Delivery details");
  const OrderSummaryData = [
    {
      subTotal: "1699",
      deliveryRate: "FREE",
      delivaryLocation: "Surat,Gujarat,India",
      totalPrice: "1699",
    },
  ];
  const stepperData = [
    {
      stepperLabel: "Delivery details",
    },
    {
      stepperLabel: "Payment method",
    },
    {
      stepperLabel: "Review",
    },
  ];

  const handleChange = (e) => {};

  const handleTab = (tabName) => {
    setTabChange(tabName);
  };

  const handleBack = () => {
    if (tabChange === "Payment method") {
      setTabChange("Delivery details");
    } else if (tabChange === "Review") {
      setTabChange("Payment method");
    }
  };

  const handleDeliveryDetails = () => {
    setTabChange("Payment method");
  };

  const handlePayment = () => {
    setTabChange("Review");
  };

  const handleSubmit = () => {
    navigate("/Home");
  };

  return (
    <section className="same_width_container margin_controller">
      {tabChange === "Delivery details" ? null : (
        <button className="back_arrow_btn" onClick={handleBack}>
          <Image
            src={backArrow}
            alt="backArrow"
            outsideClassName="backArrow_container"
          />
          Back
        </button>
      )}

      <div className="left_right_side_cart_containre">
        <div className="left_cart_container no_border padding_controller">
          <div className="three_steps_container">
            <ul className="step-wizard-list">
              {stepperData?.map((data, index) => {
                const tabName = data?.stepperLabel;
                return (
                  <li
                    key={index}
                    className="step-wizard-item current-item"
                    onClick={() => handleTab(tabName)}
                  >
                    <span className="progress-count">{index + 1}</span>
                    <span className="progress-label">{data?.stepperLabel}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {tabChange === "Delivery details" && (
            <>
              <p className="header_of_tab">DELIVERY DETAILS</p>
              <div className="delivery_details_container">
                <Input
                  className="delivery_input"
                  label="First name"
                  id="fname"
                  type="text"
                  name="fname"
                  placeholder="Enter first name"
                  onChange={handleChange}
                />
                <Input
                  className="delivery_input"
                  label="Last name"
                  id="lname"
                  type="text"
                  name="lname"
                  placeholder="Enter last name"
                  onChange={handleChange}
                />
                <Input
                  className="delivery_input"
                  label="Email for order confirmation*"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                />
                <Input
                  className="delivery_input"
                  label="Phone no*"
                  id="phone"
                  type="number"
                  name="phone"
                  placeholder="Enter phone no."
                  onChange={handleChange}
                />
                <Input
                  className="delivery_input"
                  label="Pin / Postal code*"
                  id="zcode"
                  type="number"
                  name="zcode"
                  placeholder="Enter pin/postal code"
                  onChange={handleChange}
                />
              </div>

              <button className="continue_btn" onClick={handleDeliveryDetails}>
                Continue
              </button>
            </>
          )}

          {tabChange === "Payment method" && (
            <>
              <p className="header_of_tab">PAYMENT METHOD</p>
              <div style={{ margin: "3rem 0 " }}>Coming soon</div>
              <button className="continue_btn" onClick={handlePayment}>
                Continue
              </button>
            </>
          )}

          {tabChange === "Review" && (
            <>
              <p className="header_of_tab">Review</p>
              <div style={{ margin: "3rem 0 " }}>Coming soon</div>
              <button className="continue_btn" onClick={handleSubmit}>
                SUBMIT
              </button>
            </>
          )}
        </div>
        <div className="right_cart_container">
          <div>
            <p>ORDER SUMMARY</p>
            <OrderSummary
              subTotal={OrderSummaryData[0]?.subTotal}
              deliveryRate={OrderSummaryData[0]?.deliveryRate}
              delivaryLocation={OrderSummaryData[0]?.delivaryLocation}
              totalPrice={OrderSummaryData[0]?.totalPrice}
              handleChange={handleChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
