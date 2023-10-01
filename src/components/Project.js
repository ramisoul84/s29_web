import "./project.css";
import img from "../assets/images/crypto.jpg";
const Project = ({ props }) => {
  return (
    <div className="project">
      <div className="project-info">
        <p>TYPE:</p>
        <p>
          {props.type.map((e) => {
            return <li>{e}</li>;
          })}
        </p>
        <p>CLIENT:</p>
        <p>{props.client}</p>
        <p>YEAR:</p>
        <p>{props.year}</p>
      </div>
      <div className="project-desc">
        <img src={img} className="project-img" />
        <div>
          <h3 className="project-title">{props.title}</h3>
          <p className="project-text">{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
