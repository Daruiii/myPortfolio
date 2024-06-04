import { ComponentPropsWithoutRef } from "react";

export const AlpineIcon = (props: ComponentPropsWithoutRef<"svg"> & { size?: number }) => {
    return (
<svg 
    width={props.size}
    height={props.size}
    viewBox="0 0 256 118"
    version="1.1" 
    preserveAspectRatio="xMidYMid"
    {...props}
>
    <g>
				<polygon fill="#77C1D2" points="199.111112 0 256 56.6393762 199.111112 113.278752 142.222222 56.6393762"></polygon>
				<polygon fill="#2D3441" points="56.8888888 0 174.826667 117.420507 61.0488889 117.420507 0 56.6393762"></polygon>
    </g>
</svg>
    );
}