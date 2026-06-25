import { ComponentPropsWithoutRef } from "react";
import Image from "next/image";

type ImageProps = Omit<ComponentPropsWithoutRef<typeof Image>, "src" | "alt">;

interface TwigIconProps extends ImageProps {
  size?: number;
}

export const TwigIcon = ({ size = 40, style, ...props }: TwigIconProps) => (
  <Image
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8IX7Y_6pHJR-CSKGif7wRISvEScSzjbD3vQ&s"
    alt="Twig"
    width={size}
    height={size}
    style={{ width: size, height: size, ...style }}
    {...props}
  />
);
