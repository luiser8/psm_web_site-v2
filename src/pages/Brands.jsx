const brandsData = [
  {
    id: 1,
    name: "",
    href: "",
    image: "/images/banners/inscripciones.jpg",
  }
];

const Brands = () => {
  return (
    <section className="pt-10">
      <div className="relative z-0 h-auto sm:h-full mb-10 mt-0">
        <div className="">
          <div className="w-full h-full">
            <div
              className="flex flex-wrap items-center justify-center rounded-md"
              data-wow-delay=".1s
              "
            >
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="mx-0 flex w-full items-center justify-center">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-full w-full transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
      >
        <img src={image} alt={name} />
      </a>
    </div>
  );
};
