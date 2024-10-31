import "./Contact.css"
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { useState } from "react";
import Usersdata from "../usersdata/Usersdata";
import { Link } from "react-router-dom";
import Action from "../reduxstore/action";
import { useDispatch } from "react-redux";


function Contact() {
    let [userdata, setUserdata] = useState([
        {
            name: "",
            mobile: "",
            email: ""
        }
    ])
    let [userslist, setuserslist] = useState([])

    var dispatch = useDispatch()
    const getUsers = (e) => {
        setUserdata({ ...userdata, [e.target.name]: e.target.value })
    }
    const getUsersData = () => {
        if (userdata.name !== '' && userdata.mobile !== '' && userdata.email !== '') {
            // setuserslist([...userslist, userdata])
            // const updatedlist=[...userslist,userdata];
            setuserslist([...userslist, userdata])
            dispatch(Action(userdata))
        }
        else {
            alert("Please enter all details")
        }
        setUserdata({

            name: "",
            mobile: "",
            email: ""
        })

    }


    

    return (
        <div className="bg-dark text-white " id="contact">
            <div className="container py-4">
                <div className="contact"><h1>CONTACT</h1></div>

                <div className="row">
                    <div className="col-lg-6 col-sm-12 col-md-6 subcontact p-2" >
                        <h6 >Collaborate with <span style={{color:"white"}}>me</span></h6>
                        <div className="  border p-2">

                            <input type="text" placeholder="Name" className="form-control my-2 p-1" value={userdata.name} name="name" required onChange={getUsers} />
                            <input type="number" placeholder="Mobile Number" className="form-control p-1" name="mobile" value={userdata.mobile} onChange={getUsers} />
                            <input type="email" placeholder="Email" className="form-control my-2 p-1" name="email" value={userdata.email} required onChange={getUsers} />
                            <textarea name="mesaage" placeholder="Message" rows={3} className="form-control p-1"></textarea>
                            <div className="  d-flex justify-content-center">
                                <button className="btn btn-sm border-danger text-dark button px-3 py-1 mt-2  fw-semibold" onClick={getUsersData}>Submit</button>
                                {/* <textarea name="message" rows={3} cols={"100%"}></textarea> */}
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-6 text-center p-3 mt-3 d-flex flex-column align-items-center justify-content-center">
                        <div className="contactsub-2"><h2> Lets's Connect Digitally</h2></div>
                        <div className="contact-logos">
                           <a href="https://www.instagram.com/seshu.borusu/?igsh=MTJoaWxndDJrNHI5Mw%3D%3D&utm_source=qr" className="contact-logos text-white"> <FaInstagramSquare className="social" /></a>
                           <a href="https://www.linkedin.com/in/seshubabuborusu/" className="contact-logos"><FaLinkedin className="social" ></FaLinkedin></a> 
                           <a href="https://github.com/seshuborusu" className="contact-logos"><FaGithubSquare className="social" /></a>

                        </div>
                        {/* <Link to={"/g"}>  <button>mydata</button></Link> */}
                     
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact