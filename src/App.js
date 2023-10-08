import Header from "./components/Header";
import Home from "./sections/Home";
import Work from "./sections/Work";
import About from "./sections/About";
import Contact from "./sections/Contact";
import SideNav from "./components/SideNav";
import Footer from "./components/Footer";
const App = () => {
  const content = (
    <main>
      <Header />
      <Home />
      <Work />
      <About />
      <Contact />
      <SideNav />
      <Footer />
    </main>
  );
  return content;
};
export default App;
