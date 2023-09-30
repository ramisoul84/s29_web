const Home = () => {
  return (
    <section>
      <div className="hello-msg">
        <span className="hello-sq"> &#x25A0;</span>

        <p className="tab">
          hello! We are a multidiciblinary
          <br />
          designe team, ready to realize
          <br /> your ambition visions!
        </p>
      </div>
      <div className="services">
        <h5 className="services-head">SERVICES</h5>
        <p className="services-text">
          S29.designis here to cover all your creative needs.We offer a wide
          range of services,including
          <span className="services-span">
            {" "}
            game designe, web designe,brand designe,arch-viz
          </span>{" "}
          and <span className="services-span">architecture</span>. With our
          divers skill set,we're well-equipped to handle projectsthat cut across
          various industries.So whether you are in gameing, web development,
          branding, or architecture, we've got you covered :
        </p>
      </div>
    </section>
  );
};
export default Home;
