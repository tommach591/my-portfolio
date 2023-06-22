import "./AboutMe.css";
import Resume from "../../assets/Tom_Mach_Resume.pdf";

function AboutMe() {
  return (
    <div className="AboutMe">
      <div className="Info">
        <div className="Text">
          <h1>About Me</h1>
          <h2>
            I hold a Bachelor of Science degree in Computer Science from San
            Jose State University. During my academic journey, I gained
            proficiency in a range of programming languages, including C++,
            Java, and JavaScript. Following my graduation, I have built and
            published several web applications using React. I am always on the
            lookout for new projects to take on and further hone my skills.
          </h2>
          <div className="Actions">
            <a
              className="ContactButton"
              href={Resume}
              download="Tom_Mach_Resume"
            >
              <h1>Download Resume</h1>
              <img
                src="https://api.iconify.design/material-symbols:download-rounded.svg?color=%23464646"
                alt=""
              />
            </a>
            <div
              className="ContactButton"
              onClick={() => {
                window.open(
                  "https://github.com/tommach591/my-portfolio",
                  "_blank"
                );
              }}
            >
              <h1>Portfolio Github</h1>
              <img
                src="https://api.iconify.design/carbon:portfolio.svg?color=%23464646"
                alt=""
              />
            </div>
            <div
              className="ContactButton"
              onClick={() => {
                navigator.clipboard.writeText("tom.m.mach@gmail.com");
                alert("Email Copied!");
              }}
            >
              <h1>Copy Email</h1>
              <img
                src="https://api.iconify.design/material-symbols:content-copy-outline.svg?color=%23464646"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="Info">
        <div className="Text">
          <h1>Skills</h1>
          <h2>
            JavaScript, CSS, HTML, Node.js, React.js, Express.js, C++, Java, C,
            C#, Python, SQL, NoSQL, MySQL, Cassandra, Redis, MongoDB, Neo4j,
            AWS, Docker, Unity, Visual Studio Code, Google Suite
          </h2>
        </div>
      </div>
      <div className="Info">
        <div className="Text">
          <h1>Education</h1>
          <h2>San Jose State University - B.S. Computer Science</h2>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
