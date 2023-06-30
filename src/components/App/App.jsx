import "./App.css";
import { useEffect, useState } from "react";
import { getProjects } from "../../util/getProjects";
import Carousel from "../Carousel";
import Header from "../Header";
import AboutMe from "../AboutMe";
import Project from "../Project";
import Modal from "../Modal";

function App() {
  const [modalOn, setModalOn] = useState(false);
  const [project, setProject] = useState({});
  const [page, setPage] = useState(0);
  const [list, setList] = useState([...getProjects()].slice(0, 3));

  const handleProjectClick = (item) => {
    setProject(item);
    setModalOn(true);
  };

  useEffect(() => {
    setList([...getProjects()].splice(page * 3, 3));
  }, [page]);

  return (
    <div className="App">
      <Modal modalOn={modalOn} setModalOn={setModalOn} item={project} />
      <Header />
      <div className="AppBody">
        <Carousel
          list={[...getProjects()].slice(0, 6)}
          handleProjectClick={handleProjectClick}
        />
        <AboutMe />
        <h1 className="ProjectTitle">Projects</h1>
        <div className="ProjectGrid">
          {list.map((item, i) => (
            <Project
              key={i}
              item={item}
              handleProjectClick={handleProjectClick}
            />
          ))}
        </div>
        <div className="NumberIndex">
          <h1
            onClick={() => {
              if (page > 0) setPage(page - 1);
            }}
          >
            {"<"}
          </h1>
          {Array.from(
            { length: Math.ceil(getProjects().length / 3) },
            (_, index) => index + 1
          ).map((_, i) => (
            <h1
              key={i}
              onClick={() => setPage(i)}
              style={page === i ? { borderBottom: "1px solid white" } : {}}
            >
              {i + 1}
            </h1>
          ))}
          <h1
            onClick={() => {
              if (page < Math.ceil(getProjects().length / 3) - 1)
                setPage(page + 1);
            }}
          >
            {">"}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;

