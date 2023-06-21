import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <h1 className="Title">Portfolio - Tom Mach</h1>
      <div className="Redirects">
        <img
          onClick={() => {
            window.open("https://www.linkedin.com/in/tom-mach/", "_blank");
          }}
          src="https://api.iconify.design/mdi:linkedin.svg?color=%23ffffff"
          alt="LinkedIn"
        />
        <img
          onClick={() => {
            window.open("https://github.com/tommach591", "_blank");
          }}
          src="https://api.iconify.design/mdi:github.svg?color=%23ffffff"
          alt="Github"
        />
      </div>
    </div>
  );
}

export default Header;

