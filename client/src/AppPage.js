import React, { useEffect } from "react";
import Home from "./pages/HomePage/Home";
import Sites from "./pages/SitesHomePage/Sites";
import WaveBorder from "./pages/CleanlinessPage/WaveBorder";
import Footer from "./pages/FooterHomePage/Footer";

const AppPage = (props) => {
  return (
    <div>
      <Home />
      <WaveBorder lowerColor=" #253237" />
      <Sites />
      <Footer />
    </div>
  );
};

export default AppPage;
