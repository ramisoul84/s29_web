import { useState, useEffect } from "react";
import "./work.css";
import Project from "../components/Project";
import projects from "../assets/data/projects.json";
import Spectrum from "../components/Spectrum";
import Filters from "../components/Filters";
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
  const spectHandle = (i) => {
    console.log("iii", i);
    switch (i) {
      case "0":
        setTypes(["GAME DESIGN"]);
        break;
      case "1":
        setTypes(["WEB DESIGN"]);
        break;
      case "2":
        setTypes(["BRAND DESIGN"]);
        break;
      case "3":
        setTypes(["ARCH-VIZ"]);
        break;
      case "4":
        setTypes(["ARCHITECTURE"]);
        break;
    }
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
  useEffect(() => {
    setFilterdProjects(filterProjects(projects, types));
    console.log("types", types);
  }, [types]);
  return (
    <section id="work">
      <div className="work-head">
        <p>WORK</p>
        <p
          className="btn-spect"
          onClick={() => {
            setShow("spect");
            setTypes(["GAME DESIGN"]);
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
        <Filters changeHandle={changeHandle} />
      ) : (
        <Spectrum changeHandle={spectHandle} />
      )}

      <div className="projects">
        <div className="search-res">
          {types.length ? (
            <p>
              <span>!!!</span> {filterdProjects.length}{" "}
              {filterdProjects.length === 1
                ? "Project is FOUND"
                : "Projects are found"}
              <span> !!!</span>{" "}
            </p>
          ) : (
            <p>
              <span>!!!</span> Choose types you want to see <span>!!!</span>{" "}
            </p>
          )}
        </div>
        {filterdProjects.map((e, i) => {
          return <Project project={e} />;
        })}
      </div>
    </section>
  );
};
export default Work;
