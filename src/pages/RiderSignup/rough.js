import { useState } from "react";
// import { Link } from "react-router-dom";
import Axios from "axios"
function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [phoneNum, setPhoneNum] = useState("")
  const [city, setCity] = useState("")
  const [user_type, setUserType] = useState("rider")
  const [bikeDocument, setbikeDocument] = useState("")
  const [valid_IdCard, setvalid_IdCard] = useState("")
  const [passport_photo, setpassport_photo] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
      console.log('clicked', email, password);
      Axios.post("https://dispatch-buddy.herokuapp.com/api-docs/#/auth/createuser", {
          email: email,
          password: password,
          name: name,
          phoneNum: phoneNum, 
          city : city,
          user_type: user_type,
          bikeDocument: bikeDocument,
          passport_photo: passport_photo,
          valid_IdCard: valid_IdCard
        }).then((response) => {
          console.log(response);
        });
    }
  return (
    <>
      <div className="containerSignUp">
        <h1>Create An Account</h1>
        <br />
        <p>
          Create an account to enjoy all the services
          <br /> without any ads for free!
        </p>
        <br />
        <input
          type="text"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          placeholder="email address"
        />
<br />
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          placeholder="password"
        />
        <br />
        <input
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
          placeholder="name"
        />
        <br />
        <input
          type="text"
          value={city}
          onChange={({ target }) => setCity(target.value)}
          placeholder="city"
        />
        <br />
        <input
          type="text"
          value={phoneNum}
          onChange={({ target }) => setPhoneNum(target.value)}
          placeholder="phoneNum"
        />
        <br />
        <input
          type="file"
          value={bikeDocument}
          onChange={({ target }) => setbikeDocument(target.value)}
          placeholder="bikeDocument"
        />
        <br />
        <input
          type="file"
          value={valid_IdCard}
          onChange={({ target }) => setvalid_IdCard(target.value)}
          placeholder="valid id card"
        />
        <br />
        <input
          type="file"
          value={passport_photo}
          onChange={({ target }) => setpassport_photo(target.value)}
          placeholder="passport photo"
        />
<br />
        <button type="submit" onClick={handleSubmit}>
          Create Account
        </button>
    <br />
        <p>
          Already Have An Account?
          {/* <Link style={{color: "black"}}> Login</Link> */}
        </p>
      </div>
    </>
  );
}
export default Signup;