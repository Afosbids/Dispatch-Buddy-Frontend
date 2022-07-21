import AuthNavbar from "../../components/AuthNavbar";
import "./riderProfile.css";
import Path from "./images/Path.png";




const RiderProfile = () => {
    return (
        <>
            <AuthNavbar />
            <div className="overall-container">
                <h1>Profile Settings</h1>
                <div className="profile-container">
                    <div className="wrapper">
                        <form className="form-cont">
                            <h5>BASIC INFORMATION</h5>
                            <p>Only you can view and edit your information</p>
                            <label>First Name</label>
                            <br/>
                            <br/>
                            <div>
                                <input className="icon" type="text" placeholder="Matthew" />
                                <img src={Path} alt="" className="Path-img"/>
                            </div>
                            <br/>
                            <label>Last Name</label>
                            <br/>
                            <br/>
                            <div>
                                <input className="icon" type="text" placeholder="Akintayo" />
                                <img src={Path} alt="" className="Path-img"/>
                            </div>
                            <br/>
                            <label>Phone</label>
                            <br/>
                            <br/>
                            <div>
                                <input className="icon" type="phone" placeholder="07089667755" />
                                <img src={Path} alt="" className="Path-img"/>
                            </div>
                            <br/>
                            <label>Email</label>
                            <br/>
                            <br/>
                            <div>
                                <input className="icon" type="email" placeholder="matthewakin@gmail.com" />
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