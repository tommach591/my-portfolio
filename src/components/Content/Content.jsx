import "./Content.css";

function Content({ item, handleProjectClick }) {
  return (
    <div className="Content">
      <div className="ContentInfo">
        <h1>{item.title}</h1>
        <h2>{item.description}</h2>
      </div>
      <div className="Thumbnail" onClick={() => handleProjectClick(item)}>
        <img src={item.img} alt="" />
      </div>
    </div>
  );
}

export default Content;
