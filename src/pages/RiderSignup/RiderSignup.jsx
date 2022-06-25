import {React} from "react";
import logo from "./images/logo.svg";
import "./ridersignup.css";
import LeftImage from "../../components/LeftImage";
// import DropdownMenu from "../../components/DropdownMenu";
// import { useNavigate } from "react-router-dom";
import Axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useFormik} from 'formik';
import { basicSchema } from "../../schemas";


const onSubmit = (values, actions) => {
      Axios.post("https://dispatch-buddy.herokuapp.com/api-docs/#/auth/createuser", {
          email: values.email,
          password: values.password,
          name: values.name,
          phoneNum: values.phonenumber, 
          city : values.city,
          usertype: values.usertype,
          bikedocument: values.bikedocument,
          passportphoto: values.passportphoto,
          valididcard: values.valididcard
        }).then((response) => {
                  actions.resetForm();
                  console.log(response);
                  if(response.status === 200){
                    toast('You Have Successfully Registered!', {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      });
                      <ToastContainer />
                  }
                });
}

const RiderSignup = () => {
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  // const [name, setName] = useState("")
  // const [phoneNum, setPhoneNum] = useState("")
  // const [city, setCity] = useState("")
  // const [user_type, setUserType] = useState("rider")
  // const [bikeDocument, setbikeDocument] = useState("")
  // const [valid_IdCard, setvalid_IdCard] = useState("")
  // const [passport_photo, setpassport_photo] = useState("")
  //   const onSubmit = (e) => {
  //       e.preventDefault()
  //     Axios.post("https://dispatch-buddy.herokuapp.com/api-docs/#/auth/createuser", {
  //         email: email,
  //         password: password,
  //         name: name,
  //         phoneNum: phoneNum, 
  //         city : city,
  //         user_type: user_type,
  //         bikeDocument: bikeDocument,
  //         passport_photo: passport_photo,
  //         valid_IdCard: valid_IdCard
  //       }).then((response) => {
  //         console.log(response);
  //         if(response.status === 200){
  //           toast('You Have Successfully Registered!', {
  //             position: "top-right",
  //             autoClose: 5000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             });
  //             <ToastContainer />
  //         }
  //       });
  //   }
    const {
      values,
      errors,
      touched,
      // isSubmitting,
      handleBlur,
      handleChange,
      handleSubmit,
    } = useFormik({
      initialValues:{
        email:'',
        password: '',
        name: '',
        phonenumber: '',
        city : '',
        usertype: '',
        bikedocument: '',
        passportphoto: '',
        valididcard: '',
      },
      validationSchema:basicSchema,
      onSubmit,
    })
  
  console.log(errors)

  return (
    <div className="rider-signup">
      <LeftImage />
      <section className="right-signup">
        <div className="logo-group2">
          <img src={logo} alt="" className="logo" />
          <h2 className="logo-text">
            Dispatch <br />
            Buddy
          </h2>
        </div>
        <h2 className="right-header">Sign Up as a Rider</h2>

        <form className="form" onSubmit={handleSubmit} >
          <label htmlFfor="name">Name</label>
          <input
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name && touched.name ? "input-error" : ""}
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
          />
          {errors.name && touched.name && <small className="error">{errors.name}</small>}

          <br />
          <label htmlFor="phonenumber">Phonenumber</label>
          <input
            value={values.phonenumber}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.phonenumber && touched.phonenumber ? "input-error" : ""}
            type="number"
            id="phonenumber"
            name="phonenumber"
            placeholder="Enter your phone number"
          />
          {errors.phonenumber && touched.phonenumber && <small className="error">{errors.phonenumber}</small>}

          <br />
          <label for="email">Email</label>
          <input
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email ? "input-error" : ""}
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
          {errors.email && touched.email && <small className="error">{errors.email}</small>}

          <br />
          {/* <label for="city">City</label> <br />
          <DropdownMenu  
          onClick={onChange}
          id="city" 
          className="city" /> */}

          <label for="email">City</label>
          <input
            value={values.city}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.city && touched.city ? "input-error" : ""}
            type="text"
            id="city"
            name="city"
            placeholder="Enter your city"
          />
          {errors.city && touched.city && <small className="error">{errors.city}</small>}


          <label for="user_type">User_type</label>
          <input
            value={values.usertype}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.usertype && touched.usertype ? "input-error" : ""}
            type="text"
            id="usertype"
            name="usertype"
            placeholder="Enter user type"
          />
          {errors.usertype && touched.usertype && <small className="error">{errors.usertype}</small>}


          <label>Bike Documents</label>
          {/* <div className="file2"> */}
            <input
            onChange={handleChange}
            value={values.bikedocument}
            onBlur={handleBlur}
            className={errors.bikedocument && touched.bikedocument ? "input-error" : ""}
            id="bikedocument" 
            name="bikedocument"
            type="file" />
            {errors.bikedocument && touched.bikedocument && <small className="error">{errors.bikedocument}</small>}
            {/* <label className="inputTag" for="file-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="12"
                viewBox="0 0 20 15"
                fill="none"
              >
                <path
                  d="M16.4382 4.71336C15.8272 3.30937 14.7727 2.14444 13.4363 1.39709C12.0999 0.649741 10.5553 0.361196 9.03917 0.575673C7.52308 0.790151 6.11913 1.49582 5.04246 2.58454C3.96579 3.67326 3.27579 5.08498 3.0782 6.60336C2.12479 6.83169 1.28842 7.4022 0.727938 8.20655C0.167455 9.01091 -0.0781151 9.99309 0.0378645 10.9666C0.153844 11.9401 0.623295 12.8371 1.35707 13.4872C2.09084 14.1374 3.03783 14.4954 4.0182 14.4934C4.28342 14.4934 4.53777 14.388 4.72531 14.2005C4.91284 14.0129 5.0182 13.7586 5.0182 13.4934C5.0182 13.2281 4.91284 12.9738 4.72531 12.7863C4.53777 12.5987 4.28342 12.4934 4.0182 12.4934C3.48777 12.4934 2.97906 12.2826 2.60399 11.9076C2.22891 11.5325 2.0182 11.0238 2.0182 10.4934C2.0182 9.96293 2.22891 9.45422 2.60399 9.07915C2.97906 8.70408 3.48777 8.49336 4.0182 8.49336C4.28342 8.49336 4.53777 8.38801 4.72531 8.20047C4.91284 8.01293 5.0182 7.75858 5.0182 7.49336C5.02076 6.31064 5.44249 5.16712 6.20847 4.26595C6.97445 3.36478 8.03509 2.76432 9.20195 2.57124C10.3688 2.37816 11.5663 2.60497 12.5818 3.21137C13.5972 3.81778 14.3648 4.7645 14.7482 5.88336C14.8054 6.0552 14.9081 6.2083 15.0455 6.3263C15.1829 6.4443 15.3497 6.52278 15.5282 6.55336C16.1943 6.67924 16.7981 7.02697 17.2412 7.5399C17.6844 8.05283 17.9408 8.70072 17.9686 9.37801C17.9964 10.0553 17.7941 10.722 17.3945 11.2696C16.9949 11.8172 16.4217 12.2133 15.7682 12.3934C15.5109 12.4597 15.2906 12.6255 15.1555 12.8542C15.0205 13.083 14.9819 13.3561 15.0482 13.6134C15.1145 13.8706 15.2803 14.091 15.5091 14.226C15.7379 14.3611 16.0109 14.3997 16.2682 14.3334C17.3206 14.0553 18.2535 13.4414 18.9252 12.5848C19.5969 11.7283 19.9708 10.676 19.99 9.58763C20.0093 8.49929 19.6728 7.43441 19.0318 6.55468C18.3907 5.67496 17.4801 5.02846 16.4382 4.71336ZM10.7282 6.78336C10.6331 6.69232 10.521 6.62096 10.3982 6.57336C10.1547 6.47335 9.88166 6.47335 9.6382 6.57336C9.51545 6.62096 9.4033 6.69232 9.3082 6.78336L6.3082 9.78336C6.1199 9.97167 6.01411 10.2271 6.01411 10.4934C6.01411 10.7597 6.1199 11.0151 6.3082 11.2034C6.4965 11.3917 6.7519 11.4975 7.0182 11.4975C7.2845 11.4975 7.5399 11.3917 7.7282 11.2034L9.0182 9.90336V15.4934C9.0182 15.7586 9.12356 16.0129 9.31109 16.2005C9.49863 16.388 9.75298 16.4934 10.0182 16.4934C10.2834 16.4934 10.5378 16.388 10.7253 16.2005C10.9128 16.0129 11.0182 15.7586 11.0182 15.4934V9.90336L12.3082 11.2034C12.4012 11.2971 12.5118 11.3715 12.6336 11.4223C12.7555 11.473 12.8862 11.4992 13.0182 11.4992C13.1502 11.4992 13.2809 11.473 13.4028 11.4223C13.5246 11.3715 13.6352 11.2971 13.7282 11.2034C13.8219 11.1104 13.8963 10.9998 13.9471 10.8779C13.9979 10.7561 14.024 10.6254 14.024 10.4934C14.024 10.3614 13.9979 10.2306 13.9471 10.1088C13.8963 9.98693 13.8219 9.87633 13.7282 9.78336L10.7282 6.78336Z"
                  fill="#012A4A"
                />
              </svg>
              <span>Upload</span>
            </label> 
          // </div> 


          
          {/* <div className="file2"> */}
            <label>Valid ID Card</label>
            <input 
            onChange={handleChange}
            value={values.valididcard}
            onBlur={handleBlur}
            className={errors.valididcard && touched.valididcard ? "input-error" : ""}
            id="valididcard" 
            name="valididcard"
            type="file" />
            {errors.valididcard && touched.valididcard && <small className="error">{errors.valididcard}</small>}
            {/* <label className="inputTag" for="file-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="12"
                viewBox="0 0 20 15"
                fill="none"
              >
                <path
                  d="M16.4382 4.71336C15.8272 3.30937 14.7727 2.14444 13.4363 1.39709C12.0999 0.649741 10.5553 0.361196 9.03917 0.575673C7.52308 0.790151 6.11913 1.49582 5.04246 2.58454C3.96579 3.67326 3.27579 5.08498 3.0782 6.60336C2.12479 6.83169 1.28842 7.4022 0.727938 8.20655C0.167455 9.01091 -0.0781151 9.99309 0.0378645 10.9666C0.153844 11.9401 0.623295 12.8371 1.35707 13.4872C2.09084 14.1374 3.03783 14.4954 4.0182 14.4934C4.28342 14.4934 4.53777 14.388 4.72531 14.2005C4.91284 14.0129 5.0182 13.7586 5.0182 13.4934C5.0182 13.2281 4.91284 12.9738 4.72531 12.7863C4.53777 12.5987 4.28342 12.4934 4.0182 12.4934C3.48777 12.4934 2.97906 12.2826 2.60399 11.9076C2.22891 11.5325 2.0182 11.0238 2.0182 10.4934C2.0182 9.96293 2.22891 9.45422 2.60399 9.07915C2.97906 8.70408 3.48777 8.49336 4.0182 8.49336C4.28342 8.49336 4.53777 8.38801 4.72531 8.20047C4.91284 8.01293 5.0182 7.75858 5.0182 7.49336C5.02076 6.31064 5.44249 5.16712 6.20847 4.26595C6.97445 3.36478 8.03509 2.76432 9.20195 2.57124C10.3688 2.37816 11.5663 2.60497 12.5818 3.21137C13.5972 3.81778 14.3648 4.7645 14.7482 5.88336C14.8054 6.0552 14.9081 6.2083 15.0455 6.3263C15.1829 6.4443 15.3497 6.52278 15.5282 6.55336C16.1943 6.67924 16.7981 7.02697 17.2412 7.5399C17.6844 8.05283 17.9408 8.70072 17.9686 9.37801C17.9964 10.0553 17.7941 10.722 17.3945 11.2696C16.9949 11.8172 16.4217 12.2133 15.7682 12.3934C15.5109 12.4597 15.2906 12.6255 15.1555 12.8542C15.0205 13.083 14.9819 13.3561 15.0482 13.6134C15.1145 13.8706 15.2803 14.091 15.5091 14.226C15.7379 14.3611 16.0109 14.3997 16.2682 14.3334C17.3206 14.0553 18.2535 13.4414 18.9252 12.5848C19.5969 11.7283 19.9708 10.676 19.99 9.58763C20.0093 8.49929 19.6728 7.43441 19.0318 6.55468C18.3907 5.67496 17.4801 5.02846 16.4382 4.71336ZM10.7282 6.78336C10.6331 6.69232 10.521 6.62096 10.3982 6.57336C10.1547 6.47335 9.88166 6.47335 9.6382 6.57336C9.51545 6.62096 9.4033 6.69232 9.3082 6.78336L6.3082 9.78336C6.1199 9.97167 6.01411 10.2271 6.01411 10.4934C6.01411 10.7597 6.1199 11.0151 6.3082 11.2034C6.4965 11.3917 6.7519 11.4975 7.0182 11.4975C7.2845 11.4975 7.5399 11.3917 7.7282 11.2034L9.0182 9.90336V15.4934C9.0182 15.7586 9.12356 16.0129 9.31109 16.2005C9.49863 16.388 9.75298 16.4934 10.0182 16.4934C10.2834 16.4934 10.5378 16.388 10.7253 16.2005C10.9128 16.0129 11.0182 15.7586 11.0182 15.4934V9.90336L12.3082 11.2034C12.4012 11.2971 12.5118 11.3715 12.6336 11.4223C12.7555 11.473 12.8862 11.4992 13.0182 11.4992C13.1502 11.4992 13.2809 11.473 13.4028 11.4223C13.5246 11.3715 13.6352 11.2971 13.7282 11.2034C13.8219 11.1104 13.8963 10.9998 13.9471 10.8779C13.9979 10.7561 14.024 10.6254 14.024 10.4934C14.024 10.3614 13.9979 10.2306 13.9471 10.1088C13.8963 9.98693 13.8219 9.87633 13.7282 9.78336L10.7282 6.78336Z"
                  fill="#012A4A"
                />
              </svg>
              <span>Upload</span>
            </label> */}
          {/* </div> */}


          <label>Passport Photo</label>
          {/* <div className="file2"> */}
            <input 
            onChange={handleChange}
            value={values.passportphoto}
            onBlur={handleBlur}
            className={errors.passportphoto && touched.passportphoto ? "input-error" : ""}
            id="passportphoto" 
            name="passportphoto"
            type="file" />
            {errors.passportphoto && touched.passportphoto && <small className="error">{errors.passportphoto}</small>}
            <br />
            {/* <label className="inputTag" for="file-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="12"
                viewBox="0 0 20 15"
                fill="none"
              >
                <path
                  d="M16.4382 4.71336C15.8272 3.30937 14.7727 2.14444 13.4363 1.39709C12.0999 0.649741 10.5553 0.361196 9.03917 0.575673C7.52308 0.790151 6.11913 1.49582 5.04246 2.58454C3.96579 3.67326 3.27579 5.08498 3.0782 6.60336C2.12479 6.83169 1.28842 7.4022 0.727938 8.20655C0.167455 9.01091 -0.0781151 9.99309 0.0378645 10.9666C0.153844 11.9401 0.623295 12.8371 1.35707 13.4872C2.09084 14.1374 3.03783 14.4954 4.0182 14.4934C4.28342 14.4934 4.53777 14.388 4.72531 14.2005C4.91284 14.0129 5.0182 13.7586 5.0182 13.4934C5.0182 13.2281 4.91284 12.9738 4.72531 12.7863C4.53777 12.5987 4.28342 12.4934 4.0182 12.4934C3.48777 12.4934 2.97906 12.2826 2.60399 11.9076C2.22891 11.5325 2.0182 11.0238 2.0182 10.4934C2.0182 9.96293 2.22891 9.45422 2.60399 9.07915C2.97906 8.70408 3.48777 8.49336 4.0182 8.49336C4.28342 8.49336 4.53777 8.38801 4.72531 8.20047C4.91284 8.01293 5.0182 7.75858 5.0182 7.49336C5.02076 6.31064 5.44249 5.16712 6.20847 4.26595C6.97445 3.36478 8.03509 2.76432 9.20195 2.57124C10.3688 2.37816 11.5663 2.60497 12.5818 3.21137C13.5972 3.81778 14.3648 4.7645 14.7482 5.88336C14.8054 6.0552 14.9081 6.2083 15.0455 6.3263C15.1829 6.4443 15.3497 6.52278 15.5282 6.55336C16.1943 6.67924 16.7981 7.02697 17.2412 7.5399C17.6844 8.05283 17.9408 8.70072 17.9686 9.37801C17.9964 10.0553 17.7941 10.722 17.3945 11.2696C16.9949 11.8172 16.4217 12.2133 15.7682 12.3934C15.5109 12.4597 15.2906 12.6255 15.1555 12.8542C15.0205 13.083 14.9819 13.3561 15.0482 13.6134C15.1145 13.8706 15.2803 14.091 15.5091 14.226C15.7379 14.3611 16.0109 14.3997 16.2682 14.3334C17.3206 14.0553 18.2535 13.4414 18.9252 12.5848C19.5969 11.7283 19.9708 10.676 19.99 9.58763C20.0093 8.49929 19.6728 7.43441 19.0318 6.55468C18.3907 5.67496 17.4801 5.02846 16.4382 4.71336ZM10.7282 6.78336C10.6331 6.69232 10.521 6.62096 10.3982 6.57336C10.1547 6.47335 9.88166 6.47335 9.6382 6.57336C9.51545 6.62096 9.4033 6.69232 9.3082 6.78336L6.3082 9.78336C6.1199 9.97167 6.01411 10.2271 6.01411 10.4934C6.01411 10.7597 6.1199 11.0151 6.3082 11.2034C6.4965 11.3917 6.7519 11.4975 7.0182 11.4975C7.2845 11.4975 7.5399 11.3917 7.7282 11.2034L9.0182 9.90336V15.4934C9.0182 15.7586 9.12356 16.0129 9.31109 16.2005C9.49863 16.388 9.75298 16.4934 10.0182 16.4934C10.2834 16.4934 10.5378 16.388 10.7253 16.2005C10.9128 16.0129 11.0182 15.7586 11.0182 15.4934V9.90336L12.3082 11.2034C12.4012 11.2971 12.5118 11.3715 12.6336 11.4223C12.7555 11.473 12.8862 11.4992 13.0182 11.4992C13.1502 11.4992 13.2809 11.473 13.4028 11.4223C13.5246 11.3715 13.6352 11.2971 13.7282 11.2034C13.8219 11.1104 13.8963 10.9998 13.9471 10.8779C13.9979 10.7561 14.024 10.6254 14.024 10.4934C14.024 10.3614 13.9979 10.2306 13.9471 10.1088C13.8963 9.98693 13.8219 9.87633 13.7282 9.78336L10.7282 6.78336Z"
                  fill="#012A4A"
                />
              </svg>
              <span>Upload</span>
            </label> */}
          {/* </div> */}


          <label for="password">Password</label>
          <input
            onChange={handleChange}
            value={values.password}
            onBlur={handleBlur}
            className={errors.password && touched.password ? "input-error" : ""}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
          {errors.password && touched.password && <small className="error">{errors.password}</small>}
          <br />
          
          <button
            className="rider-signup-btn" 
            type="submit" 
            value="Submit">
            Signup
          </button>
          <p>
            Already have an account?<span> Sign In</span>
          </p>
        </form>
      </section>
    </div>
  );
};


const styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.href =
    "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
  document.head.appendChild(styleLink);

  export default RiderSignup;


