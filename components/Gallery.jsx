import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import Image from "next/image";

const images = [
    "/images/gallery/1.jpeg",
    "/images/gallery/2.jpeg",
    "/images/gallery/3.jpeg",
    "/images/gallery/4.jpeg",
]

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 500 : -500,
      opacity: .2
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 1,
      x: direction < 0 ? 500 : -500,
      opacity: .2
    };
  }
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 1000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function Gallery() {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    
    <div className="h-[1000px] w-full sm:w-[540px] xl:w-4/12 relative rounded-xl text-center flex justify-center px-4 pb-3 pt-32" id="gallery">
        <Image className='rounded-3xl' src="/images/belakang5.png" layout='fill' alt="bg"/>
        <AnimatePresence initial={false} custom={direction}>
            <motion.img
              // className={classnames("min-h-[400px] min-w-[275px] ml-3 bg-cover bg-center z-10 rounded-lg",
              //     "bg-[url('" + images[imageIndex] +"')]"
              // )}
              className="img-carousel rounded-2xl mt-24 cursor-grab"
              key={page}
              src={images[imageIndex]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                  }
              }}
            />
        </AnimatePresence>
        <div className="text-3xl text-[#c904c0] font-qamila z-10 pointer-events-none">
          Gallery
        </div>
        <div className="next" onClick={() => paginate(1)}>
            {"‣"}
        </div>
        <div className="prev" onClick={() => paginate(-1)}>
            {"‣"}
        </div>
    </div>
      
  );
};
