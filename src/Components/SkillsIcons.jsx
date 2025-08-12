import { FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";


export const SkillsIcons = () => {
    return (
        <div className="skills">
            <div className="html">
                <FaHtml5 />
            </div>
            <div className="tiret">-</div>
            <div className="css">
                <FaCss3Alt />
            </div>
            <div className="tiret">-</div>
            <div className="js">
                <FaNodeJs />
            </div>
        </div >
    );
};