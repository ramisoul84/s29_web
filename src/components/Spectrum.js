import "./spectrum.css";
const Spectrum = ({ changeHandle }) => {
  const spectHandle = () => {
    const slider = document.getElementById("slider");
    const spects = document.querySelectorAll(".spectrum-type p");
    const sqs = document.querySelectorAll(".spectrum-sq");

    spects.forEach((element) => {
      element.style.color = "gray";
    });
    sqs.forEach((element) => {
      element.style.backgroundColor = "gray";
    });

    spects[slider.value].style.color = "white";
    sqs[slider.value].style.backgroundColor = "white";
    changeHandle(slider.value);
    console.log(slider.value);
  };
  return (
    <div className="spectrum">
      <p>OUR EXPERIENCE SPECTRUM</p>
      <div className="spectrum-line">
        <input
          type="range"
          min={0}
          max={4}
          id="slider"
          className="spectrum-slider"
          defaultValue={0}
          onChange={spectHandle}
        />
        <div className="spectrum-types">
          <div className="spectrum-type">
            <p>game design</p>
            <div className="spectrum-sq sq1"></div>
          </div>
          <div className="spectrum-type">
            <p>web design</p>
            <div className="spectrum-sq sq2"></div>
          </div>
          <div className="spectrum-type">
            <p>brand design</p>
            <div className="spectrum-sq sq3"></div>
          </div>
          <div className="spectrum-type">
            <p>arch-viz</p>
            <div className="spectrum-sq sq4"></div>
          </div>
          <div className="spectrum-type">
            <p>architecture</p>
            <div className="spectrum-sq sq5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Spectrum;
