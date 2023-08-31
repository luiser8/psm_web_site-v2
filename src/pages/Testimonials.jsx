import SectionTitle from "../components/common/SectionTitle";
import SingleTestimonial from "../components/common/SingleTestimonial";


const testimonialData = [
  {
    id: 1,
    name: "Musharof Chy",
    designation: "Founder @TailGrids",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Devid Weilium",
    designation: "Founder @UIdeck",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Lethium Frenci",
    designation: "Founder @Lineicons",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative z-10 bg-primary/[.03] py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="What Our Users Says"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
