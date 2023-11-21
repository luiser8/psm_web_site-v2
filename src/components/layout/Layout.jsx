import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../common/ScrollToTop";
import ScrollUp from "../common/ScrollUp";
import Principal from "../../pages/principal/Principal";
import Features from "../../pages/Features";
import Brands from "../../pages/Brands";
import AboutSectionOne from "../../pages/AboutSectionOne";
import AboutSectionTwo from "../../pages/AboutSectionTwo";
import Testimonials from "../../pages/testimonials/Testimonials";
import Pricing from "../../pages/Pricing";
import { ThemeProviders } from "../../utils/providers/ThemeProviders";
import News from "../../pages/noticias/News";
import Contact from "../../pages/contact/Contact";
import Carreras from "../../pages/carreras/Carreras";
import Events from "../../pages/eventos/Events";
import EventsDetails from "../../pages/eventos/EventsDetails";
import Saia from "../../pages/saia/Saia";
import EventsPrincipal from "../../pages/eventos/EventsPrincipal";
import Maps from "../../pages/mapa/Maps";

const Layout = () => {
  return (
    <div className="dark:bg-dark">
      <ThemeProviders>
        <Header />
        <ScrollUp />
        <Principal />
        <EventsPrincipal />
        <Events />
        {/* <Features /> */}
        <Carreras />
        <Saia />
        <Testimonials />
        <News />
        <Maps />
        {/* <Brands />
        <AboutSectionOne />
        <AboutSectionTwo />
        <Pricing /> */}
        <Footer />
        <ScrollToTop />
      </ThemeProviders>
    </div>
  );
};

export default Layout;
