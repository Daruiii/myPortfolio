import { ComponentPropsWithoutRef } from "react";

export const ESGIicon = (props: ComponentPropsWithoutRef<"img"> & { size?: number }) => {
    return(
    <img src="https://www.esgi.fr/ecole-informatique/logo_esgi.png" alt="ESGI" width={props.size}  {...props} />
    );
}