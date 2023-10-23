import footerData from "../../utils/mock/footerData";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const institution = footerData.find((x) => x.id === 1);
  // const sede = footerData.find((x) => x.id === 2);
  const poliza = footerData.find((x) => x.id === 3);
  const orientacion = footerData.find((x) => x.id === 4);
  const socialNetworks = footerData.find((x) => x.id === 5);

  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 bg-primary bg-opacity-5 pt-16 md:pt-20 lg:pt-24"
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="flex w-full p-2  flex-col justify-center items-center md:items-start md:flex-row md:justify-evenly">
            <div className="mb-5 max-w-[400px] sm:w-1/2 md:w-1/2">
              <NavLink to="/" className="mb-3 inline-block">
                <img
                  src="images/logo/logo-2.svg"
                  alt="logo"
                  className="w-full dark:hidden"
                  width={140}
                  height={30}
                />
                <img
                  src="images/logo/logo.svg"
                  alt="logo"
                  className="hidden w-full dark:block"
                  width={140}
                  height={30}
                />
              </NavLink>

              <div className="flex items-center w-full">
                <a
                  href="/"
                  aria-label="social-link"
                  className="mr-6 text-[#CED3F6] hover:text-primary"
                >
                  <svg
                    width="9"
                    height="18"
                    viewBox="0 0 9 18"
                    className="fill-current"
                  >
                    <path d="M8.13643 7H6.78036H6.29605V6.43548V4.68548V4.12097H6.78036H7.79741C8.06378 4.12097 8.28172 3.89516 8.28172 3.55645V0.564516C8.28172 0.254032 8.088 0 7.79741 0H6.02968C4.11665 0 2.78479 1.58064 2.78479 3.92339V6.37903V6.94355H2.30048H0.65382C0.314802 6.94355 0 7.25403 0 7.70564V9.7379C0 10.1331 0.266371 10.5 0.65382 10.5H2.25205H2.73636V11.0645V16.7379C2.73636 17.1331 3.00273 17.5 3.39018 17.5H5.66644C5.81174 17.5 5.93281 17.4153 6.02968 17.3024C6.12654 17.1895 6.19919 16.9919 6.19919 16.8226V11.0927V10.5282H6.70771H7.79741C8.11222 10.5282 8.35437 10.3024 8.4028 9.96371V9.93548V9.90726L8.74182 7.95968C8.76604 7.7621 8.74182 7.53629 8.59653 7.31048C8.54809 7.16935 8.33016 7.02823 8.13643 7Z" />
                  </svg>
                </a>
                <a
                  href="/"
                  aria-label="social-link"
                  className="mr-6 text-[#CED3F6] hover:text-primary"
                >
                  <svg
                    width="19"
                    height="14"
                    viewBox="0 0 19 14"
                    className="fill-current"
                  >
                    <path d="M16.3024 2.26027L17.375 1.0274C17.6855 0.693493 17.7702 0.436644 17.7984 0.308219C16.9516 0.770548 16.1613 0.924658 15.6532 0.924658H15.4556L15.3427 0.821918C14.6653 0.282534 13.8185 0 12.9153 0C10.9395 0 9.3871 1.48973 9.3871 3.21062C9.3871 3.31336 9.3871 3.46747 9.41532 3.57021L9.5 4.0839L8.90726 4.05822C5.29435 3.95548 2.33065 1.13014 1.85081 0.642123C1.06048 1.92637 1.5121 3.15925 1.99194 3.92979L2.95161 5.36815L1.42742 4.5976C1.45565 5.67637 1.90726 6.52397 2.78226 7.14041L3.54435 7.65411L2.78226 7.93665C3.2621 9.24658 4.33468 9.78596 5.125 9.99144L6.16935 10.2483L5.18145 10.8647C3.60081 11.8921 1.625 11.8151 0.75 11.738C2.52823 12.8682 4.64516 13.125 6.1129 13.125C7.21371 13.125 8.03226 13.0223 8.22984 12.9452C16.1331 11.25 16.5 4.82877 16.5 3.54452V3.36473L16.6694 3.26199C17.629 2.44007 18.0242 2.00342 18.25 1.74658C18.1653 1.77226 18.0524 1.82363 17.9395 1.84932L16.3024 2.26027Z" />
                  </svg>
                </a>
                <a
                  href="/"
                  aria-label="social-link"
                  className="mr-6 text-[#CED3F6] hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 ">
              <div className="mb-5 lg:mb-16">
                <h2 className="mb-5 text-xl font-bold text-black dark:text-white uppercase text-center md:text-start md:text-base">
                  {institution.name}
                </h2>
                {
                  <ul>
                    {institution.elements.map((item) => (
                      <li key={item.id}>
                        <a
                          href={item.link}
                          className="mb-5 inline-block text-base font-medium text-body-color hover:text-primary text-start md:text-start"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                }
              </div>
            </div>

            {/* <div className="w-full px-4 sm:w-1/2 md:w-1/2 ">
              <div className="mb-5 lg:mb-16">
                <h2 className="mb-3 md:5 text-xl font-bold text-black dark:text-white uppercase  text-start md:text-base">
                  {sede.name}
                </h2>

                <ul>
                  {sede.elements.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.link}
                        className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary text-start"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}

            <div className="w-full px-4 sm:w-1/2 md:w-1/2">
              <div className="mb-5 lg:mb-16">
                <h2 className="mb-3 md:5 text-xl font-bold text-black dark:text-white uppercase  text-start md:text-base">
                  {poliza.name}
                </h2>
                <ul>
                  {poliza.elements.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.link}
                        className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary text-start md:text-start"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2">
              <div className="mb-8 lg:mb-16">
                <h2 className="mb-3 md:5 text-xl font-bold text-black dark:text-white uppercase  text-start md:text-base">
                  {orientacion.name}
                </h2>
                {
                  <ul>
                    {orientacion.elements.map((item) => (
                      <li key={item.id}>
                        <a
                          href={item.link}
                          className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary text-start"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                }
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary/10 py-8">
          <div className="container">
            <p className="text-center text-base text-body-color dark:text-white">
              ©2023 - Politécnico Santiago Mariño.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
