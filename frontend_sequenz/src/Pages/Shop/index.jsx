import { useState } from "react";
import Image from "../../Components/Image";
import downArrow from "../../assets/down_arrow.svg";
import "./shop-page.css";
import ExclusiveSection from "../Home/sections/exclusive section/ExclusiveSection";
import ProductView from "../../Components/ProductView";
import prodImg from "../../assets/prod2.png";
import ContactUs from "../../Components/Contact-Us";
import MarqueeSlider from '../../Components/MarqueeSlider'

export default function Shop() {
  const [showSortBy, setShowSortBy] = useState(false);

  const sortByOpt = [
    {
      sortName: "Popularity",
    },
    {
      sortName: "Price -- Low to High",
    },
    {
      sortName: "Price -- High to Low",
    },
    {
      sortName: "Newest First",
    },
  ];

  const productsData = [
    {
      prodImg: prodImg,
      prodType: "Oversized",
      prodName: "Oversized T-shirt Black  Model no..",
      prodPrice: "750",
      prodMrpPrice: "1150",
    },
    {
      prodImg: prodImg,
      prodType: "Oversized",
      prodName: "Oversized T-shirt Black  Model no..",
      prodPrice: "750",
      prodMrpPrice: "1150",
    },
    {
      prodImg: prodImg,
      prodType: "Oversized",
      prodName: "Oversized T-shirt Black  Model no..",
      prodPrice: "750",
      prodMrpPrice: "1150",
    },
    {
      prodImg: prodImg,
      prodType: "Oversized",
      prodName: "Oversized T-shirt Black  Model no..",
      prodPrice: "750",
      prodMrpPrice: "1150",
    },
    {
      prodImg: prodImg,
      prodType: "Oversized",
      prodName: "Oversized T-shirt Black  Model no..",
      prodPrice: "750",
      prodMrpPrice: "1150",
    },
    {
      prodImg: prodImg,
      prodType: "Oversized",
      prodName: "Oversized T-shirt Black  Model no..",
      prodPrice: "750",
      prodMrpPrice: "1150",
    },
    {
      prodImg: prodImg,
      prodType: "Oversized",
      prodName: "Oversized T-shirt Black  Model no..",
      prodPrice: "750",
      prodMrpPrice: "1150",
    },
    {
      prodImg: prodImg,
      prodType: "Oversized",
      prodName: "Oversized T-shirt Black  Model no..",
      prodPrice: "750",
      prodMrpPrice: "1150",
    },
    {
      prodImg: prodImg,
      prodType: "Oversized",
      prodName: "Oversized T-shirt Black  Model no..",
      prodPrice: "750",
      prodMrpPrice: "1150",
    },
    {
      prodImg: prodImg,
      prodType: "Oversized",
      prodName: "Oversized T-shirt Black  Model no..",
      prodPrice: "750",
      prodMrpPrice: "1150",
    },
    {
      prodImg: prodImg,
      prodType: "Oversized",
      prodName: "Oversized T-shirt Black  Model no..",
      prodPrice: "750",
      prodMrpPrice: "1150",
    },
    {
      prodImg: prodImg,
      prodType: "Oversized",
      prodName: "Oversized T-shirt Black  Model no..",
      prodPrice: "750",
      prodMrpPrice: "1150",
    },
  ];

  const handleSort = () => {};
  return (
    <div>
      <section>
        <div className="border_for_sorttype_container">
          <div className="same_width_container no_margin sortby_title_count_container">
            <div>
              <p>ALL T-SHIRTS</p>
              <span>15</span>
            </div>

            <div className="shop_sortby_opt_container">
              <button onClick={() => setShowSortBy(!showSortBy)}>
                <p>Sort By</p>
                <Image
                  src={downArrow}
                  alt="cartImg"
                  outsideClassName={
                    showSortBy
                      ? "cartImg_container_rotate cartImg_container"
                      : "cartImg_container"
                  }
                />
              </button>
              <div
                className={
                  showSortBy ? "opt_container " : "opt_container no_border"
                }
              >
                {showSortBy &&
                  sortByOpt?.map((item, index) => {
                    return (
                      <button key={index} onClick={handleSort}>
                        {item?.sortName}
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>

        <div className="shop_prods_container same_width_container no_margin">
          {productsData?.map((prod, index) => {
            return (
              <ProductView
                key={index}
                prodImg={prod?.prodImg}
                prodType={prod?.prodType}
                prodName={prod?.prodName}
                prodPrice={prod?.prodPrice}
                prodMrpPrice={prod?.prodMrpPrice}
              />
            );
          })}
        </div>

        <ContactUs />

        <MarqueeSlider />
      </section>
    </div>
  );
}
