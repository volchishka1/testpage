import logoSvg from './assets/logoSvg.svg';
import vectorDown from './assets/vectorDown.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header-container">
          <div className="Header-logo-container">
              <img src={logoSvg} alt="logoSvg" />
              <span className="Logo-text">antools.</span>
          </div>
          <div className="Header-text-center-container">
              <span>Home</span>
              <div>
                  <span>Categories</span>
                  <img className="vector-down" src={vectorDown} alt={vectorDown}/>
              </div>
              <span>My collections</span>
              <span>Blog</span>
          </div>
          <div className="button-container">
              <span className="login-text">
                  Login
              </span>
              <button className="sign-up-button">
                  <span className="sing-up-text">
                  Sign Up
                  </span>
              </button>
          </div>
      </header>
    </div>
  );
}

export default App;
