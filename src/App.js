import "./styles/App.css";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="home">
    <header className="header">
      <h1>Welcome to Threads & Co.</h1>
    </header>
    <main className="main-content">
      <section className="hero-section">
        <h2>Discover the Latest Fashion Trends</h2>
        <p>Explore our collection of stylish clothing and accessories for men and women.</p>
        <Link to="/products">
        <button className="shop-now-btn">Shop Now</button>
        </Link>
      </section>
    </main>
  </div>
  );
};

export default App;
