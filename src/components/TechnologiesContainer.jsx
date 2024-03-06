import {
  DiHtml5,
  DiCss3,
  DiNodejsSmall,
  DiReact,
  DiSass,
  DiJavascript,
} from "react-icons/di";

import { SiTailwindcss, SiTypescript, SiBootstrap, SiJquery } from "react-icons/si";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJavascript /> },
  { id: "typescript", name: "Typescript", icon: <SiTypescript /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "sass", name: "Sass", icon: <DiSass /> },
  { id: "tailwind", name: "Tailwind", icon: <SiTailwindcss /> },
  { id: "bootstrap", name: "Bootstrap", icon: <SiBootstrap /> },
  { id: "jquery", name: "Jquery", icon: <SiJquery /> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
