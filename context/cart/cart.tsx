"use client";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CartState, TCartContext } from "./type";

export const CartContext = React.createContext<TCartContext | null>(null);

export function CartProvider({ children }: any) {
  const [cartState, setCartState] = useState<CartState>({ cartProducts: [] });

  function getTotalPrice({
    quantity,
    price,
  }: {
    quantity: number;
    price: number;
  }) {
    return quantity * price;
  }
  function setUp() {
    let cartProducts = [
      {
        product: {
          name: "T-Shirt",
          price: 20,
          description: "Finding perfect product",
          availableSize: [],
          categories: [],

          image: "/images/cloth_1.jpg",
        },
        quantity: 1,
        id: 1,
        totalPrice: 0,
      },
      {
        product: {
          name: "Shorts",
          price: 120,
          description: "Finding perfect product",
          availableSize: [],
          categories: [],

          image: "/images/cloth_2.jpg",
        },
        quantity: 1,
        id: 2,
        totalPrice: 0,
      },
    ];

    cartProducts.forEach((product) => {
      product.totalPrice = getTotalPrice({
        price: product.product.price,
        quantity: product.quantity,
      });
    });
    setCartState({
      cartProducts: cartProducts,
    });
  }
  useEffect(() => {
    setUp();
  }, []);

  useEffect(() => {
    cartState.cartProducts.forEach((product) => {
      product.totalPrice = getTotalPrice({
        price: product.product.price,
        quantity: product.quantity,
      });
    });
  }, [cartState]);

  
  return (
    <CartContext.Provider value={{ cartState, setState: setCartState }}>
      {children}
    </CartContext.Provider>
  );
}
