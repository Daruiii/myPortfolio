import { ComponentPropsWithoutRef } from "react";

export const ThreeJSIcon = (props: ComponentPropsWithoutRef<"svg"> & { size?: number }) => {
    return (
<svg 
    width={props.size}
    height={props.size}
    viewBox="0 0 256 259"
    version="1.1" 
    preserveAspectRatio="xMidYMid"
    {...props}
>
<g>
        <path d="M0.0870894703,3.58491767 C-0.445865301,1.42734685 1.55522924,-0.4988131 3.69089875,0.116059507 L3.69089875,0.116059507 L65.9202231,18.0320789 C66.4773462,18.0300954 67.0282365,18.1888093 67.4989026,18.4868689 L190.228501,53.8212267 C190.737275,53.8317447 191.238236,53.9758437 191.674834,54.2372048 L253.908836,72.155368 C256.046957,72.7709464 256.715812,75.4709734 255.112285,77.0134385 L255.112285,77.0134385 L67.3123337,257.662036 C65.7094151,259.203916 63.0384397,258.432052 62.5050756,256.272824 L62.5050756,256.272824 L31.3526494,130.158635 C31.3109591,130.029159 31.2782623,129.896872 31.2548328,129.762881 Z M53.393,195.295 L66.9129449,250.028113 L107.627,210.863 L53.393,195.295 Z M95.3305845,152.0108 L55.9121955,190.006429 L108.424307,205.081905 L95.3305845,152.0108 Z M101.182,151.605 L114.234,204.508 L153.545,166.694 L101.182,151.605 Z M38.112,133.431 L51.221,186.504 L90.593,148.554 L38.112,133.431 Z M141.816,107.153 L101.765,145.759 L155.138493,161.139573 L141.816,107.153 Z M147.428,105.78 L160.75,159.764 L200.911,121.133 L147.428,105.78 Z M79.847,89.239 L39.7100677,127.878773 L93.181,143.286 L79.847,89.239 Z M85.43771,87.7815037 L98.5314328,140.851164 L137.949822,102.855535 L85.43771,87.7815037 Z M22.384,69.759 L35.71,123.71 L75.818,85.098 L22.384,69.759 Z M188.575513,62.2686051 L149.157124,100.264234 L201.669236,115.33971 L188.575513,62.2686051 Z M194.209,60.979 L207.489,114.805 L247.496543,76.3214268 L194.209,60.979 Z M126.349636,44.4732752 L87.108,82.25 L139.373,97.253 L126.349636,44.4732752 Z M131.95,43.054 L145.062,96.188 L184.492,58.181 L131.95,43.054 Z M64.3375331,26.480059 L24.9191442,64.4756882 L77.431256,79.5511637 L64.3375331,26.480059 Z M69.976,25.211 L83.037,78.148 L122.36,40.293 L69.976,25.211 Z M6.89415059,7.04963876 L20.217,60.985 L60.239,22.408 L6.89415059,7.04963876 Z" fill="#000000" fill-rule="nonzero"></path>
    </g>
</svg>
    );
}