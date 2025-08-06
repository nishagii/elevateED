import React from "react";
import Header from "../../Components/Header/Header";
import SideNavigation from "../../Components/SideNavigation/SideNavigation";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useCart } from "../../Context/CartContext";
import "./Course.css";

import html_img from "../../assets/images/html_img.jpg";
import css_img from "../../assets/images/css_img.jpg";
import js_img from "../../assets/images/js_img.png";
import react_img from "../../assets/images/react_img.png";
import node_img from "../../assets/images/node_img.jpg";
import python_img from "../../assets/images/python_img.png";
import sql_img from "../../assets/images/sql_img.jpg";
import django_img from "../../assets/images/django_img.jpg";

export default function SiteHome() {

    const { addToCart } = useCart();

    const courses = [
        {
            title: "HTML for Beginners",
            image: html_img,
            description: "Learn the fundamentals of web structure and markup language",
            price: "$19.99"
        },
        {
            title: "CSS Mastery",
            image: css_img,
            description: "Master styling and responsive web design techniques",
            price: "$24.99"
        },
        {
            title: "JavaScript Essentials",
            image: js_img,
            description: "Build interactive websites with modern JavaScript",
            price: "$29.99"
        },
        {
            title: "React Basics",
            image: react_img,
            description: "Create powerful single-page applications with React",
            price: "$34.99"
        },
        {
            title: "Node.js Crash Course",
            image: node_img,
            description: "Server-side JavaScript development made simple",
            price: "$39.99"
        },
        {
            title: "Python for Web Dev",
            image: python_img,
            description: "Learn Python programming for web development",
            price: "$44.99"
        },
        {
            title: "SQL & Databases",
            image: sql_img,
            description: "Master database design and management",
            price: "$49.99"
        },
        {
            title: "Django for Beginners",
            image: django_img,
            description: "Build robust web applications with Python Django",
            price: "$54.99"
        }
    ];
    ;

    return (
        <main className="all">
            <Header />
            <div className="contentContainer">
                <SideNavigation />
                <div className="mainContent">
                    <p className="welcome">Welcome to ElevatEd!</p>
                    <p className="available">Available courses</p>
                    <div className="productGrid">
                        {courses.map((course, index) => (
                            <ProductCard
                                key={index}
                                course={course}
                                onAddToCart={() => addToCart(course)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
