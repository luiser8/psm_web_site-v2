import { NavLink as Link } from "react-router-dom";

const SingleCarrera = ({ carreras }) => {
  const { name, image, detail, path, description } = carreras;

  return (
    <Link to={`${path}/carrera/${detail}`}>
      <div className="bg-transparent transition-all m-w-[300px] lg:w-auto rounded-lg border-gray-500 hover:border-orange-400  border-2 text-center flex flex-col items-center content-center justify-between">
        <img
          className="h-[500px] w-full object-cover object-center rounded-t-lg mb-5"
          src={`${image}`}
          alt="content"
        />
        {/* <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3> */}
        {/* <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{detail}</h2> */}

        <p className=" font-semibold text-lg sm:text-sm  md:leading-2 md:leading-4 md:text-sm lg:text-sm  lg:whitespace-pre-wrap lg:leading-4 xl:text-lg">
          {name}
        </p>
        <button className=" mt-1 text-blue-gray-900 mb-5 sm:text-xs md:text-xs lg:text-xs xl:text-base dark:text-white">
          Más detalles
        </button>
      </div>
    </Link>
    // <a href={`/carrera/${detail}`}>

    // </a>
  );
};

export default SingleCarrera;
