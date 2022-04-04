import React from "react";
import { Footer } from "../app/components/footer"
import { Header } from "../app/components/header";
import { Navbar } from "../app/components/navbar";
import { Route } from "react-router-dom";

export const PublicPage = ({ Component, ...restProps }) => {
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <>
            <Header />
            {/* <Navbar /> */}
            <Component {...propsRoute} />

            <Footer />
          </>
        );
      }}
    />
  );
};
