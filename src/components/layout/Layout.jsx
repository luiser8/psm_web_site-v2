import React from "react";
import ScrollToTop from "../common/ScrollToTop";
import ScrollUp from "../common/ScrollUp";
import Principal from "../../pages/principal/Principal";
import Testimonials from "../../pages/testimonials/Testimonials";
import { ThemeProviders } from "../../utils/providers/ThemeProviders";
import News from "../../pages/noticias/News";
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
        <ScrollUp />
        <Principal />
        {/* <EventsPrincipal />
        {/* <Events /> */}
        <Carreras />
        <Saia />
        <Testimonials />
        <News />
        <Maps />
        <ScrollToTop />
      </ThemeProviders>
    </div>
  );
};

export default Layout;
