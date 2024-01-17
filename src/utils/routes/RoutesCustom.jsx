import React, { useEffect } from "react";
import { Navigate, useLocation, useRoutes } from "react-router-dom";
import Error from "../../components/Errors/Error";
import DetallesCarrera from "../../pages/carreras/DetallesCarrera";
import Layout from "../../components/layout/Layout";
import SaiaDetails from "../../pages/saia/SaiaDetails";
import NewsDetails from "../../pages/noticias/NewsDetails";
import NewsAll from "../../pages/noticias/NewsAll";
import Contact from "../../pages/contact/Contact";
import Employment from "../../pages/empleo/Employment";
import EventsAll from "../../pages/eventos/EventsAll";
import EventsDetails from "../../pages/eventos/EventsDetails";
import Events from "../../pages/eventos/Events";
import PersonalAccidents from "../../pages/personal_accidents/PersonalAccidents";
import Culmination from "../../pages/culmination/Culmination";
import Academic from "../../pages/orientación_program/Academic";
import Vocational from "../../pages/orientación_program/Vocational";
import SedesPage from "../../pages/sedes/SedesPage";
import QuienesSomos from "../../pages/about/QuienesSomos";
import Institucion from "../../pages/about/Institucion";
import Faq from "../../pages/faq/Faq";

export default function RoutesCustom() {
  const location = useLocation();

  return useRoutes([
    {
      path: "/",
      element: <Layout />,
    },
    {
      path: "/eventos/:id",
      element: (
        <>
          <EventsDetails /> <Events />
        </>
      ),
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
      path: `${location.pathname.includes("sede") ? "/sedes/:id" : "/extension/:id"}`,
      element: <SedesPage />,
    },

    {
      path: "/institucion/planes_estudio",
      element: <Contact />,
    },
    {
      path: "/institucion/polizas/accidentes_personales",
      element: <PersonalAccidents />,
    },

    {
      path: "/institucion/polizas/programa_de_culminación",
      element: <Culmination />,
    },

    {
      path: "/institucion/programas_de_orientación/academica",
      element: <Academic />,
    },
    {
      path: "/institucion/programas_de_orientación/vocacional_psicológica",
      element: <Vocational />,
    },
    {
      path: "/institucion/empleo",
      element: <Employment />,
    },
    {
      path: "/institucion/acerca_de",
      element: <Institucion />,
    },
    {
      path: "/institucion/quienes_somos",
      element: <QuienesSomos />,
    },
    {
      path: "/institucion/faq",
      element: <Faq />,
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
