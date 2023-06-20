import "./Content.css";

function Content({ item }) {
  return (
    <div className="Content">
      <div className="Info">
        <h1>{item.title}</h1>
        <h2>{item.description}</h2>
      </div>
      <div className="Thumbnail">
        <img src={item.img} alt="" />
      </div>
    </div>
  );
}

export default Content;
