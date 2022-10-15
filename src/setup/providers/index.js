import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import { CartProvider } from "react-use-cart";
import { toast } from "react-toastify";

const AppProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CartProvider
          // onItemUpdate={() => toast.warning("Product already in cart")}
          onItemAdd={() => toast.success("Product added to cart")}
          onItemRemove={() => toast.success("Product removed from cart")}
        >
          {children}
        </CartProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default AppProviders;
