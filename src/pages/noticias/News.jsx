import { NavLink as Link } from "react-router-dom";
import SectionTitle from "../../components/common/SectionTitle";
import SingleNews from "../../components/common/SingleNews";
import newsData from "../../utils/mock/principalData/newsData";

const News = () => {
  return (
    <section id="blog" className="bg-white/5 xl:py-10 w-full mx-auto">
      <div className="container">
        <SectionTitle
          title="Noticias destacadas"
          paragraph=""
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {newsData.noticias_data
            .filter((x) => x.principal === true)
            .map((blog) => (
              <div key={blog.id} className="w-full">
                <SingleNews blog={blog} detail={newsData.path} />
              </div>
            ))}
        </div>
        <span className="w-full flex flex-row justify-end mt-5">
          <Link
            to={newsData.path}
            className={
              "font-semibold text-lg md:text-xl hover:text-primary transition-all ease-linear"
            }
          >
            Ver más noticias
          </Link>
        </span>
      </div>
    </section>
  );
};

export default News;
