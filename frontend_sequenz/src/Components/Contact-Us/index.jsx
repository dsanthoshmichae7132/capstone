import tshirtImg from "../../assets/tshirts_img.png";
import starImg from "../../assets/contact_star.svg";
import "./contact-us-section.css";
import Input from "../Input";

export default function ContactUs() {
  const handleChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <section className="same_width_container">
        <div className="contact_us_container">
          <div className="contact_us_left_container">
            <div className="contact_us_star_img_container">
              <img src={starImg} alt="starImg" loading="lazy" />
            </div>
            <p>WE’D LOVE TO HERE FROM YOU</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing.
            </p>
            <div className="contact_tshirt_img_container">
              <img src={tshirtImg} alt="tshirtImg" loading="lazy" />
            </div>
            <div className="contact_us_star2_img_container">
              <img src={starImg} alt="starImg" loading="lazy" />
            </div>
          </div>
          <div className="contact_us_right_container">
            <div className="contact_us_star_img_container visibility_none">
              <img src={starImg} alt="starImg" loading="lazy" />
            </div>
            <p>Contact Us</p>

            <form className="contact_us_form_container" onSubmit={handleSubmit}>
              <div className="input_label_container">
                <Input
                  label="First Name"
                  id="firstName"
                  type="text"
                  name="email"
                  placeholder="Enter first name"
                  onChange={handleChange}
                />
              </div>
              <div className="input_label_container">
                <Input
                  label="Last Name"
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Enter Last name"
                  onChange={handleChange}
                />
              </div>
              <div className="input_label_container">
                <Input
                  label="Email"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                />
              </div>
              <div className="input_label_container">
                <Input
                  label="Contact no."
                  id="contactNo"
                  type="number"
                  name="contactNo"
                  placeholder="Enter contact no."
                  onChange={handleChange}
                />
              </div>
              <div className="input_label_container textarea_label_container">
                <label htmlFor="message">Message</label>
                <br />
                <textarea
                  type="text"
                  id="message"
                  placeholder="Enter message"
                  name="message"
                  rows="3"
                  cols="50"
                ></textarea>
              </div>

              <button type="submit">Submit</button>
            </form>
            <div className="contact_us_star_img_container">
              <img src={starImg} alt="starImg" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
