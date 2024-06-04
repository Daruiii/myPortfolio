import { ComponentPropsWithoutRef, ComponentType } from "react";
import Image from "next/image";

type ImageProps = Omit<ComponentPropsWithoutRef<typeof Image>, 'src' | 'alt'>;

interface ESGIIconProps extends ImageProps {
  size?: number;
}

export const PandaScoreIcon = ({ size = 40, ...props }: ESGIIconProps) => {
  return (
    <Image 
      src="https://asset.brandfetch.io/idvHNWkW1x/idNGPJJzmC.jpeg" 
      alt="PandaScoreApi"
      width={size} 
      height={size} 
      {...props} 
    />
  );
};