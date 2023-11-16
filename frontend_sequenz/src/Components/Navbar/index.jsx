import { useState } from "react";
import "./navbar.css";
import sequenz_logo from "../../assets/tee_palette.png";
import cartImg from "../../assets/cart_icon.svg";
import searchImg from "../../assets/search_icon.svg";
import profileImg from "../../assets/profile_img.png";
import Image from "../Image";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import closeIcon from '../../assets/close_icon.svg'

export default function Navbar() {
  const location = useLocation();
  let navigate = useNavigate()
  const [openMenu, setOpenMenu] = useState(true);

  function handleMenu() {
    setOpenMenu(!openMenu);
  }

  // if (location.pathname === "/SignUpPage" || location.pathname === "/") {
  //   return null; // Don't render the navbar
  // }


  function handleClose(){
    setOpenMenu(!openMenu);

  }


  function handleCart(){
    navigate("Cart")
  }

  return (
    <header>
      <div className="title_cart_icons_container">
        <p>UNISEX T-SHIRT</p>
        <div className="search_cart_avtar_container">
          <Image src={searchImg} alt="searchImg" outsideClassName="" />
          <button onClick={handleCart}>
            <Image src={cartImg} alt="cartImg" outsideClassName="" />
            <p>15</p>
          </button>
          <button>
            <img src={profileImg} loading="lazy" alt="profileImg" />
          </button>
        </div>
      </div>

      

      <nav className="logo_menu_contianer">
        <div className="checkbox_menu_logo_container">
          <input type="checkbox" id="check" checked={openMenu} readOnly />
          <label htmlFor="check" className="menu_btn" onClick={handleMenu}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </label>
          <div className="logo_name">
            <img src={sequenz_logo} loading="lazy" alt="logoImg" />
          </div>
        </div>

        <div className="search_cart_avtar_container small_screen_search_cart_avtar_container">
          <button onClick={handleCart}>
            <Image src={cartImg} alt="cartImg" outsideClassName="" />

            <p>15</p>
          </button>
          <button>
            <img src={profileImg} loading="lazy" alt="profileImg" />
          </button>
        </div>
        <ul className="navs_container" style={{ left: openMenu ? "-100%" : 0 }}>
          <button onClick={handleClose}><img src={closeIcon} alt="close_icon"/></button>
          <div className="search_small_container sm_screen_search_small_container">
            <Image src={searchImg} alt="searchImg" outsideClassName="" />

            <input type="text" placeholder="Search here ..." />
          </div>
          <li>
            <Link to="/Home" className="hvr-underline-from-center">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Shop" className="hvr-underline-from-center">Shop</Link>
          </li>

          <li>
            <Link to="/About" className="hvr-underline-from-center">
              About
            </Link>
          </li>

          <li>
            <Link to="/Contact" className="hvr-underline-from-center">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
