import React from "react";
import SectionTitle from "../../components/common/SectionTitle";
import { useParams } from "react-router-dom";
import sedesData from "../../utils/mock/principalData/sedesData";

export const PaymentsMethods = () => {
  const sedeURL = useParams();
  const getDataSedesExtensiones = sedesData.find((x) => x.link === sedeURL.id);
  const payments = getDataSedesExtensiones.data.payments;
  return (
    <>
      <div className="bg-white py-20 w-full h-auto mt-20 flex justify-between items-center flex-col ">
        <div className="mb-10">
          <SectionTitle title={"Métodos de pago"} />
        </div>
        <div className="mt-10 border-b-2 border-gray-100 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-x-20 w-[85%]">
          <section>
            <span className="px-4 sm:px-0">
              <h3 className="text-base lg:text-2xl font-semibold leading-7 text-gray-900 mb-5">
                Pago Movil
              </h3>
            </span>

            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm lg:text-xl  font-medium leading-6 text-gray-900">
                  Banco
                </dt>
                <dd className="mt-1 text-sm lg:text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {payments?.banco}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm lg:text-xl font-medium leading-6 text-gray-900">
                  Número de cédula
                </dt>
                <dd className="mt-1 text-sm lg:text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {payments?.cedula}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm lg:text-xl font-medium leading-6 text-gray-900">
                  Teléfono
                </dt>
                <dd className="mt-1 text-sm lg:text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {payments?.telefono}
                </dd>
              </div>
            </dl>
          </section>

          <section>
            <span className="px-4 sm:px-0">
              <h3 className="text-base lg:text-2xl font-semibold leading-7 text-gray-900 mb-5">
                Transferencia Bancaria
              </h3>
            </span>
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm lg:text-xl font-medium leading-6 text-gray-900">
                  Nombre del titular
                </dt>
                <dd className="mt-1 text-sm lg:text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {payments?.titular}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm lg:text-xl font-medium leading-6 text-gray-900">
                  Número de cuenta
                </dt>
                <dd className="mt-1 text-sm lg:text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {payments?.numero_de_cuenta}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm lg:text-xl font-medium leading-6 text-gray-900">
                  Cédula
                </dt>
                <dd className="mt-1 text-sm lg:text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {payments?.cedula}
                </dd>
              </div>
            </dl>
          </section>

          <section>
            <span className="px-4 sm:px-0">
              <h3 className="text-base lg:text-2xl font-semibold leading-7 text-gray-900 mb-5">
                Depósito
              </h3>
            </span>

            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm lg:text-xl  font-medium leading-6 text-gray-900">
                  Banco
                </dt>
                <dd className="mt-1 text-sm lg:text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {payments?.banco}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm lg:text-xl font-medium leading-6 text-gray-900">
                  Número de cédula
                </dt>
                <dd className="mt-1 text-sm lg:text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {payments?.cedula}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm lg:text-xl font-medium leading-6 text-gray-900">
                  Teléfono
                </dt>
                <dd className="mt-1 text-sm lg:text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {payments?.telefono}
                </dd>
              </div>
            </dl>
          </section>

          <section>
            <span className="px-4 sm:px-0">
              <h3 className="text-base lg:text-2xl font-semibold leading-7 text-gray-900 mb-5">
                Puntos de venta
              </h3>
            </span>
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm lg:text-xl font-medium leading-6 text-gray-900">
                  Nombre del titular
                </dt>
                <dd className="mt-1 text-sm lg:text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {payments?.titular}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm lg:text-xl font-medium leading-6 text-gray-900">
                  Número de cuenta
                </dt>
                <dd className="mt-1 text-sm lg:text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {payments?.numero_de_cuenta}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm lg:text-xl font-medium leading-6 text-gray-900">
                  Cédula
                </dt>
                <dd className="mt-1 text-sm lg:text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {payments?.cedula}
                </dd>
              </div>
            </dl>
          </section>
        </div>
      </div>
    </>
  );
};
