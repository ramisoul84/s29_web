import "./sidenav.css";
const SideNav = () => {
  return (
    <aside>
      <a className="side-nav color1" href="#home">
        HOME
      </a>
      <a className="side-nav color2" href="#work">
        WORK
      </a>
      <a className="side-nav color3" href="#about">
        ABOUT
      </a>
      <a className="side-nav color4" href="#contact">
        CONTACT
      </a>
    </aside>
  );
};
export default SideNav;
