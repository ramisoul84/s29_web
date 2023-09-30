import Header from "./components/Header";
import Home from "./components/Home";
import Works from "./components/Works";
import SideNav from "./components/SideNav";
const App = () => {
  const content = (
    <main>
      <Header />
      <Home />
      <Works />
      <SideNav />
    </main>
  );
  return content;
};

export default App;
