import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (course) => {
        setCartItems([...cartItems, course]);
    };

    const removeFromCart = (courseToRemove) => {
        setCartItems(cartItems.filter(item => item.title !== courseToRemove.title));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
