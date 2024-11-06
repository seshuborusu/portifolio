import "./Skills.css"
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {FaGit} from "react-icons/fa";


function Skills() {
    return (
        <div className="container p-3 ">
            <div className="skill"><h1>SKILLS</h1></div>
            <div className="row my-3 row-gap-4">
                <div className="col-lg-4 col-sm-12 col-md-6">
                    <div className="skill-container">
                        <h3>Web Design</h3>
                        <p>I love designs and it's the first step before creating any website as I can give layout to my imagination.</p>
                    </div>

                </div>
                <div className="col-lg-4  col-md-6 col-sm-12 ">
                    <div className="skill-container">
                        <h3>Web Development</h3>
                        <p>I am a Full Stack Web Developer (MERN) and have quite some experience in it as well.</p>
                    </div>

                </div>
                <div className="col-lg-4 col-sm-12 col-md-6">
                    <div className="skill-container">
                        <h3>Photographer</h3>
                        <p>I am passionate about capturing moments. Each project I undertake is an opportunity to explore new ideas.</p>
                    </div>

                </div>
            </div>

            <div className="familier my-5">
                <h6>I AM FAMILIER WITH</h6>
            </div>

            <div className="row row-gap-2   text-center">
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 html-icon">
                    <FaHtml5 /> <span>HTML</span>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 html-icon text-primary">
                    <FaCss3Alt /> <span>CSS</span>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 html-icon text-primary">
                    <FaBootstrap /> <span>Bootstrap</span>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 html-icon ">
                    <RiJavascriptFill /> <span>Javascript</span>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 html-icon text-info">
                    <FaReact /> <span>React JS</span>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 html-icon text-success ">
                    <SiMongodb /><span>Mongo DB</span>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 html-icon text-success">
                    <FaNodeJs /> <span>Node JS</span>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 html-icon text-dark">
                    <SiExpress /> <span>Express JS</span>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 html-icon ">
                <FaGit/> <span>Git</span> 
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 html-icon text-dark">
                    <FaGithub /> <span>Github</span>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 html-icon text-primary">
                    <VscVscode /> <span>VS code</span> 
                </div>
            </div>
        </div>
    )
}
export default Skills