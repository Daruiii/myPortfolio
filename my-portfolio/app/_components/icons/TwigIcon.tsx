import { ComponentPropsWithoutRef, ComponentType } from "react";
import Image from "next/image";

type ImageProps = Omit<ComponentPropsWithoutRef<typeof Image>, 'src' | 'alt'>;

interface ESGIIconProps extends ImageProps {
  size?: number;
}

export const TwigIcon = ({ size = 40, ...props }: ESGIIconProps) => {
  return (
    <Image 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8IX7Y_6pHJR-CSKGif7wRISvEScSzjbD3vQ&s" 
      alt="TwigIcon"
      width={size} 
      height={size} 
      {...props} 
    />
  );
};