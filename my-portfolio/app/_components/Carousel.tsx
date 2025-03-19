"use client";

import { ComponentPropsWithoutRef, useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type CarouselProps = ComponentPropsWithoutRef<"div"> & {
    images: string[];
    className?: string;
};

export const Carousel = ({ images, className, ...props }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            <div
                className={cn("relative overflow-hidden", className)}
                {...props}
                ref={carouselRef}
            >
                <div
                    className="flex transition-transform duration-500 w-full"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="w-full h-64 flex-shrink-0 relative">
                            <Image
                                src={image}
                                alt={`Carousel image ${index + 1}`}
                                layout="fill"
                                objectFit="contain"
                                className="rounded-sm"
                                draggable={false}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-2 space-x-2">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`h-2 w-2 rounded-full ${
                            currentIndex === index ? "bg-blue-500" : "bg-white"
                        }`}
                    />
                ))}
            </div>
        </>
    );
};
