import "./App.css";
import Navigation from "./components/Navigation";
import Intro from "./components/Intro";
import Op from "./components/Op";
import Tensura from "./components/Tensura";
import "./style/LandingPage.css";

function App() {
  return (
    <div>
      <div className="myBG">
        <Navigation />
        <Intro />
      </div>

      <div className="op">
        <Op />
      </div>

      <div className="tensura">
        <Tensura />
      </div>
    </div>
  );
}

export default App;
