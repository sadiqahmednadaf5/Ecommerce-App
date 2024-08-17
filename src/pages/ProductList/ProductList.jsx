import styles from "./ProductStyle.module.css";
import { useState, useEffect } from "react";


const ProductList = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products'); // Example open-source API
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddCard = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    
  };

  return (
    <div className={styles.productList}>
      <h1 className={styles.title}>Product List</h1>
      <div className={styles.grid}>
        {products.map(product => (
          <div key={product.id} className={styles.card}>
            <img src={product.image} alt={product.title} className={styles.image} />
            <h2 className={styles.productName}>{product.title}</h2>
            <p className={styles.price}>${product.price}</p>
            <button
              className={styles.addButton}
              onClick={() => handleAddCard(product)}
            >
              Add Card
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;