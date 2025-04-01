import "./Home.css"
import s from "../home/s.pdf"
function Home() {
    return (
        <div className="home">
            <div className="container  main_container">
                <h1 className="welcome mt-4 ">Hello</h1>
                {/* <div className="prefix mt-3">I AM</div> */}
                <div className="main mt-3"><span >I'm </span>Seshu babu Borusu</div>
                <p className="text-light mt-2  para">I am a passionate Full Stack Web Developer and Web Designer with a degree in Computer Science from India. With expertise in technologies like React.js, Node.js, and Express, I thrive on creating dynamic and responsive web applications.</p>

                <div className="designation my-5 d-flex ">
                    <div >
                        <a href={s} >  <button className="btn btn-outline-danger me-3 btn-sm px-3 py-1 text-white " >Resume</button></a>
                    </div>
                    <div>
                        <a href="#contact"><button className="btn btn-outline-danger btn-sm  px-2 py-1 text-white">Contact me</button></a>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Home;