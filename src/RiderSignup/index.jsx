import React from 'react'
import './style.css'
import img from '../assets/image 4.png'
import { Text, Input, Button} from '../components'

const RiderSignup = () => {
  return (
    <div className='container'>
        <div className='rider_left'>
            <img src={img} alt="" />
        </div>
        <div className='rider_right'>
            <div className='form_container'>
                <Text size={30} className="header_text">Sign Up as a Rider</Text>
                <form className='rider_signup_form'>
                    <div className="signup-wrapper">
                        <Text.Heading text="Name" size={16} weight={450} level={3} />
                        <Input.FullRound type="text" placeholder="Enter your name" />
                    </div>

                    <div className="signup-wrapper">
                        <Text.Heading text="Phone Number" size={16} weight={450} level={3} />
                        <Input.FullRound type='phonenumber' placeholder="Enter your phone number" />
                    </div>

                    <div className="signup-wrapper">
                        <Text.Heading text="Email Address" size={16} weight={450} level={3} />
                        <Input.FullRound type="email" placeholder="Enter your email" />
                    </div>

                    <div className="signup-wrapper">
                        <Text.Heading text="Bike documents" size={16} weight={450} level={3} />
                        <Input.FullRound type="file" placeholder="Upload" name="image_uploads" />
                    </div>

                    <div className="signup-wrapper">
                        <Text.Heading text="Valid ID Card" size={16} weight={450} level={3} />
                        <Input.FullRound type="file" placeholder="Upload" name="image_uploads" />
                    </div>

                    <div className="signup-wrapper">
                        <Text.Heading text="Passport Photo" size={16} weight={450} level={3} />
                        <Input.FullRound type="file" placeholder="Upload" name="image_uploads" />
                    </div>

                    <div className="signup-wrapper">
                        <Text.Heading text="Password" size={16} weight={450} level={3} />
                        <Input.FullRound type="password" placeholder="Enter your password" />
                    </div>

                    <div className="signup-wrapper">
                        <Text.Heading text="Confirm Password" size={16} weight={450} level={3} />
                        <Input.FullRound type="password" placeholder="Enter your password" />
                    </div>

                    <div className="signup-wrapper-google-button">
                        <Button text="Sign Up" btnType="round-secondary" stretch/>
                    </div>

                    <div className="signup-main-footer-text">
                        <Text.Heading text="Already have an account?" color="grey" size={14} weight={500} level={4} />
                        <Text.Heading text="Sign In" color="green" size={14} weight={500} level={4} />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default RiderSignup