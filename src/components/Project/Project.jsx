import "./Project.css";

function Project({ item, handleProjectClick }) {
  return (
    <div className="Project" onClick={() => handleProjectClick(item)}>
      <div className="ProjectThumbnail">
        <img src={item.img} alt="" />
      </div>
      <div className="ProjectText">
        <h1>{item.title}</h1>
        <h2>{item.description}</h2>
      </div>
    </div>
  );
}

export default Project;
