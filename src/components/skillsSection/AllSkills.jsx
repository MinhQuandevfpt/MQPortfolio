import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiRedux, SiNextdotjs, SiMongodb, SiExpress, SiNodedotjs, SiGit, SiDocker, SiMysql, SiPostgresql, SiRedis } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import SingleSkill from './SingleSkill';

const frontendSkills = [
    { skill: "HTML", icon: <FaHtml5 color="#e34c26" size={60} /> },
    { skill: "CSS", icon: <FaCss3Alt color="#264de4" size={60} /> },
    { skill: "JavaScript", icon: <IoLogoJavascript color="#f0db4f" size={60} /> },
    { skill: "TypeScript", icon: <SiTypescript color="#3178c6" size={60} /> },
    { skill: "ReactJS", icon: <FaReact color="#61dafb" size={60} /> },
    { skill: "Redux", icon: <SiRedux color="#764abc" size={60} /> },
    { skill: "NextJS", icon: <SiNextdotjs color="black" size={60} /> },
    { skill: "TailwindCSS", icon: <RiTailwindCssFill color="#38bdf8" size={60} /> },
];

const backendSkills = [
    { skill: "Node.js", icon: <SiNodedotjs color="#68a063" size={60} /> },
    { skill: "Express", icon: <SiExpress color="#000" size={60} /> },
    { skill: "MongoDB", icon: <SiMongodb color="#47A248" size={60} /> },
    { skill: "Git", icon: <SiGit color="#f1502f" size={60} /> },
    { skill: "Docker", icon: <SiDocker color="#2496ed" size={60} /> },
    { skill: "MySQL", icon: <SiMysql color="#4479A1" size={60} /> },
    { skill: "PostgreSQL", icon: <SiPostgresql color="#336791" size={60} /> },
    { skill: "Redis", icon: <SiRedis color="#DC382D" size={60} /> },
];

const AllSkills = () => {
    return (
        <div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 max-w-[1200px] mx-auto mb-10">
                {frontendSkills.map((item, index) => (
                    <SingleSkill key={index} text={item.skill} imgSvg={item.icon} />
                ))}
            </div>

           
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 max-w-[1200px] mx-auto mb-10">
                {backendSkills.map((item, index) => (
                    <SingleSkill key={index} text={item.skill} imgSvg={item.icon} />
                ))}
            </div>
        </div>
    );
};

export default AllSkills;
