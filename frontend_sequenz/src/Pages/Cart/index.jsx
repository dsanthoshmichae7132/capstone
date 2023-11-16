import { useState,useEffect } from "react";
import "./cart.css";
import Image from "../../Components/Image";
import prodImg from "../../assets/cart_prod_img.png";
import backArrow from "../../assets/white_arrow.svg";
import CartProduct from "./CartProduct";
import OrderSummary from "../../Components/Order-Summary";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductFromWatchList, removeProductFromWatchList } from "../../StateManagement/slicer/product/action";

export default function Cart() {
  let dispatch = useDispatch()
  useEffect(() => {
  dispatch(fetchProductFromWatchList())
  } , [])

  const {getAllProductFromWatchList} = useSelector(state => state.product)
  console.log('getAllProductFromWatchList', getAllProductFromWatchList)
  const allCardProductData = [
    {
      prodName: "Oversized T-shirt Black Model no 145678-MSUW",
      prodPrice: "799",
      prodSize: [
        {
          sizeName: "L",
        },
        {
          sizeName: "XL",
        },
      ],
      prodColor: [
        {
          colorName: "Red",
        },
        {
          colorName: "Black",
        },
      ],
    },
    {
      prodName: "Oversized T-shirt Black Model no 145678-MSUW",
      prodPrice: "1455",
      prodSize: [
        {
          sizeName: "L",
        },
      ],
      prodColor: [
        {
          colorName: "Red",
        },
      ],
    },
  ];

  const OrderSummaryData = [
    {
      subTotal: "1699",
      deliveryRate: "FREE",
      delivaryLocation: "Surat,Gujarat,India",
      totalPrice: "1699",
    },
  ];

  const navigate = useNavigate()
  const [addCount, setAddCount] = useState(0);

  const handleAdd = () => {
    setAddCount((count) => count + 1);
  };

  const handleLess = () => {
    if (addCount > 0) {
      setAddCount((count) => count - 1);
    }
  };

  

  const handleBack = ()=>{
    navigate(-1)
  }

  const handleCheckout = ()=>{
    navigate("/Delivery")
  }

  const handleRemove = (id) => {
    console.log('id', id)
    dispatch(removeProductFromWatchList(id))

  };
  return (
    <section className="same_width_container">
      <div className="btn_left_right_container">
        <button onClick={handleBack}>
          <Image
            src={backArrow}
            alt="backArrow"
            outsideClassName="backArrow_container"
          />
          Back
        </button>
        <div className="left_right_side_cart_containre">
          <div className="left_cart_container">
            <p>MY CART</p>
            {allCardProductData?.map((prod, index) => {
              let sizeExtract = prod?.prodSize?.map((num) => num?.sizeName);

              let colorExtract = prod?.prodColor?.map((col) => col?.colorName);

              return (
                <CartProduct
                  key={index}
                  prodName={prod?.prodName}
                  prodPrice={prod?.prodPrice}
                  prodSize={sizeExtract}
                  prodColor={colorExtract}
                  handleAdd={handleAdd}
                  handleRemove={handleRemove}
                  handleLess={handleLess}
                  count={addCount}


                  //  key={index}
                  // prodName={prod?.product_att?.product?.name}
                  // prodPrice={prod?.product_att?.selling_price}
                  // prodSize={prod?.product_att?.size?.size}
                  // prodColor={colorExtract}
                  // handleAdd={handleAdd}
                  // handleRemove={()=>handleRemove(prod?.id)}
                  // handleLess={handleLess}
                  // count={addCount}
                />
              );
            })}
          </div>
          <div className="right_cart_container">
            <div>
              <p>ORDER SUMMARY</p>
              
              <OrderSummary
                subTotal={OrderSummaryData[0]?.subTotal}
                deliveryRate={OrderSummaryData[0]?.deliveryRate}
                delivaryLocation={OrderSummaryData[0]?.delivaryLocation}
                totalPrice={OrderSummaryData[0]?.totalPrice}
                handleCheckout={handleCheckout}
              />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
