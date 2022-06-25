import RiderSignup from "./pages/RiderSignup/RiderSignup";
import UserSignup from './pages/userSignup/UserSignup'
import LandingPage from "./pages/LandingPage/LandingPage";
import UserSignin from "./pages/UserSignin/UserSignin";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/rider-signup" element={<RiderSignup />} />
        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/user-signin" element={<UserSignin />} />
      </Routes>
    </BrowserRouter>
    
    <div>
      <Navbar />
      {/* <LandingPage /> */}
      <ForgotPassword />
      {/* <PasswordResetVerification /> */}
      <Footer />
    </div>
    </>
  );
}

export default App;
