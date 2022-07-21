import { React } from "react";
import logo from "./images/logo.svg";
import "./ridersignup.css";
import LeftImage from "../../components/LeftImage";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas";
import { Link } from "react-router-dom";

const onSubmit =  (values, actions) => {
  let formData = new FormData();
  formData.append("name", values.name);
  formData.append("email", values.email);
  formData.append("phoneNum", values.phonenumber);
  formData.append("password", values.password);
  formData.append("city", values.city);
  formData.append("bikeDocument", values.bikedocument);
  formData.append("passport_photo", values.passportphoto);
  formData.append("valid_IdCard", values.valididcard);
  formData.append("user_type", "rider");

  Axios.post(
    "https://dispatch-buddy-api.herokuapp.com/api/v1/auth/user/create",
    formData
  ).then((response) => {
    actions.resetForm();
    
    console.log(response);
    if (response.status === 201) {
      toast(response.data.msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      <>
        <ToastContainer />
        <Link to="/user-signin" />
      </>;
    }
  });
};

const RiderSignup = () => {
  const {
    values,
    errors,
    touched,
    // isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      phonenumber: "",
      city: "",
      bikedocument: "",
      passportphoto: "",
      valididcard: "",
      user_type: "rider",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(values);

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

        <form className="form" onSubmit={handleSubmit}>
          <label htmlFfor="name">Name</label>
          <div className="input-wrapper">
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
          </div>
          {errors.name && touched.name && (
            <div className="error">{errors.name}</div>
          )}

          <label htmlFor="phonenumber">Phonenumber</label>
          <div className="input-wrapper">
            <input
              value={values.phonenumber}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.phonenumber && touched.phonenumber ? "input-error" : ""
              }
              type="text"
              id="phonenumber"
              name="phonenumber"
              placeholder="Enter your phone number"
            />
          </div>
          {errors.phonenumber && touched.phonenumber && (
            <div className="error">{errors.phonenumber}</div>
          )}

          <label for="email">Email</label>
          <div className="input-wrapper">
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
          </div>
          {errors.email && touched.email && (
            <div className="error">{errors.email}</div>
          )}

          <label for="email">City</label>
          <div className="input-wrapper">
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
          </div>
          {errors.city && touched.city && (
            <div className="error">{errors.city}</div>
          )}

          <label>Bike Documents</label>
          <div className="document-wrapper">
            Upload
            <input
              onChange={(event) => {
                setFieldValue("bikedocument", event.currentTarget.files[0]);
              }}
              value={undefined}
              onBlur={handleBlur}
              className={
                errors.bikedocument && touched.bikedocument ? "input-error" : ""
              }
              id="bikedocument"
              name="bikedocument"
              type="file"
            />
          </div>
          {errors.bikedocument && touched.bikedocument && (
            <div className="error">{errors.bikedocument}</div>
          )}

          <label>Valid ID Card</label>
          <div className="document-wrapper">
            Upload
            <input
              onChange={(event) => {
                setFieldValue("valididcard", event.currentTarget.files[0]);
              }}
              value={undefined}
              onBlur={handleBlur}
              className={
                errors.valididcard && touched.valididcard ? "input-error" : ""
              }
              id="valididcard"
              name="valididcard"
              type="file"
            />
          </div>
          {errors.valididcard && touched.valididcard && (
            <div className="error">{errors.valididcard}</div>
          )}

          <label>Passport Photo</label>
          <div className="document-wrapper">
            Upload
            <input
              onChange={(event) => {
                setFieldValue("passportphoto", event.currentTarget.files[0]);
              }}
              value={undefined}
              onBlur={handleBlur}
              className={
                errors.passportphoto && touched.passportphoto
                  ? "input-error"
                  : ""
              }
              id="passportphoto"
              name="passportphoto"
              type="file"
            />
          </div>
          {errors.passportphoto && touched.passportphoto && (
            <div className="error">{errors.passportphoto}</div>
          )}

          <label for="password">Password</label>
          <div className="input-wrapper">
            <input
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
              className={
                errors.password && touched.password ? "input-error" : ""
              }
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          {errors.password && touched.password && (
            <div className="error">{errors.password}</div>
          )}

          <button className="rider-signup-btn" type="submit" value="Submit">
            Signup
          </button>
          <div className="right-signup-footer">
            <p>
              Already have an account?
              <span>
                {" "}
                <Link
                  className="link-to-signin"
                  to="/user-Signin"
                  variant="body2"
                >
                  {" "}
                  Sign In
                </Link>
              </span>
            </p>
          </div>
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
