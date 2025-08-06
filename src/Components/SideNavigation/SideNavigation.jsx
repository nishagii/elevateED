import React from 'react';
import './SideNavigation.css';
import { useCart } from '../../Context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function SideNavigation() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const navigationItems = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7faef099559d8316f3af61532ca5e0a191bc66b059c8624bea66a350e117699c",
      text: "Courses",
      path: "/courses"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1842b7d70169f6380982781ad49db6d84b67108845a28e6544a45c9556ded9f2",
      text: "Cart",
      count: cartItems.length.toString(),
      path: "/cart"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a76d9624ec56fb8518bcfc97f324f1e6658bd7283631194c21698131a84af61",
      text: "Dashboard",
      path: "/dashboard"
    }
  ];

  return (
    <nav className="sideNav">
      <div className="navContainer">
        {navigationItems.map(({ icon, text, count, path }) => (
          <div
            className="navigationItem"
            key={text}
            onClick={() => navigate(path)}
            style={{ cursor: 'pointer' }}
          >
            <img
              loading="lazy"
              src={icon}
              alt={text}
              className="navigationIcon"
            />
            <div className="navigationText">{text}</div>
            {count !== undefined && <div className="cartCount">{count}</div>}
          </div>
        ))}
      </div>
    </nav>
  );
}
