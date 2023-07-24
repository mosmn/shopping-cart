import React, { useState, useEffect } from "react";
import Logo from "./Logo"; 

const Products = ({ addToCart }) => {
  const [clothingProducts, setClothingProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const clothingProducts = data.filter(
          (product) =>
            product.category === "men's clothing" ||
            product.category === "women's clothing"
        );
        setClothingProducts(clothingProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
    addToCart(product);
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-image">
        <Logo/>
        </div>
      </div>
    );
  }

  return (
    <div className="products-container">
      <h2>Products</h2>
      <div className="products-list">
        {clothingProducts.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p>{product.category}</p>
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;