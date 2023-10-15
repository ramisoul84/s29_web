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
      <div className="gradient gradient-3">
        <a href="#work" className="link link-work link-mob">
          work
        </a>
      </div>
      <div className="gradient gradient-4">
        <a href="#about" className="link link-work link-mob">
          about
        </a>
      </div>
      <div className="gradient gradient-5">
        <a href="#contact" className="link link-work link-mob">
          contact
        </a>
      </div>
      <div className="gradient gradient-6"></div>
    </div>
  );
};

export default Header;
