import "./AboutMe.css";
import Resume from "../../assets/Tom Mach Resume.pdf";

function AboutMe() {
  return (
    <div className="AboutMe">
      <div className="Info">
        <div className="Text">
          <h1>About Me</h1>
          <h2>
            I have a strong educational background, holding a Bachelor of
            Science degree in Computer Science from San Jose State University.
            With my comprehensive studies, I have developed a high level of
            proficiency in various programming languages, such as C++, Java, and
            JavaScript. Leveraging my skills, I have successfully built and
            launched multiple web applications using React. Continuously seeking
            new challenges, I am committed to refining my abilities and staying
            ahead of the latest industry trends.
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
