import SectionTitle from "../../components/common/SectionTitle";
import SingleTestimonial from "../../components/common/SingleTestimonial";

const SedesTestimonials = ({data}) => {
  return (
    <>
      {data?.active ? (
        <section className="relative z-0 bg-white dark:bg-black py-10">
          <div className="container">
            <SectionTitle title="Testimonios" center />

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {data?.testimonios_data.map((testimonial) => (
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

export default SedesTestimonials;
