import Home from "./sections/Home";
import Work from "./sections/Work";
import About from "./sections/About";
import Contact from "./sections/Contact";
import SideNav from "./components/SideNav";
const App = () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");
  let top = window.scrollY;
  console.log(sections);
  console.log(navLinks);
  console.log(top);

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
