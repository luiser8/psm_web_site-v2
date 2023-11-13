import { NavLink as Link } from "react-router-dom";
import SectionTitle from "../../components/common/SectionTitle";
import SingleNews from "../../components/common/SingleNews";
import newsData from "../../utils/mock/newsData";
import Maps from "../../components/Mapa/Maps";

const News = () => {
  return (
    <section id="blog" className="bg-white/5 py-10 w-full mx-auto mt-20">
      <div className="container">
        <SectionTitle
          title="Noticias destacadas"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {newsData
            .filter((x) => x.principal === true)
            .map((blog) => (
              <div key={blog.id} className="w-full">
                <SingleNews blog={blog} />
              </div>
            ))}
        </div>
        <span className="w-full flex flex-row justify-end mt-5">
          <Link
            to={"/noticias"}
            className={
              "font-semibold text-lg md:text-xl hover:text-primary transition-all ease-linear"
            }
          >
            Ver más noticias
          </Link>
        </span>
        <Maps />
      </div>
    </section>
  );
};

export default News;
