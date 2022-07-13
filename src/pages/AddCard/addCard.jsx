import "./addCard.css";
import AuthNavbar2 from "../../components/AuthNavbar2/authNavbar2";
import Card from "./images/Card.png";
import arrow from "./images/arrow.svg";


const AddCard = () => {
    return (
        <>
        <AuthNavbar2 />
        <div className="card-body-container">
        <div className="card-wrapped-header">
            <div className="add-card-header">
                <div className="add-card-arrow">
                    <img src={arrow} alt=""/>
                    <p>Back</p>
                </div>
                <div className="card-center-header">
                    <h3>Add a Card</h3>
                </div>
            </div>
            <br/>
            <hr className="add-card-line"/>
            <br/>
            <div className="request-form-wrapper">
                <img src={Card} alt=""/>
                <div className="add-card-desc">
                    <p><strong>No Card added yet</strong><br/>
                    <span>You've not added a card yet</span></p>
                </div>
                {/* <br/> */}
                <button type="submit" className="add-card-btn">Add Card</button>
            </div>
            
        </div>
    </div>

</> 
    );
}
export default AddCard;