import "./work.css";
import Project from "../components/Project";
const projects = [
  {
    type: ["WEB DESIGNE"],
    client: "RESVR",
    year: 2023,
    title: "Project 1",
    desc: "S29.designis here to cover all your creative needs.We offer a wide range of services,including game designe, web designe,brand designe,arch-viz and architecture. With our divers skill set,we're well-equipped to handle projectsthat cut across various industries.So whether you are in gameing, web development, branding, or architecture, we've got you covered :",
    img: "../assets/crypto.jpg",
  },
  {
    type: ["WEB DESIGNE", "Branding"],
    client: "RESVR",
    year: 2023,
    title: "Project 2",
    desc: "S29.designis here to cover all your creative needs.We offer a wide range of services,including game designe, web designe,brand designe,arch-viz and architecture. With our divers skill set,we're well-equipped to handle projectsthat cut across various industries.So whether you are in gameing, web development, branding, or architecture, we've got you covered :",
    img: "../assets/crypto.jpg",
  },
];

const Work = () => {
  return (
    <section id="work">
      <nav>
        <p>WORK</p>
        <p>SPECTRUM</p>
        <p>FILTERS</p>
      </nav>
      <div className="spectrum">
        <p>OUR EXPERIENCE SPECTRUM</p>
      </div>
      <div className="projects">
        {projects.map((e) => {
          return <Project props={e} />;
        })}
      </div>
    </section>
  );
};
export default Work;
