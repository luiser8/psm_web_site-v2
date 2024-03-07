import sedeBarcelonaData from "../sedesExtensionesData/sedeBarcelonaData";
import extensionMaracaiboData from "../sedesExtensionesData/extensionMaracaiboData";
import extensionCabimasData from "../sedesExtensionesData/extensionCabimasData";
import extensionciudadOjedaData from "../sedesExtensionesData/extensionCiudadOjedaData"
import extensionBarinasdata from "../sedesExtensionesData/extensionBarinasData"
import extensionSanCristobalData from "../sedesExtensionesData/extensionSanCristobalData"
import extensionValenciaData from "../sedesExtensionesData/extensionValenciaData"
import extensionMaracayData from "../sedesExtensionesData/extensionMaracayData"
import extensionMaturinData from "../sedesExtensionesData/extensionMaturinData"
import extensionPuertoOrdazData from "../sedesExtensionesData/extensionPuertoOrdazData"
import extensionPorlamarData from "../sedesExtensionesData/extensionPorlamarData"
import extensionMeridaData from "../sedesExtensionesData/extensionMeridaData"
import extensionCaracasData from "../sedesExtensionesData/extensionCaracasData"
import eventosData from "./eventosData";

export default [
    {
      id: 1,
      name: "Sede Principal Barcelona",
      link: "barcelona",
      data: sedeBarcelonaData,
    },
    {
      id: 2,
      name: "Extensión Valencia",
      link: "valencia",
      data:extensionValenciaData
    },
    {
      id: 3,
      name: "Extensión Cabimas",
      link: "cabimas",
      data: extensionCabimasData,
    },
    {
      id: 4,
      name: "Extensión Maracaibo",
      link: "maracaibo",
      data: extensionMaracaiboData,
    },
    {
      id: 5,
      name: "Extensión Caracas",
      link: "caracas",
      data:extensionCaracasData
    },
    {
      id: 6,
      name: "Extensión Merida",
      link: "merida",
      data:extensionMeridaData
    },
    {
      id: 7,
      name: "Extensión San Cristóbal",
      link: "san_cristobal",
      data:extensionSanCristobalData
    },
    {
      id: 8,
      name: "Extensión Barinas",
      link: "barinas",
      data:extensionBarinasdata
    },
    {
      id: 9,
      name: "Extensión Maracay",
      link: "maracay",
      data:extensionMaracayData
    },
    {
      id: 10,
      name: "Extensión Porlamar",
      link: "porlamar",
      data:extensionPorlamarData
    },
    {
      id: 11,
      name: "Extensión Puerto Ordaz",
      link: "puerto_ordaz",
      data:extensionPuertoOrdazData
    },
    {
      id: 12,
      name: "Extensión Maturin",
      link: "maturin",
      data:extensionMaturinData
    },
    {
      id: 13,
      name: "Extensión Ciudad Ojeda",
      link: "ciudad_ojeda",
      data: extensionciudadOjedaData
    },
    {
      id: 14,
      name: "Nacional",
      link: "nacional",
      data:eventosData
    },
];
