import { ComponentPropsWithoutRef, ComponentType } from "react";
import Image from "next/image";

type ImageProps = Omit<ComponentPropsWithoutRef<typeof Image>, 'src' | 'alt'>;

interface ESGIIconProps extends ImageProps {
  size?: number;
}

export const ESGIicon = ({ size = 40, ...props }: ESGIIconProps) => {
  return (
    <Image 
      src="https://www.esgi.fr/ecole-informatique/logo_esgi.png" 
      alt="ESGI" 
      width={size} 
      height={size} 
      {...props} 
    />
  );
};