import React from "react";
import SectionTitle from "../../components/common/SectionTitle";
import { useParams } from "react-router-dom";
import sedesData from "../../utils/mock/principalData/sedesData";

export const PaymentsMethods = () => {
  const sedeURL = useParams();
  const getDataSedesExtensiones = sedesData.find((x) => x.link === sedeURL.id);
  const metodos = getDataSedesExtensiones.data.metodos_de_pago;

  return (
    <div className="bg-white py-20 w-full h-auto mt-20 flex justify-between items-center flex-col ">
      <div className="mb-0">
        <SectionTitle title={"Métodos de pago"} />
      </div>
      {metodos.map((item, index) => (
        <div key={index} className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-0 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-12 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">{item.nombre}</h3>
              <p className="mt-6 text-base leading-7 text-gray-600 space-x-2 font-bold">{item.para.length > 0 ? "Aplica para:" : ""} {item.para.map(x => ( <p className="inline-block">{x}</p>))}</p>
              <div className="mt-6 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Datos Bancarios</h4>
                <div className="h-px flex-auto bg-gray-100"></div>
              </div>
              {item.bancos.map((banco, index) => (
                <ul key={index} role="list" className="mt-4 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                  </svg>
                  <h2 className="text-md font-bold">Banco: {banco.nombre}</h2>
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                  </svg>
                  <h2 className="text-md font-bold">A nombre de: {banco.titular}</h2>
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                  </svg>
                  <h2 className="text-md font-bold">{banco.telefono === "" ? `Nro de cuenta: ${banco.numero_de_cuenta}` : `Nro de teléfono: ${banco.telefono}`}</h2>
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                  </svg>
                  <h2 className="text-md font-bold">Rif o cédula: {banco.cedula_rif}</h2>
                </li>
              </ul>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
