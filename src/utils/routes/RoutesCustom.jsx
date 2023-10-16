import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Error from "../../components/Errors/Error";
import DetallesCarrera from "../../pages/carreras/DetallesCarrera";
import Layout from "../../components/layout/Layout";
import SaiaDetails from "../../pages/saia/SaiaDetails";

export default function RoutesCustom() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
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
      element: <Layout />,
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
