import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartScreen from "./screens/CartScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import RegisterScreen from "./screens/RegisterScreen.js";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen.js";
import OrderScreen from "./screens/OrderScreen.js";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import SearchBox from "./components/SearchBox";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/login" element={<LoginScreen />} exact />
              <Route path="/register" element={<RegisterScreen />} exact />
              <Route path="/shipping" element={<ShippingScreen />} exact />
              <Route path="/payment" element={<PaymentScreen />} exact />
              <Route path="/profile" element={<ProfileScreen />} exact />
              <Route exact path="/product/:id" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/cart/:id" element={<CartScreen />} />
              <Route path="/placeorder" element={<PlaceOrderScreen />} exact />
              <Route path="/order/:id" element={<OrderScreen />} exact />
              <Route path="/search/:keyword" element={<HomeScreen />} exact />
              <Route path="/page/:pageNumber" element={<HomeScreen />} exact />
              {/* <Route path="/products/top" element={<HomeScreen />} exact /> */}

              <Route
                path="/search/:keyWord/page/:pageNumber"
                element={<HomeScreen />}
                exact
              />

              <Route
                path="/admin/orderlist"
                element={<OrderListScreen />}
                exact
              />
              <Route path="/admin/userlist" element={<UserListScreen />} />
              <Route
                path="/admin/productlist"
                element={<ProductListScreen exact />}
              />
              <Route
                path="/admin/productlist/:pageNumber"
                element={<ProductListScreen exact />}
              />
              <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
              <Route
                path="/admin/product/:id/edit"
                element={<ProductEditScreen />}
              />

              <Route path="/" element={<HomeScreen />} exact />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
};
export default App;
