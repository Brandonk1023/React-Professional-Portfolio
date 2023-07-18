import React from "react";
import resume from "../assets/Resume.pdf";

const Resume = () => {
  return (
    <div className="flex flex-col mx-auto">
      <h2 className="flex justify-center">resume</h2>
      <p>
        Thanks for your interest in my resume. You can download a PDF copy by
        clicking
        <a
          className="link link-primary"
          href={resume}
          download="Brandon Kilgore Resume.pdf"
        >
          here
        </a>
        .
      </p>
      <div className="flex flex-col mx-auto">
        <p className="flex flex-col gap-4">
          <h3 className="flex justify-center">Technical Skills</h3>
          <section className="card w-96 glass p-4">
          <h4 className="flex justify-center">Frameworks/Tools:</h4>
          <ul>
            <li>React</li>
            <li>jQuery</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL</li>
            <li>GitHub</li>
            <li>BootStrap</li>
            <li>Handlebars</li>
            <li>MongoDB</li>
            <li>npm</li>
            <li>Insomnia</li>
            <li>VsCode</li>
            <li>Heroku</li>
            <li>Sequelize</li>
            <li>Tailwind</li>
            <li>DaisyUI</li>
            <li>MaterialUI</li>
            <li>ChakraUI</li>
          </ul>
          </section>
          <section className="card w-96 glass p-4">
          <h4 className="flex justify-center">Software Languages:</h4>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SQL</li>
            <li>Python</li>
          </ul>
          </section>
          <section className="card w-96 glass p-4">
          <h4 className="flex justify-center">Operating Systems:</h4>
          <ul>
            <li>Windows</li>
            <li>Debian Linux</li>
            <li>Mac</li>
          </ul>
          </section>
        </p>
      </div>
    </div>
  );
};

export default Resume;
