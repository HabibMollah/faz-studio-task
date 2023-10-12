import Image from "next/image";

type Props = {
  variant:
    | "chevron-right.svg"
    | "copy.svg"
    | "cross.svg"
    | "edit.svg"
    | "gallery.svg";
  className?: string;
};

export default function Icon({ variant, className }: Props) {
  return (
    <Image
      className={className}
      src={`/${variant}`}
      alt={`${variant} icon`}
      width={20}
      height={20}
    />
  );
}
