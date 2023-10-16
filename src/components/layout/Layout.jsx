import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';
import ScrollUp from '../common/ScrollUp';
import Principal from '../../pages/Principal';
import Features from '../../pages/Features';
import Brands from '../../pages/Brands';
import AboutSectionOne from '../../pages/AboutSectionOne';
import AboutSectionTwo from '../../pages/AboutSectionTwo';
import Testimonials from '../../pages/Testimonials';
import Pricing from '../../pages/Pricing';
import { ThemeProviders } from '../../utils/providers/ThemeProviders';
import Blog from '../../pages/Blog';
import Contact from '../../pages/Contact';
import Carreras from '../../pages/carreras/Carreras';
import Events from '../../pages/eventos/Events';
import EventsDetails from '../../pages/eventos/EventsDetails';
import Saia from '../../pages/saia/Saia';
import SaiaDetails from '../../pages/saia/SaiaDetails';

const Layout = () => {
  return (
    <div className="dark:bg-black">
      <ThemeProviders>
          <Header />
          <ScrollUp />
          <Principal />
          <EventsDetails />
          <Events />
          {/* <Features /> */}
          <Carreras />
          <Saia />
          <Testimonials />
          <Blog />
          <Brands />
          <AboutSectionOne />
          <AboutSectionTwo />
          <Pricing />
          <Contact />
          <Footer />
          <ScrollToTop />
      </ThemeProviders>
    </div>
  )
}

export default Layout