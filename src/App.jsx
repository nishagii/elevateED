import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import SignUp from "./Pages/SignUpPage/SignUpPage";
import SiteHome from "./Pages/SiteHome/SiteHome";
import Cart from "./Pages/Cart/Cart";
import Course from "./Pages/Courses/Course";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { CartProvider } from "./Context/CartContext";
import { EnrollmentProvider } from "./Context/EnrollmentContext";
import AboutUs from "./Pages/AboutUs/AboutUs";


const AppRouter = () => {
  return (
    <EnrollmentProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<SiteHome />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/courses" element={<Course />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </Router>
      </CartProvider>
    </EnrollmentProvider>
    
   
  );
};

export default AppRouter;
