import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ childern }) {
  return (
    <>
      <Header />
      {childern}
      <Footer />
    </>
  );
}

export default Layout;
