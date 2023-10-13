"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Icon from "./Icon";

const imgSrcList = [
  "blue-house.webp",
  "white-house.webp",
  "garder.webp",
  "dining.webp",
  "shower.webp",
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
    },
  }),
};

export default function Gallery() {
  return (
    <section className="mx-auto flex items-center justify-center">
      <ul className="relative grid grid-cols-2 gap-1 xl:grid-cols-[600px,368px,368px] xl:grid-rows-2">
        {imgSrcList.map((src, index) => (
          <motion.li
            className={`${
              index === 0
                ? "col-span-2 md:col-span-2 md:aspect-square xl:col-span-1 xl:row-span-2"
                : "aspect-square md:aspect-auto md:h-[298px] md:w-[368px]"
            }`}
            key={src}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <Image
              className="h-full w-full object-cover"
              src={"/" + src}
              alt={`image of ${src}`}
              width={500}
              height={500}
            />
          </motion.li>
        ))}
        <motion.button
          initial={{ y: 150, opacity: 0, scale: 0 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-8 right-8 flex items-center justify-center bg-white p-2 text-sm font-bold shadow-[0px_16px_40px_-7px_#00000005] lg:gap-4 lg:p-4"
        >
          <Icon variant="gallery.svg" />
          See All
        </motion.button>
      </ul>
    </section>
  );
}
