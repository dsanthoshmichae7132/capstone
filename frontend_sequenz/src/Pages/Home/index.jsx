import { useState, useEffect } from "react";
import HeroSection from "./sections/hero section/HeroSection";
import ExclusiveSection from "./sections/exclusive section/ExclusiveSection";
import MarqueeSlider from "../../Components/MarqueeSlider/index";
import ReviewSection from "./sections/review section/ReviewSection";
import ContactUs from "../../Components/Contact-Us";


import posterImg1 from "../../assets/hero_img1.jpg";
import posterImg2 from "../../assets/hero_img.png";
import { addProductToWatchList, fetchCategory, fetchProductFromWatchList, fetchSize, removeProductFromWatchList, sendForProductFilter } from "../../StateManagement/slicer/product/action";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";


export default function Home() {

  let dispatch = useDispatch()
  const {products,sizes,categories,getAllProductFromWatchList} = useSelector(state => state.product)
  // console.log("sizes",sizes)
  // console.log("category",categories)
  // console.log("products",products)
  // console.log(getAllProductFromWatchList)

  useEffect(()=>{
    dispatch(sendForProductFilter())
     // dispatch(fetchProductDetails())
     dispatch(fetchCategory())
     dispatch(fetchSize())
    // dispatch(fetchProductFromWatchList())
  },[])




 
  const allPosterData = [
    {
      posterImgName: posterImg1,
    },
    {
      posterImgName: posterImg2,
    },
  ];

  async function handlesend() {
    let data ={
      product_id:1,
      product_attr_id:1,
    }
   
    dispatch(addProductToWatchList(data))

    // dispatch(removeProductFromWatchList(3))
   

    }

  return (
    <>
      {/* <button onClick={handlesend}>meet</button> */}
      <ToastContainer />
          

          <HeroSection allPosterData={allPosterData} />

          <MarqueeSlider />

          {/* <!-- exclusive section --> */}
          <ExclusiveSection />
          {/* <!-- exclusive section end --> */}

          <MarqueeSlider />

          {/* <!-- best seller section --> */}
          <ExclusiveSection />
          {/* <!-- best seller section end --> */}

          <ReviewSection />

          <ContactUs />

          <MarqueeSlider />
    </>
  );
}
