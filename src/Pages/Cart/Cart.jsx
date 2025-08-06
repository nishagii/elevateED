import React from 'react';
import Header from '../../Components/Header/Header';
import SideNavigation from '../../Components/SideNavigation/SideNavigation';
import { useCart } from '../../Context/CartContext';
import { useEnrollment } from '../../Context/EnrollmentContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Cart.css';

export default function Cart() {
  const { enrollInCourse } = useEnrollment();
  const { cartItems, removeFromCart } = useCart();

  const handleEnroll = (course) => {
    enrollInCourse(course);
    removeFromCart(course);
    toast.success(`🎉 Successfully enrolled in ${course.title}! Happy Learning ! `, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      style: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '16px',
        padding: '16px',
        minWidth: '400px'
      },
    });
  };


  return (
    <main className="all">
      <Header />
      <div className="contentContainer">
        <SideNavigation />
        <div className="cartContent">
          <h2>Shopping Cart ({cartItems.length} items)</h2>
          <div className="cartItems">
            {cartItems.map((item, index) => (
              <div key={index} className="cartItem">
                <img src={item.image} alt={item.title} />
                <div className="cartItemDetails">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p className="price">{item.price}</p>
                  <div className="cartItemButtons">
                    <button
                      className="enrollButton"
                      onClick={() => handleEnroll(item)}
                    >
                      Enroll Now
                    </button>
                    <button
                      className="removeButton"
                      onClick={() => removeFromCart(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ToastContainer />
        </div>
      </div>
    </main>
  );
}
