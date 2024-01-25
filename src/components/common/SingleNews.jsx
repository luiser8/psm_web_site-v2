import { NavLink as Link } from "react-router-dom";

const SingleNews = ({ blog, detail }) => {
  const { title, image, paragraph, author, tags, publishDate,id } = blog;
  return (
    <>
      <div
        className="wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-one dark:bg-black"
        data-wow-delay=".1s"
      >
        <div className="h-full w-full">
          <img
            src={image}
            alt="image"
            className="object-cover object-center w-full h-[100%]"
          />
        </div>

        <div className="p-6 sm:p-8 md:py-4 md:px-6 lg:p-8 xl:py-4 xl:px-5 2xl:p-8">
          <Link to={`${detail}/${id}`}>
            <span
              className="inline-block rounded-full bg-grey py-2 px-4 text-sm font-semibold capitalize text-white"
            >
              {tags[0]}
            </span>
          </Link>
          <h3>
            <Link
              to={`${detail}/${id}`}
              className="mb-4 mt-5 block text-xl font-bold text-black hover:text-primary dark:text-white transition-all ease-linear sm:text-2xl dark:hover:text-primary"
            >
              {title}
            </Link>
          </h3>
          <p className="mb-4 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {paragraph}
          </p>
          <div className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <img src={author.image} alt="author" />
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  By {author.name}
                </h4>
                <p className="text-xs text-body-color">{author.designation}</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Date
              </h4>
              <p className="text-xs text-body-color">{publishDate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleNews;
