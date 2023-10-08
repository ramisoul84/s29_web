import { useState } from "react";
import "./work.css";
import Project from "../components/Project";
import projects from "../assets/data/projects.json";
const Work = () => {
  const [show, setShow] = useState("spect");
  return (
    <section id="work">
      <div className="work-head">
        <p>WORK</p>
        <p
          className="btn-spect"
          onClick={() => setShow("spect")}
          style={{ color: show === "spect" ? "white" : "gray" }}
        >
          SPECTRUM
        </p>
        <p
          className="btn-filt"
          onClick={() => setShow("filt")}
          style={{ color: show === "filt" ? "white" : "gray" }}
        >
          FILTERS
        </p>
      </div>
      {show === "filt" ? (
        <form className="filter-box">
          <div className="filter-row">
            <lable>game design</lable>
            <input type="checkbox" />
          </div>
          <div className="filter-row">
            <lable>web design</lable>
            <input type="checkbox" />
          </div>
          <div className="filter-row">
            <lable>brand design</lable>
            <input type="checkbox" />
          </div>
          <div className="filter-row">
            <lable>arch-viz</lable>
            <input type="checkbox" />
          </div>
          <div className="filter-row">
            <lable>architecture</lable>
            <input type="checkbox" />
          </div>
        </form>
      ) : (
        <div className="spectrum">
          <p>OUR EXPERIENCE SPECTRUM</p>
          <div>
            <div className="spect-btns">
              <p>game design</p>
              <p>game design</p>
              <p>game design</p>
              <p>game design</p>
              <p>game design</p>
            </div>
            <div className="spect-box"></div>
          </div>
        </div>
      )}
      <div className="projects">
        {projects.map((e, i) => {
          return <Project project={e} />;
        })}
      </div>
    </section>
  );
};
export default Work;
