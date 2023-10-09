const projects = require("./src/assets/data/projects.json");

console.log("hello");

const types = ["WEB DESIGN", "GAME DESIGN"];
const filterProjects = (projects, types) => {
  const res = [];
  let arr = [];
  types.forEach((element, i) => {
    //res.push(projects.filter((e) => e.type.includes(element)));
    arr = projects.filter((e) => e.type.includes(element));
    for (i in arr) {
      res.push(arr[i]);
    }
  });
  console.log(res);
  return res;
};
filterProjects(projects, types);
