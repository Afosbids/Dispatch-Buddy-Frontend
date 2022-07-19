import * as Yup from "yup";


export const basicSchema = Yup.object().shape({
    email:Yup.string().email("please enter a valid email").required("Required!!!"),
    password: Yup.number().required("Password is required"),
    name: Yup.string().required("Name is Required!!!"),
    phonenumber: Yup.number().required("Required!!!"),
    city: Yup.string().required("Required!!!"),
    bikedocument: Yup.mixed().required('File is required'),
    valididcard: Yup.mixed().required('File is required'),
    passportphoto: Yup.mixed().required('File is required'),
});