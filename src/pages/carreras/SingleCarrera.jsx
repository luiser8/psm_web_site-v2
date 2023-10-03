import { NavLink as Link } from "react-router-dom";

const SingleCarrera = ({ carreras }) => {
  const { name, image, detail, description } = carreras;
  return (
    // <div className="w-full">
    //   <div className="wow fadeInUp" data-wow-delay=".15s">
    //   <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
    //       {name}
    //     </p>
    //     <div className="mb-10 flex h-[305px] w-[388px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
    //       <img src={`${image}`} alt="" />
    //     </div>
    //     {/* <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
    //       {detail}
    //     </h3> */}
    //     <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
    //       {description}
    //     </p>
    //   </div>
    // </div>
  //   <div class="bg-white py-24 sm:py-32">
  //   <div class="mx-auto max-w-7xl px-6 lg:px-8">
  //     <div class="mx-auto max-w-2xl lg:mx-0">
  //       <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
  //       <p class="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p>
  //     </div>
  //   </div>
  // </div>
  <Link to={`/carrera/${detail}`}>
    <div className="bg-transparent p-4 rounded-lg">
      <img className="h-56 rounded w-full object-cover object-center mb-2" src={`${image}`} alt="content" />
      {/* <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3> */}
      {/* <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{detail}</h2> */}
      <p className="leading-relaxed text-base">{name}</p>
    </div>
  </Link>
  // <a href={`/carrera/${detail}`}>

  // </a>
  );
};

export default SingleCarrera;
