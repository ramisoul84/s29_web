import "./header.css";
const Header = () => {
  return (
    <header>
      <div className="gradient gradient-1"></div>
      <div className="gradient gradient-2 navigator">
        <div className="header-logo">
          <p>s29.design</p>
        </div>
        <nav className="header-nav">
          <a href="#work" className="active">
            work
          </a>
          <a href="#about">about</a>
          <a href="#contact">contact</a>
        </nav>
      </div>
      <div className="gradient gradient-3"></div>
      <div className="gradient gradient-4"></div>
      <div className="gradient gradient-5"></div>
      <div className="gradient gradient-6"></div>
    </header>
  );
};

export default Header;
