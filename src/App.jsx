import "./App.css"

const App = () => {
  return (
    <div className="App">
        <header className="header" id="header">
        <div className="container">
          <div className="vse">
        <div className="logo"></div>
        <nav className="header__menu">
                  <a href="#" className="header__link">HOME</a>
                  <a href="#" className="header__link">SHOP</a>
                  <a href="#" className="header__link">LOOKBOOK</a>
                  <a href="#" className="header__link">FEATURES</a>
                  <a href="#" className="header__link">PAGES</a>
                  <a href="#" className="header__link">BLOG</a>
              </nav>
         <div className="ikon"></div>
        </div>
        </div>  
        </header>
      <section id="section11" className="section11">
        <div className="container">
          <div className="text">
          <p className="New">NEW TREND</p>
          <p className="Coll">COLLUSION</p>
          <p className="An">An exclusive selection of this season's trends.</p>
          <div className="button1">
          <button className="discov">DISCOVER</button>
          <button className="shop">SHOP NOW</button>
          </div>
          </div>
        </div>
      </section>
      </div>
  );
}

export default App;
