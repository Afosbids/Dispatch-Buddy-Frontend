import RiderSignup from "./pages/RiderSignup/RiderSignup";
import RiderEarnings from "./pages/RiderEarnings/riderEarnings";
import RiderHistory from "./pages/RiderHistory/riderHistory";
// import RiderProfile from "./pages/RiderProfile/riderProfile";
import UserSignup from './pages/userSignup/UserSignup'
import LandingPage from "./pages/LandingPage/LandingPage";
import UserSignin from "./pages/UserSignin/UserSignin";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Navbar from "./components/Navbar/Navbar";
// import AuthNavbar from "./components/AuthNavbar/index";

import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import PasswordResetVerification from "./pages/PasswordResetVerification/PasswordResetVerification";
import ReEnterPassword from "./pages/reEnterPassword/ReEnterPassword";
import VerifyEmail from "./pages/verifyEmail/VerifyEmail";
import AcceptOneRequest from "./pages/AcceptOneRequest";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/rider-signup" element={<RiderSignup />} />
        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/user-signin" element={<UserSignin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password-link" element={<PasswordResetVerification />} />
        <Route path="/user/verify" element={<VerifyEmail />} />
        <Route path="/user/reset-password" element={<ReEnterPassword />} />
        <Route path="/rider-earnings" element={<RiderEarnings />} />
        <Route path="/rider-history" element={<RiderHistory />} />
        {/* <Route path="/rider-profile" element={<RiderProfile />} /> */}
        <Route path="/test" element={<AcceptOneRequest />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
    </>
  );
}

export default App;
