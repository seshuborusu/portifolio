import "./About.css"
import { Typewriter } from "react-simple-typewriter"
import img from "../about/copy.jpg"
function About() {
    return (
        <div className="container abt_container py-5" id="about">
            <div className=" about"><h1>ABOUT <span style={{color:"red" }}> ME </span></h1></div>
            <div className="row h6-4 my-4">
                <div className="col-lg-4  col-md-5 col-sm-12 image d-flex  justify-content-center  ">
                    <img src={img} height={280} width={"95%"} />
                </div>
                <div className="col-lg-8 col-md-7 col-sm-12 about_text mt-2 ">
                    <div className="px-1 my-2 typewriter">
                        i'am  <Typewriter words={["Web Developer.",
                        "Web Designer.", "Photographer."
                    ]}
                    
                        loop={Infinity}
                        cursor
                        cursorStyle="|"
                        cursorColor="black"
                    

                        typeSpeed={150}
                        // deleteSpeed={150}
                        delaySpeed={1000}

                    /> 
                    </div>
                    <h6>Hi, I am a Full Stack Web Developer and Web Designer. An Open Source enthusiast and a Computer Science graduate from India.
                    </h6>

                    <h6>Familiar with frameworks and libraries like React. Comfortable working on both the front-end and back-end to deliver complete, functional web applications. Understanding of the entire development lifecycle, from concept to deployment.</h6>

                    <h6>Continuous Learning: An enthusiasm for learning new technologies and methodologies to keep my skills sharp and relevant.</h6>
                    {/* <button className="btn btn-sm btn-outline-danger mt-2 ms-3 outline-none">Resume</button> */}
                </div>
            </div>

        </div>
    )
}
export default About