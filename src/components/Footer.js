import "./footer.css";
import logo from "../assets/img/logo.png";
const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="footer-links">
        <div className="footer-col col1">
          <p>hello @ s29.design</p>
          <p>Impressium</p>
          <p>Datenshutz</p>
        </div>
        <div className="footer-col col2">
          <p>ADDRESS 11</p>
          <p>XXX BERLIN</p>
          <p>TELEPHONE</p>
        </div>
        <div className="footer-col">
          <a className="social-link" href="https://instagram/s29">
            INSTAGRAM
          </a>
          <a className="social-link" href="https://linkedin/s29">
            LINKEDIN
          </a>
          <a className="social-link" href="https://twitter/s29">
            TWITTER
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
