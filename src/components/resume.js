import React from "react";
import resume from "../assets/Resume.pdf";

const Resume = () => {
  return (
    <div className="grid mx-auto">
      <h2 className="flex justify-center m-4 text-3xl">Resume</h2>
      <p>
        Thanks for your interest in my resume. You can download a PDF copy by{''}
        <button className="btn btn-accent w-40 ml-2">
        <a
          href={resume}
          download="Brandon Kilgore Resume.pdf"
        >
          Clicking here
        </a>
        </button>
        
      </p>
      <div className="grid justify-center mx-auto">
      <h3 className="bg-secondary rounded-md text-black text-2xl flex justify-center my-6">Technical Skills</h3>
        <div className="grid grid-cols-2 gap-4">
          <section className="card w-96 glass p-4 text-lg">
          <h4 className="flex justify-center text-xl">Frameworks/Tools:</h4>
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
          <section className="card w-96 glass p-4 text-lg">
          <h4 className="flex justify-center text-xl">Software Languages:</h4>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SQL</li>
            <li>Python</li>
          </ul>
          </section>
          <section className="card w-96 glass p-4 mb-4 text-lg">
          <h4 className="flex justify-center text-xl">Operating Systems:</h4>
          <ul>
            <li>Windows</li>
            <li>Debian Linux</li>
            <li>Mac</li>
          </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
