import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignUp from "./Pages/LoginSignUp";
import Footer from "./Components/Footer/Footer";
const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={<Shop />}
					/>
					<Route
						path="/men"
						            element={<ShopCategory category="men" />}
					/>
					<Route
						path="/women"
						element={<ShopCategory category="women" />}
					/>
					<Route
						path="/kids"
						element={<ShopCategory category="kids" />}
					/>
					<Route
						path="/product"
						element={<Product />}
					>
						<Route
							path=":productId"
							element={<Product />}
						/>
					</Route>
					<Route
						path="/cart"
						element={<Cart />}
					/>
					<Route
						path="/login"
						element={<LoginSignUp />}
					/>
				</Routes>
				<Footer/>
			</BrowserRouter>
		</div>
	);
};

export default App;