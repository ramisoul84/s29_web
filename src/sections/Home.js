import { useEffect, useRef } from "react";
import "./home.css";
const Home = () => {
  const homeRef = useRef(null);
  useEffect(() => {
    const updateMousePosition = (ev) => {
      if (!homeRef.current) return;
      const { clientX, clientY } = ev;
      homeRef.current.style.setProperty("--x", `${clientX}px`);
      homeRef.current.style.setProperty("--y", `${clientY}px`);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return (
    <section id="home" ref={homeRef}>
      <div className="home-hello">
        <div className="hello-sq"> </div>
        <p>
          hello!
          <br />
          We are a multidiciblinary
          <br />
          designe team, ready to realize
          <br /> your ambition visions!
        </p>
      </div>
      <div className="home-services">
        <h5>SERVICES</h5>
        <p>
          S29.designis here to cover all your creative needs. We offer a wide
          range of services, including <span className=""></span>
          <span className="lcd">
            <span className="color1">game design, </span>
            <span className="color2">web design, </span>
            <span className="color3">brand design, </span>
            <span className="color4">arch-viz, </span>
          </span>{" "}
          and <span className="lcd color5">architecture</span>. With our diverse
          skill set, we're well-equipped to handle projects that cut across
          various industries. So whether you are in gameing, web development,
          branding, or architecture, we've got you covered.
        </p>
      </div>
    </section>
  );
};
export default Home;
