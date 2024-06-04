import { ComponentPropsWithoutRef } from "react";

export const EmailIcon = (props: ComponentPropsWithoutRef<"svg"> & { size?: number }) => {
    return (
<svg 
    fill="currentColor"
    width={props.size}
    height={props.size}
    viewBox="0 0 1920 1920"
    version="1.1" 
    preserveAspectRatio="xMidYMid"
    {...props}
>
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z" fill-rule="evenodd"></path> </g>
</svg>
    );
}