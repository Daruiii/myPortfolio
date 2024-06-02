// sert a définir une largeur max
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export const Section = (props: PropsWithChildren<{ className?: string }>) => {
    return <section className={cn("max-w-4xl mx-auto px-4", props.className)}>
        {props.children}
        </section>
}