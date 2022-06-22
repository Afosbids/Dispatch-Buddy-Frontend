import LandingPage from "./pages/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import PasswordResetVerification from "./pages/PasswordResetVerification/PasswordResetVerification";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div>
      <Navbar />
      {/* <LandingPage /> */}
      <ForgotPassword />
      {/* <PasswordResetVerification /> */}
      <Footer />
    </div>
  );
}

export default App;
