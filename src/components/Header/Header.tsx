import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img
          src="https://cdn0.iconfinder.com/data/icons/digital-asset-1/512/Blockchain-bitcoin-cryptocurrency-cubes-crypto-block-network-digital-technology-64.png"
          alt="logo"
        />
        <h1>Binanse</h1>
      </div>
      <div className="auth">
        <p>Sign in</p>
      </div>
    </header>
  );
};

export default Header;
