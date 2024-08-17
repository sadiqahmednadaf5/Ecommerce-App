
import React from "react";
import styles from "./HeaderStyles.module.css";
import logoImage from "../images/images.png";

import { Link } from "react-router-dom";




const Header = ({ cart = [] }) => {
  const totalItems = Array.isArray(cart) ? cart.reduce((total, item) => total + (item.quantity || 0), 0) : 0;


  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/">  <img className={styles.myntraHome} src={logoImage} alt="Myntra Home" /></Link>
      
      </div>

      <div className={styles.searchBar}>

        <input className={styles.searchInput} placeholder="Search for products" />
        <span className="material-symbols-outlined ">search</span>
      </div>
      <div className={styles.actionBar}>
        <Link to="/cart"> <div className={styles.actionContainer} >

          <span className="material-symbols-outlined">shopping_bag</span>

          <span>Add to cart</span>
          <span className={styles.bagItemCount}>{totalItems}</span>

        </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;