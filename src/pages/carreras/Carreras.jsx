import SectionTitle from "../../components/common/SectionTitle";
import carrerasData from "../../utils/mock/carrerasData";
import SingleCarrera from "./SingleCarrera";

const Carreras = () => {

  return (
    <>
      {carrerasData.active ?
        <section
          id="carreras"
          className="bg-primary/[.03] py-16 md:py-20"
        >
          <div className="container">
            <SectionTitle
              title="Carreras"
              paragraph=""
              center
            />
            <div className="grid grid-cols-1 gap-x-8 gap-y-0 md:grid-cols-2 lg:grid-cols-3">
              {carrerasData.data.map((carrera) => (
                <SingleCarrera key={carrera.id} carreras={carrera} />
              ))}
            </div>
          </div>
        </section>
        : <></>
      }
    </>
  );
};

export default Carreras;
