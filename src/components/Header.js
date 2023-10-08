import "./header.css";
const Header = () => {
  return (
    <div id="header">
      <div className="gradient gradient-1"></div>
      <div className="gradient gradient-2">
        <div>
          <p className="header-logo">s29.design</p>
        </div>
        <nav className="header-nav">
          <a href="#work" className="link link-work">
            work
          </a>
          <a href="#about" className="link link-about">
            about
          </a>
          <a href="#contact" className="link link-contact">
            contact
          </a>
        </nav>
      </div>
      <div className="gradient gradient-3"></div>
      <div className="gradient gradient-4"></div>
      <div className="gradient gradient-5"></div>
      <div className="gradient gradient-6"></div>
    </div>
  );
};

export default Header;
