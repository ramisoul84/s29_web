import { useState, useEffect } from "react";
import "./work.css";
import Project from "../components/Project";
import projects from "../assets/data/projects.json";
import Spectrum from "../components/Spectrum";
const Work = () => {
  const [show, setShow] = useState("spect");
  const [types, setTypes] = useState([]);
  const [filterdProjects, setFilterdProjects] = useState([]);
  const [spectValue, setSpectValue] = useState(1);
  const changeHandle = (e) => {
    const { checked, name } = e.target;
    let arr = [...types];
    if (checked) {
      arr.push(name);
    } else {
      arr = arr.filter((item) => {
        return item !== name;
      });
    }
    setTypes(arr);
  };
  const spectHandle = () => {
    const slider = document.getElementById("slider");
    const spectBtns = document.querySelectorAll(".spect-btns p");

    spectBtns.forEach((element) => {
      element.style.color = "gray";
    });
    spectBtns[slider.value].style.color = "white";
    console.log(spectBtns);
    setSpectValue(slider.value);
  };
  const filterProjects = (projects, types) => {
    const res = [];
    let arr = [];
    types.forEach((element, i) => {
      arr = projects.filter((e) => e.type.includes(element));
      for (i in arr) {
        res.push(arr[i]);
      }
    });
    // Here we should delete duplicates ....
    return res;
  };
  useEffect(() => setFilterdProjects(filterProjects(projects, types)), [types]);
  return (
    <section id="work">
      <div className="work-head">
        <p>WORK</p>
        <p
          className="btn-spect"
          onClick={() => {
            setShow("spect");
            setTypes([]);
            setFilterdProjects([]);
          }}
          style={{ color: show === "spect" ? "white" : "gray" }}
        >
          SPECTRUM
        </p>
        <p
          className="btn-filt"
          onClick={() => {
            setShow("filt");
            setTypes([]);
            setFilterdProjects([]);
          }}
          style={{ color: show === "filt" ? "white" : "gray" }}
        >
          FILTERS
        </p>
      </div>
      {show === "filt" ? (
        <form className="filter-box">
          <div className="filter-row">
            <input type="checkbox" name="GAME DESIGN" onChange={changeHandle} />
            <lable>game design</lable>
          </div>
          <div className="filter-row">
            <input type="checkbox" name="WEB DESIGN" onChange={changeHandle} />
            <lable>web design</lable>
          </div>
          <div className="filter-row">
            <input
              type="checkbox"
              name="BRAND DESIGN"
              onChange={changeHandle}
            />
            <lable>brand design</lable>
          </div>
          <div className="filter-row">
            <input type="checkbox" name="ARCH-VIZ" onChange={changeHandle} />
            <lable>arch-viz</lable>
          </div>
          <div className="filter-row">
            <input
              type="checkbox"
              name="ARCHITECTURE"
              onChange={changeHandle}
            />
            <lable>architecture</lable>
          </div>
        </form>
      ) : (
        <Spectrum />
      )}

      <div className="search-res">
        {types.length ? (
          <p>{filterdProjects.length} projects are founded</p>
        ) : (
          <p>Choose types you want to see</p>
        )}
      </div>
      <div className="projects">
        {filterdProjects.map((e, i) => {
          return <Project project={e} />;
        })}
      </div>
    </section>
  );
};
export default Work;
