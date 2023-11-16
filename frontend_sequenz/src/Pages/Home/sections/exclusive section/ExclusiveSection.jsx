import "./exclusive-slider-section.css";
import ProductView from "../../../../Components/ProductView";
import prodImg from "../../../../assets/prod2.png";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

export default function ExclusiveSection() {
  const navigate = useNavigate()
  const {products} = useSelector(state => state.product)
  console.log('products', products)

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
  ];

  const handleProductDetails = () => {
    navigate('/product')
  }
  return (
    <section className="same_width_container">
      <div className="exclusive_tshirt_slider_container">
        <p>EXCLUSIVE T-SHIRTS</p>

        <div className="subtitle_two_aerrow_container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing onsectetur
            adipisicing elit.
          </p>

        </div>
        <div className="resposive_product_container">
          {productsData?.map((prod, index) => {
            return (
              <ProductView
                key={index}
                prodImg={prod?.prodImg}
                prodType={prod?.prodType}
                prodName={prod?.prodName}
                prodPrice={prod?.prodPrice}
                prodMrpPrice={prod?.prodMrpPrice}
                // key={index}
                // prodImg={prodImg}
                // prodType={prod?.casual_wear}
                // prodName={prod?.name}
                // prodPrice={prod?.prodPrice}
                // prodMrpPrice={prod?.prodMrpPrice}
                // handleProductDetails={() => handleProductDetails(prod)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
