import React from "react";
import resume from "../assets/Resume.pdf";

const Resume = () => {
  return (
    <div className="flex flex-col mx-auto">
      <h2 className="flex justify-center">resume</h2>
      <p>
        {" "}
        Thanks for your interest in my resume. You can download a PDF copy by
        clicking{" "}
        <a
          className="link link-primary"
          href={resume}
          download="Brandon Kilgore Resume.pdf"
        >
          here
        </a>
        .
      </p>
      <div>
        <p>
          Technical Skills
          <h3>Frameworks/Tools:</h3>
          <ul>
            <li>
              jQuery, Node.js, Express.js, MySQL, GitHub, BootStrap, Handlebars,
              MongoDB, npm, Insomnia, VS Code, Heroku, Sequelize,REACT,
              Tailwind, DaisyUI, MaterialUI, ChakraUI
            </li>
          </ul>
          <h3>Software Languages:</h3>
          <ul>
            JavaScript, HTML, CSS, SQL, Python
            <h3>Operating Systems:</h3>
            Windows,Debian Linux, Mac
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Resume;
