import RiderSignup from "./RiderSignup";
import LandingPage from "./pages/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/rider-signup" element={<RiderSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
