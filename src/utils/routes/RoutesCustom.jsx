import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Error from "../../components/Errors/Error";
import DetallesCarrera from "../../pages/carreras/DetallesCarrera";
import Layout from "../../components/layout/Layout";
import SaiaDetails from "../../pages/saia/SaiaDetails";
import NewsDetails from "../../pages/noticias/NewsDetails";
import NewsAll from "../../pages/noticias/NewsAll"
import Contact from "../../pages/contact/Contact";
import Employment from "../../pages/empleo/Employment";
import EventsAll from "../../pages/eventos/EventsAll";
import EventsDetails from "../../pages/eventos/EventsDetails";
import Events from "../../pages/eventos/Events";
import About from "../../pages/About/About";

export default function RoutesCustom() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
    },
    {
      path: "/eventos/:id",
      element:<><EventsDetails /> <Events /></> ,
    },
    {
      path: "/eventos",
      element: <EventsAll />,
    },
    {
      path: "/carrera/:id",
      element: <DetallesCarrera />,
    },
    {
      path: "/saia/detalles",
      element: <SaiaDetails />,
    },
    {
      path: "/noticias/:id",
      element: <NewsDetails />,
    },
    {
      path: "/noticias",
      element: <NewsAll />,
    },

    {
      path: "/institucion/planes_estudio",
      element: <Contact/>,
    },
    {
      path: "/institucion/empleo",
      element: <Employment/>,
    },
    {
      path: "/institucion/acerca_de",
      element: <About/>,
    },
    {
      path: "/404",
      element: <Error />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
}
