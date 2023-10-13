"use client";
import { motion } from "framer-motion";
import Image from "next/image";

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
      <ul className="grid grid-cols-2 gap-1 xl:grid-cols-[600px,368px,368px] xl:grid-rows-2">
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
      </ul>
    </section>
  );
}
