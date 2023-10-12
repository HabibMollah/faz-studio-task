import Image from "next/image";

const imgSrcList = [
  "blue-house.webp",
  "white-house.webp",
  "garder.webp",
  "dining.webp",
  "shower.webp",
];

export default function Gallary() {
  return (
    <section>
      <ul className="grid grid-cols-[600px,368px,368px] grid-rows-2 gap-1">
        {imgSrcList.map((src, index) => (
          <li
            className={`${
              index === 0 ? "row-span-2" : "h-full max-h-[300px] w-full"
            }`}
            key={src}
          >
            <Image
              className="h-full w-full object-cover"
              src={"/" + src}
              alt={`image of ${src}`}
              width={500}
              height={500}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
