import "./App.css";
import Carousel from "../Carousel";
import Header from "../Header";
import { useState } from "react";
import { getProjects } from "../../util/getProjects";

function App() {
  const [projects, setProjects] = useState([...getProjects()]);

  return (
    <div className="App">
      <Header />
      <div className="AppBody">
        <Carousel
          list={projects.length > 6 ? projects.slice(0, 6) : projects}
        />
      </div>
    </div>
  );
}

export default App;

