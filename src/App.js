import Home from "./sections/Home";
import Work from "./sections/Work";
import About from "./sections/About";
import Contact from "./sections/Contact";
import SideNav from "./components/SideNav";
const App = () => {
  /*
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");
  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector("header nav a [href*=" + id + "]")
            .classList.add("active");
        });
      }
    });
  };
  */
  const content = (
    <main>
      <Home />
      <Work />
      <About />
      <Contact />
      <SideNav />
    </main>
  );
  return content;
};

export default App;
