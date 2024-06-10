import { ComponentPropsWithoutRef } from "react";

export const LitElementIcon = (props: ComponentPropsWithoutRef<"svg"> & { size?: number }) => {
    return (
<svg 
    width={props.size}
    height={props.size}
    viewBox="0 0 768 960"
    version="1.1" 
    preserveAspectRatio="xMidYMid"
    {...props}
>
<path d="M192 576l96-288 432 432-144 240-192-192h-96" fill="#00e8ff"/><path d="M384 768V384l192-192v384m-480 0h96l96 192-96 192L0 768z" fill="#283198" fill-rule="evenodd"/><path d="M192 576V192L384 0v384m192 576V576l192-192v384M0 768V384l192 192" fill="#324fff"/><path d="M192 960V576l192 192" fill="#0ff"/></svg>
    );
}