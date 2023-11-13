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
import PersonalAccidents from "../../pages/personal_accidents/PersonalAccidents";
import Culmination from "../../pages/culmination/Culmination";
import Academic from "../../pages/orientación_program/Academic";
import Vocational from "../../pages/orientación_program/Vocational";

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
      path: "/sedes/:id",
      element:<Layout/> ,
    },

    {
      path: "/institucion/planes_estudio",
      element: <Contact/>,
    },
    {
      path: "/institucion/polizas/accidentes_personales",
      element: <PersonalAccidents/>,
    },

    {
      path: "/institucion/polizas/programa_de_culminación",
      element: <Culmination/>,
    },

    {
      path: "/institucion/programas_de_orientación/academica",
      element: <Academic/>,
    },
    {
      path: "/institucion/programas_de_orientación/vocacional_psicológica",
      element: <Vocational/>,
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
