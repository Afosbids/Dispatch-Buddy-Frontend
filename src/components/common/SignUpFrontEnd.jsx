// import React from 'react';
import "./SignUpFrontEnd.css";

const SignUpForm = (props) => {

    return (
        <div className="SignUpForm">
            {/* <label>Name</label> */}
            <input className={`input-field icon ${props.icon}`} placeholder={props.placeholder} type={props.type} onChange={e=>props.setName(e.target.value)} />
        </div>
        

    )

}

export default SignUpForm