import React from "react";
import Work from "./Work";

const works = [
  {
    type: "WEB DESIGNE",
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
    title: "Project 1",
    desc: "S29.designis here to cover all your creative needs.We offer a wide range of services,including game designe, web designe,brand designe,arch-viz and architecture. With our divers skill set,we're well-equipped to handle projectsthat cut across various industries.So whether you are in gameing, web development, branding, or architecture, we've got you covered :",
    img: "../assets/crypto.jpg",
  },
];
function Works() {
  return (
    <div id="works">
      <div className="works-header gradient-2">
        <p>WORKS</p>
        <p>SPECTRUM</p>
        <p>FILTERS</p>
      </div>
      {works.map((e, i) => {
        return <Work props={e} />;
      })}
    </div>
  );
}

export default Works;
