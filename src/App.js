import RiderSignup from "./pages/RiderSignup/RiderSignup";
import AddCard from "./pages/AddCard/addCard";
import RiderEarnings from "./pages/RiderEarnings/riderEarnings";
import RiderHistory from "./pages/RiderHistory/riderHistory";
import RiderProfile from "./pages/RiderProfile/riderProfile";
import RiderRequest from "./pages/RiderRequest/riderRequest";
import OrderAccepted from "./pages/OrderAccepted/orderAccepted";
import PaymentOption from "./pages/PaymentOption/paymentOption";
import UserSignup from "./pages/userSignup/UserSignup";
import LandingPage from "./pages/LandingPage/LandingPage";
import UserSignin from "./pages/UserSignin/UserSignin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import PasswordResetVerification from "./pages/PasswordResetVerification/PasswordResetVerification";
import ReEnterPassword from "./pages/reEnterPassword/ReEnterPassword";
import VerifyEmail from "./pages/verifyEmail/VerifyEmail";
// import AcceptOneRequest from "./pages/AcceptOneRequest";
import AcceptOneRequest from "./pages/AcceptOneRequest";
import BiddingRequest from "./pages/BiddingRequest";
import EndTrip from "./pages/EndTrip";
import PlayGround from "./pages/PlayGround";
import CustomerDashboard from "./pages/CustomerDashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShipperRideHistory from "./pages/ShipperRideHistory";
import PayWithCash from "./pages/PayWithCash";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/rider-signup" element={<RiderSignup />} />
          <Route path="/user-signup" element={<UserSignup />} />
          <Route path="/user-signin" element={<UserSignin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/password-link"
            element={<PasswordResetVerification />}
          />
          <Route path="/user/verify" element={<VerifyEmail />} />
          <Route path="/user/reset-password" element={<ReEnterPassword />} />
          <Route path="/oneincomingrequest" element={<AcceptOneRequest />} />
          <Route path="/allincomingrequest/" element={<BiddingRequest />} />
          <Route path="/rider-earnings" element={<RiderEarnings />} />
          {/* <Route path="/test" element={<AcceptOneRequest />} /> */}
          <Route path="/rider-history" element={<RiderHistory />} />
          <Route path="/rider-profile" element={<RiderProfile />} />
          <Route path="/rider-request" element={<RiderRequest />} />
          <Route path="/order-accepted" element={<OrderAccepted />} />
          <Route path="/payment-option" element={<PaymentOption />} />
          <Route path="/add-card" element={<AddCard />} />
          <Route path="/endtrip/:id" element={<EndTrip />} />
          <Route path="/playground" element={<PlayGround />} />
          <Route path="/customerdashboard" element={<CustomerDashboard />} />
          <Route path="/shipperridehistory" element={<ShipperRideHistory />} />
          <Route path="/paywithcash" element={<PayWithCash />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
