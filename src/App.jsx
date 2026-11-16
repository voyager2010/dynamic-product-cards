
import { useState, useEffect } from "react";
import "./App.css";

function ProductCard({ name, price, image }) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    console.log(`${name} Quantity Updated: ${quantity}`);
  }, [quantity, name]);

  const increaseQuantity = () => {
    if (quantity < 9) {
      setQuantity(quantity + 1);
    } else {
      alert("You can purchase only 9 items at a time.");
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      alert("Minimum quantity should be 1.");
    }
  };

  const totalPrice = price * quantity;

  return (
    <div className="card">
      <img
        src={image}
        alt={name}
        className="product-img"
      />

      <h2>{name}</h2>

      <p className="price">Price : ₹{price}</p>

      <div className="quantity-box">
        <button onClick={decreaseQuantity}>-</button>

        <span>{quantity}</span>

        <button onClick={increaseQuantity}>+</button>
      </div>

      <h3>Total Price : ₹{totalPrice}</h3>

      <p>
        Added {quantity} item{quantity > 1 ? "s" : ""} to cart
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1>Product Quantity Manager</h1>

      <div className="products">

        <ProductCard
          name="Running Shoes"
          price={500}
          image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
        />

        <ProductCard
          name="Headphones"
          price={1000}
          image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
        />

      </div>
    </div>
  );
}

export default App;
