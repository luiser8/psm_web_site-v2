import {
  Carousel,
  Typography,
  Button,
  CarouselProps,
} from "@material-tailwind/react";
import { useState } from "react";
import ModalVideo from "../layout/ModalVideo";

export function CarouselWithContent({ data }) {
  const [link, setLink] = useState(null);
  const [open, setOpen] = useState(false);

  const handleModal = (link) => {
    if (link === "") {
      setOpen(false);
    } else {
      setOpen(true);
      setLink(link);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setLink(null);
  };

  console.log(data)
  return (
    <>
      <Carousel autoplay loop>
        {data.map(({ url, iframe, titleLink }, index) => (
          <div className="h-full w-full" key={index}>
            <img
              src={url}
              alt="image 1"
              className={`h-full w-full object-fill object-center ${
                iframe ? "cursor-pointer" : ""
              }`}
              title={iframe ? titleLink : ""}
              onClick={() => {
                handleModal(iframe);
              }}
            />
            {/* <div className="absolute grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div> */}
          </div>
        ))}
      </Carousel>
      <ModalVideo open={open} handleClose={handleClose} link={link} />
    </>
  );
}
