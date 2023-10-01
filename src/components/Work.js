const Work = ({ props }) => {
  return (
    <section className="work">
      <div className="work-head">
        <p>TYPE:{props.type}</p>
        <p>CLIENT:{props.client}</p>
        <p>YEAR:{props.year}</p>
      </div>
      <div className="work-desc">
        <img src={props.img} />
        <p>{props.title}</p>
        <p>{props.desc}</p>
      </div>
    </section>
  );
};

export default Work;