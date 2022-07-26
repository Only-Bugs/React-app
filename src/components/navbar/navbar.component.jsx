import "./navbar.styles.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="company-name">Cloudegic</span>
      <div className="nav-items">
        <span className="home glow">Home</span>
        <span className="login glow">Login</span>
      </div>
    </div>
  );
};

export default Navbar;
