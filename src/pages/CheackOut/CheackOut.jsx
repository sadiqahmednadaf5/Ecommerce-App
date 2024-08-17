import styles from "./CheackOutStyle.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const CheackOut = () => {
  const [isVisible, setIsVisible] = useState(false);


  // Function to trigger the animation
  const triggerSuccess = () => {
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 20000);

  };

  // Automatically trigger success animation for demonstration
  useEffect(() => {
    triggerSuccess();
    // Trigger animation on component mount

  }, []);



  return (
    isVisible && (
      <div className={styles.overlay}>
        <div className={styles.container}>
          <svg className={styles.checkmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle className={styles.checkmarkCircle} cx="26" cy="26" r="25" fill="none" />
            <path className={styles.checkmarkCheck} fill="none" d="M14 26l6 6 12-12" />
          </svg>
          <h1>Order Placed Successfully!</h1>
          <Link to="/">   <button onClick={() => setIsVisible(false)} className={styles.closeButton}>Close</button></Link>
        </div>
      </div>
    )
  );
};

export default CheackOut;