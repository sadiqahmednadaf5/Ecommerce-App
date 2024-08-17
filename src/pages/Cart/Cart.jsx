import styles from "./CartStyle.module.css"
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
   
  

    const handleQuantityChange = (id, quantity) => {
        setCart((prevCart) =>
            prevCart.map(item =>
                item.id === id ? { ...item, quantity: parseInt(quantity, 10) || 1 } : item
            )
        );
    };
//this is removing item from cart
    const handleRemoveItem = (id) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== id));
    };

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discountPercentage = 0.10; // i have added 10% discount
    const discount = subtotal * discountPercentage;
    const total = subtotal - discount;

    return (
        <>
            <div className={styles.bagPage}>
                <div className={styles.bagItemsContainer}>
                    {cart.map(item => (
                        <div key={item.id} className={styles.bagItemContainer}>
                            <img src={item.image} alt={item.name} className={styles.bagItemImg} />
                            <div className={styles.itemRightPart}>
                                <h2 className={styles.productName}>{item.title}</h2>
                                <p className={styles.price}>${item.price.toFixed(2)}</p>
                                <div className={styles.quantitySection}>
                                 <span>qty <input
                                        type="number"
                                        className={styles.quantity}
                                        value={item.quantity}
                                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                        min="1"
                                    /></span>  
                                    <button
                                        className={styles.removeFromCart}
                                        onClick={() => handleRemoveItem(item.id)}
                                    >
                                        ×
                                    </button>
                                </div>
                                <div className={styles.deliveryDetails}>
                                    <p>Estimated Delivery: <span className={styles.deliveryDetailsDays}>5-7 Days</span></p>
                                    <p>Return Period: <span className={styles.returnPeriodDays}>30 Days</span></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.bagSummary}>
                    <div className={styles.priceHeader}>Price Details</div>
                    <div className={styles.priceItem}>
                        Subtotal: <span className={styles.priceItemValue}>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className={styles.priceItem}>
                        Discount: <span className={styles.priceItemValue}>10% Discount -${discount.toFixed(2)}</span>
                    </div>
                    <div className={styles.priceFooter}>
                        Total: <span className={styles.priceItemValue}>${total.toFixed(2)}</span>
                    </div>

                    {cart.length > 0 ? (<Link to="/cart/cheackout" >
                    <button className={styles.btnPlaceOrder}>Checkout</button>
                    </Link>):(   <button className={styles.btnPlaceOrder}>Checkout</button>)}
                 
                </div>
            </div >
        </>
    )
}
export default Cart;