import { NavLink as Link } from "react-router-dom";
import SectionTitle from "../../components/common/SectionTitle";
import SingleNews from "../../components/common/SingleNews";
import newsData from "../../utils/mock/newsData";

const SedesNews = () => {
  return (
    <section id="blog" className="bg-white/5 py-16 w-full mx-auto">
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
      </div>
    </section>
  );
};

export default SedesNews;
