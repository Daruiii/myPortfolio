import { ComponentPropsWithoutRef } from "react";

export const BladeIcon = (props: ComponentPropsWithoutRef<"svg"> & { size?: number }) => {
    return (
<svg 
    width={props.size}
    height={props.size}
    viewBox="0 0.04 399.74 691.71"
    version="1.1" 
    preserveAspectRatio="xMidYMid"
    {...props}
>
<path d="M0 462.42l133.25-77.68v307L0 617.8z" fill="#e32e27"/><path d="M0 155.4l133.25 77.68v151.66L0 462.42zm266.5 307.02l133.24 73.98-266.5 155.35V536.4l133.25-73.98z" fill="#ef382c"/><path d="M399.74 384.74V536.4L266.5 462.42z" fill="#f26c65"/><path d="M266.5 155.4l133.24 77.68-133.25 73.98V155.4z" fill="#f7a9a7"/><path d="M399.74 77.72v155.36L266.5 155.4z" fill="#f26b65"/><path d="M266.5 307.06v155.36l133.24-77.68-133.25-77.68z" fill="#f7a9a7"/><path d="M133.25 384.74l133.24 77.68V307.06l-133.25 77.68z" fill="#fbcbc8"/><path d="M266.5.04V155.4l133.24-77.68z" fill="#ef382c"/><path d="M133.25 77.72L0 155.4l133.25 77.68L266.5 155.4V.04L133.24 77.72z" fill="#e32e27"/><path d="M133.25 384.74l133.24 77.68-133.25 73.98V384.74z" fill="#fdeaea"/>
</svg>


    );
}