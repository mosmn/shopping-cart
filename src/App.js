import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
    <header className="header">
      <h1>Welcome to Threads & Co.</h1>
    </header>
    <main className="main-content">
      <section className="hero-section">
        <h2>Discover the Latest Fashion Trends</h2>
        <p>Explore our collection of stylish clothing and accessories for men and women.</p>
        <button className="shop-now-btn">Shop Now</button>
      </section>
    </main>
    <footer className="footer">
      <p>&copy; 2023 Threads & Co. All rights reserved.</p>
    </footer>
  </div>
  );
};

export default App;
