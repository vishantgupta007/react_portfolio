import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa6";
import { DiJavascript1 } from "react-icons/di";
import { TbBrandRedux, TbBrandReactNative } from "react-icons/tb";
import { MdScreenshotMonitor } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { AiOutlineBranches } from "react-icons/ai";
import { TiCloudStorage } from "react-icons/ti";
import { SiMui, SiTailwindcss, SiWebflow } from "react-icons/si";

import "./Experience.css";
// import { techStacks } from "../../data";

const Experience = () => {
  return (
    <section id="experience">
      {/* <div className="skill_heading"> */}
      <h3>Skills I Have</h3>
      <h1>SKILLS DEVELOPED</h1>
      {/* </div> */}
      <div className="container skills_container">
        <div className="skill_content">
          <div className="skill_detail">
            <FaHtml5 />
            <h4>HTML</h4>
          </div>
          <div className="skill_detail">
            <FaCss3Alt />
            <h4>CSS</h4>
          </div>
          <div className="skill_detail">
            <MdScreenshotMonitor />
            <h4>Web-Responsiveness</h4>
          </div>
          <div className="skill_detail">
            <DiJavascript1 />
            <h4>JavaScript</h4>
          </div>
          <div className="skill_detail">
            <AiOutlineBranches />
            <h4>DOM Manupilation</h4>
          </div>
          <div className="skill_detail">
            <TiCloudStorage />
            <h4>REST API</h4>
          </div>
          <div className="skill_detail">
            <FaReact />
            <h4>React.js</h4>
          </div>
          <div className="skill_detail">
            <TbBrandRedux />
            <h4>Redux-Toolkit</h4>
          </div>
          <div className="skill_detail">
            <TbBrandReactNative />
            <h4>React Native</h4>
          </div>
          <div className="skill_detail">
            <FaGithub />
            <h4>Git/ Github/ Gitlab</h4>
          </div>
          <div className="skill_detail">
            <SiTailwindcss />
            <h4>Tailwind CSS</h4>
          </div>
          <div className="skill_detail">
            <SiMui />
            <h4>Material UI</h4>
          </div>
          <div className="skill_detail">
            <SiWebflow />
            <h4>Webflow</h4>
          </div>
          {/* {techStacks.map((techStack) => (
            <div key={techStack.id} className="skill_detail">
              {renderIcon(techStack.icon)}
              <h4>{techStack.tech}</h4>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default Experience;

// const skills = [
// {
//   name: "HTML",
//   icon: <FaHtml5 />,
// },
// {
//   name: "CSS",
//   icon: <FaCss3Alt />,
// },
// {
//   name: "TailwindCSS",
//   icon: <TbBrandTailwind />,
// },
// {
//   name: "Web-Responsiveness",
//   icon: <DiResponsive />,
// },
// {
//     name: "JavaScript",
//     icon: <DiJavascript1 />,
//   },
//   {
//     name: "React",
//     icon: <FaReact />,
//   },
//   {
//     name: "Redux",
//     icon: <TbBrandRedux />,
//   },
//   {
//     name: "React Native",
//     icon: <TbBrandReactNative />,
//   },
//   {
//     name: "Git/ Github",
//     icon: <FaGithub />,
//   },
// ];

{
  /* {skills.map((skill) => {
            return (
              <article className="skill_detail" key={skill.name}>
                <h4>{skill.name}</h4>
                <h4>{skill.icon}</>
              </article>
            );
   
          })} */
}
