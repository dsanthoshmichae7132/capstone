import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import star from "../../assets/Star.png";
import profile from "../../assets/Profile.png";
import profile2 from "../../assets/Profile2.png";
import "./product.css";
import { useNavigate } from "react-router-dom";

const Product = () => {


  const navigate = useNavigate()

  const handleCart = ()=>{
    navigate('/Cart')
  }
  return (
    <div className="main">
      <div className="box-grid">
        <img src={image1} />
        <div className="sub-contianer1">
          <img src={image2} />
          <img src={image3} />
          <img src={image4} />
          <img src={image5} />
        </div>
        <div className="sub-contianer2">
          <h3>Oversized</h3>
          <h1>
            Oversized T-shirt Black <br />
            Model no 145678-MSUW
          </h1>
          <div className="sub-sub-container2">
            <div className="review-column">
              <img src={star} />
              <span>4.5/5</span>
              <span>(25 Reviews)</span>
            </div>
            <div>
              <button>Share</button>
            </div>
          </div>
          <div className="dashed-line"></div>
          <div>
            <h3>Color</h3>
            <div className="review-column">
              <div className="box black">
                <div className="color-box"></div>
                <span>Black</span>
              </div>
              <div className="box gray">
                <div className="color-box"></div>
                <span>Gray</span>
              </div>
              <div className="box red">
                <div className="color-box"></div>
                <span>Red</span>
              </div>
            </div>
          </div>
        </div>
        <div className="sub-container3">
          <div className="review-column">
            <h3>Size</h3>
            <h3>Size Chart</h3>
          </div>
          <div className="size-box">
            <div className="boxx xs">XS</div>
            <div className="boxx s">S</div>
            <div className="boxx m">M</div>
            <div className="boxx xl">XL</div>
            <div className="boxx l">L</div>
            <div className="boxx xxl">XXL</div>
          </div>
        </div>
        <div className="sub-container4">
          <h3>Description</h3>
          <p>
            Truthfully, True Classic has made a T-shirt that appeals to the
            masses. The brand taps into our collective insecurities and promises
            to calm them — with something you can buy, of course. To be fair,
            design considerations like these are rarely seen on these sort of
            entry-level shirts. Sure, they're supposed to fit well, but most
            cheap shirts are a little more universal — baggy here, too tight
            here and perhaps a little less adept at surviving the wash cycle.
          </p>
          <h3>Product details</h3>
          <div>
            <p>Oversized fit</p>
            <p>100% ployster</p>
            <p>Country origin : India</p>
            <p>Machine wash</p>
          </div>
        </div>
        <div className="sub-container8">
          <div style={{ display: "flex" }}>
            <h2>$ 799</h2>
            <h5>$ 1099</h5>
          </div>
          <button style={{ marginLeft: "350px" }} onClick={handleCart}>ADD TO CART</button>
        </div>
        <div className="sub-container6">
          <h3>Return & Refund Policy</h3>
          <div>
            <p>This product is in no-refund policy.</p>
            <p>
              Exchange within 24 hours of delivery for size/quality issues
              <br />
              or damaged products.
            </p>
          </div>
        </div>
        <div className="sub-container7">
          <h3>Shipping info</h3>
          <div>
            <p>
              Please expect delivery of the product within 7 to 10 business days
              after order confirmation.
            </p>
          </div>
        </div>
        <div className="sub-container5">
          <h3>Review</h3>
          <div className="sub-container5-profile">
            <img src={profile} alt="" />
            <div>
              <h3>Brooklyn Simmons</h3>
              <h6>4.5 / 5</h6>
            </div>
            <p>25/10/2023</p>
          </div>
          <p>
            “ Made from organic cotton, this shirt is loosely knit for an airy
            feel which goes well with its relaxed silhouette. The garment-dye
            process also gives the tee more character. We prefer the
            straight-hemmed Slub Classic Pocket Tee. It has a great hand and
            tons of slubby texture to distance itself from the undershirt fare.
            It's made in LA and comes i “
          </p>
          <h3>Review</h3>
          <div className="sub-container5-profile">
            <img src={profile2} alt="" />
            <div>
              <h3>Jenny Wilson</h3>
              <h6>4.5 / 5</h6>
            </div>
            <p>25/10/2023</p>
          </div>
          <p>
            “ Made from organic cotton, this shirt is loosely knit for an airy
            feel which goes well with its relaxed silhouette. The garment-dye
            process also gives the tee more character. We prefer the
            straight-hemmed Slub Classic Pocket Tee. It has a great hand and
            tons of slubby texture to distance itself from the undershirt fare.
            It's made in LA and comes i “
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
