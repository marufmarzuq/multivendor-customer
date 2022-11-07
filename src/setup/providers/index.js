import {useState} from "react";
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
				onItemAdd={() =>
					toast.info("Product added to cart", {
						position: "bottom-right",
						autoClose: 1000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: false,
						draggable: true,
						theme: "light",
					})
				}
				onItemRemove={() =>
					toast.info("Product removed from cart", {
						position: "bottom-right",
						autoClose: 1000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: false,
						draggable: true,
						theme: "light",
					})
				}
			>
				{children}
			</CartProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default AppProviders;
