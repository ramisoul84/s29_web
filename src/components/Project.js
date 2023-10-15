import "./project.css";
const Project = ({ project }) => {
  return (
    <div className="project">
      <div className="project-info">
        <p>TYPE:</p>
        <p>
          {project.type.map((e) => {
            return <li>{e}</li>;
          })}
        </p>
        <p>CLIENT:</p>
        <p>{project.client}</p>
        <p>YEAR:</p>
        <p>{project.year}</p>
      </div>
      <div className="project-desc">
        <img
          src={require("../assets/img/" + project.img + ".jpg")}
          alt="project.img"
          className="project-img"
        />
        <div className="pro-right">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-text">{project.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
