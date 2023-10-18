import SectionTitle from "../../components/common/SectionTitle";
import SingleNews from "../../components/common/SingleNews";
import blogData from "../../utils/mock/newsData";
import Maps from "../Maps";

const News = () => {
  return (
    <section id="blog" className="bg-primary/5 py-10 w-full mx-auto">
      <div className="container">
        <SectionTitle
          title="Noticias destacadas"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleNews blog={blog} />
            </div>
          ))}
        </div>
        <Maps/>
      </div>
    </section>
  );
};

export default News;
