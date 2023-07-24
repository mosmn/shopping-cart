import React, { useState, useEffect } from "react";
import Logo from "./Logo";

const Products = ({ addToCart }) => {
  const [clothingProducts, setClothingProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Error fetching products");
        }
        const data = await response.json();
        const clothingProducts = data.filter(
          (product) =>
            product.category === "men's clothing" ||
            product.category === "women's clothing",
        );
        const productsWithQuantity = clothingProducts.map((product) => ({
          ...product,
          quantity: 1,
        }));
        setClothingProducts(productsWithQuantity);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id,
    );
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex] = {
        ...updatedCartItems[existingItemIndex],
        quantity: updatedCartItems[existingItemIndex].quantity + 1,
      };
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...product, quantity: 1 },
      ]);
    }
    addToCart(product);
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-image">
          <Logo />
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
