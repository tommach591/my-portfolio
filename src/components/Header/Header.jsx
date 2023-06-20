import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <h1 className="Title">Tom Mach</h1>
      <div className="Redirects">
        <img
          onClick={() => {
            window.location.href = "https://www.linkedin.com/in/tom-mach/";
          }}
          src="https://api.iconify.design/mdi:linkedin.svg?color=%23ffffff"
          alt="LinkedIn"
        />
        <img
          onClick={() => {
            window.location.href = "https://github.com/tommach591";
          }}
          src="https://api.iconify.design/mdi:github.svg?color=%23ffffff"
          alt="Github"
        />
      </div>
    </div>
  );
}

export default Header;

