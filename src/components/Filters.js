import "./filters.css";
const Filters = ({ changeHandle }) => {
  return (
    <div className="filter-box">
      <p>PROJECTS FILTER</p>

      <div className="filter-row">
        <input type="checkbox" name="GAME DESIGN" onChange={changeHandle} />
        <lable>game design</lable>
      </div>
      <div className="filter-row">
        <input type="checkbox" name="WEB DESIGN" onChange={changeHandle} />
        <lable>web design</lable>
      </div>
      <div className="filter-row">
        <input type="checkbox" name="BRAND DESIGN" onChange={changeHandle} />
        <lable>brand design</lable>
      </div>
      <div className="filter-row">
        <input type="checkbox" name="ARCH-VIZ" onChange={changeHandle} />
        <lable>arch-viz</lable>
      </div>
      <div className="filter-row">
        <input type="checkbox" name="ARCHITECTURE" onChange={changeHandle} />
        <lable>architecture</lable>
      </div>
    </div>
  );
};
export default Filters;
