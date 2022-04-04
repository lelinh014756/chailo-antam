import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Header } from "./app/components/header";
import { Navbar } from "./app/components/navbar";
import { Footer } from "./app/components/footer";
import Products from "./app/page/products/product";
import Home from "./app/page/home";
import ProductDetail from "./app/page/productDetail/productDetail";
import { Contact } from "./app/page/contact";
import ScrollToTop from "./app/page/utils/ScrollToTop";
import NotFound from "./app/page/notFound/NotFound";
import LoginPage from "./app/page/login/login";
import Form from "./app/page/common/form";
import "./styles/_reset.scss";
import "./styles/_variable.scss";
import "./styles/_common.scss";
import { PublicPage } from "./HOC/publicPage";
import AdminLogin from "../src/app/page/admin/admin-page/adminLogin"
import Admin from "./app/page/admin";
function App() {
  return (
    <React.Fragment>
      <ScrollToTop />
      <Header />
      <Navbar />
      <Switch>
        {/* Trang Public */}
        <PublicPage path="/" exact Component={Home} />
        <PublicPage path="/san-pham/:id" exact Component={ProductDetail} />
        <PublicPage path="/form" exact Component={Form} />
        <PublicPage path="/lien-he" exact Component={Contact} />
        <PublicPage path="/dang-nhap" exact Component={LoginPage} />
        <PublicPage path="/san-pham" Component={Products} />

        {/* Trang admin */}
        <PublicPage path="/admin/dang-nhap" component={AdminLogin} />
        <PublicPage path="/admin" component={Admin} />


        {/* Nếu tất cả các path trên không đủng nhảy vào not found page */}
        <Route path="*" component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
