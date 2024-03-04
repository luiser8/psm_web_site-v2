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
import { SedesContact } from "../../pages/sedes/SedesContact";
import { PaymentsMethods } from "../../pages/payments/PaymentsMethods";
import Citein from "../../pages/citein/Citein";

export default function RoutesCustom() {
  const location = useLocation();

  return useRoutes([
    {
      path: "/",
      element: <Layout />,
    },
    {
      path: "/:id/eventos/:id",
      element: (
        <>
          <EventsDetails /> <Events />
        </>
      ),
    },
    {
      path: "/:id/eventos",
      element: <EventsAll />,
    },
    {
      path: "/:id/carrera/:id",
      element: <DetallesCarrera />,
    },
    {
      path: "/:id/saia/detalles",
      element: <SaiaDetails />,
    },
    {
      path: "/:id/noticias/:id",
      element: <NewsDetails />,
    },
    {
      path: "/:id/noticias",
      element: <NewsAll />,
    },
    {
      path: `${location.pathname.includes("sede") ? "/:id" : "/:id"}`,
      element: <SedesPage />,
    },

    {
      path: "/:id/contactos",
      element: location.pathname.includes("nacional") ? (
        <Contact />
      ) : (
        <SedesContact />
      ),
    },
    {
      path: "/:id/polizas/accidentes_personales",
      element: <PersonalAccidents />,
    },

    {
      path: "/:id/polizas/programa_de_culminación",
      element: <Culmination />,
    },

    {
      path: "/:id/programas_de_orientación/academica",
      element: <Academic />,
    },
    {
      path: "/:id/programas_de_orientación/vocacional_psicológica",
      element: <Vocational />,
    },
    {
      path: "/:id/empleo",
      element: <Employment />,
    },
    {
      path: "/:id/acerca_de",
      element: <Institucion />,
    },
    {
      path: "/:id/quienes_somos",
      element: <QuienesSomos />,
    },
    {
      path: "/:id/faq",
      element: <Faq />,
    },
    {
      path: "/:id/citein",
      element: <Citein />,
    },
    {
      path: "/:id/metodos_de_pago",
      element: location.pathname.includes("nacional") ? (
        <Layout />
      ) : (
        <PaymentsMethods />
      ),
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
