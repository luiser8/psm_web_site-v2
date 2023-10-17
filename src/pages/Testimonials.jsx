import SectionTitle from "../components/common/SectionTitle";
import SingleTestimonial from "../components/common/SingleTestimonial";
import testimonialData from "../../src/utils/mock/testimonialData";

const Testimonials = () => {
  return (
    <>
      {testimonialData.active ? (
        <section className="relative z-10 bg-primary/[.03] py-10">
          <div className="container">
            <SectionTitle title="Testimonios" center />

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {testimonialData.data.map((testimonial) => (
                <SingleTestimonial
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default Testimonials;
