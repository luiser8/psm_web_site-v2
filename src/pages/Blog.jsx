import SectionTitle from "../components/common/SectionTitle";
import SingleBlog from "../components/common/SingleBlog";
import blogData from "../utils/mock/blogData";

const Blog = () => {
  return (
    <section id="blog" className="bg-primary/5 py-14 md:py-16 lg:py-20 w-[95%] mx-auto border-red-500 border-2">
      <div className="container">
        <SectionTitle
          title="Noticias destacadas"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
