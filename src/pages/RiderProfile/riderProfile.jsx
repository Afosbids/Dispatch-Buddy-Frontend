import React, {useState, useEffect} from "react";
import AuthNavbar from "../../components/AuthNavbar";
import "./riderProfile.css";
import Path from "./images/Path.png";
import axios from "axios";




const RiderProfile = () => {
const [data, setData] = useState([])

    const handleChange = e => {
        this.setState({ state: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();

    }
    useEffect(() => {
        axios.get(`https://dispatch-buddy-api.herokuapp.com/api/v1/rider/62c30d6db1f3ad08a6ad99c7`)
        .then(res => {
            setData(res.data)
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    console.log(data);
    return (
        <>
            <AuthNavbar />
            <div className="overall-container">
                <h1>Profile Settings</h1>
                <div className="profile-container">
                    <div className="wrapper">
                        <form className="form-cont" onSubmit={handleSubmit}>
                            <h5>BASIC INFORMATION</h5>
                            <p>Only you can view and edit your information</p>
                            <label>First Name</label>
                            <br/>
                            <br/>
                            <div>
                                <input className="icon" type="text" placeholder="Matthew" onChange={handleChange} />
                                <img src={Path} alt="" className="Path-img"/>
                            </div>
                            <br/>
                            <label>Last Name</label>
                            <br/>
                            <br/>
                            <div>
                                <input className="icon" type="text" placeholder="Akintayo" onChange={handleChange} />
                                <img src={Path} alt="" className="Path-img"/>
                            </div>
                            <br/>
                            <label>Phone</label>
                            <br/>
                            <br/>
                            <div>
                                <input className="icon" type="phone" placeholder="07089667755" onChange={handleChange} />
                                <img src={Path} alt="" className="Path-img"/>
                            </div>
                            <br/>
                            <label>Email</label>
                            <br/>
                            <br/>
                            <div>
                                <input className="icon" type="email" placeholder="matthewakin@gmail.com" onChange={handleChange} />
                                <img src={Path} alt="" className="Path-img"/>
                            </div>
                            <br/>
                        </form>
                        <button type="submit" className="rider-profile-btn">Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RiderProfile