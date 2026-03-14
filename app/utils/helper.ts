import { PhotoDetails, RoadsDetails } from "./type";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const ROADS_DATA: RoadsDetails[] = [
    { name: "N Tryon St", color: "#da383a" },
    { name: "S Tryon St", color: "#da383a" },
    { name: "Independence Blvd", color: "#ffaa2a" },
    { name: "Wilkinson Blvd", color: "#227d53" },
    { name: "Freedom Dr", color: "#da383a" },
    { name: "South Blvd", color: "#227d53" },
    { name: "Central Ave", color: "#da383a" },
    { name: "Eastway Dr", color: "#ffaa2a" }
]

export const PHOTOS_DATA: PhotoDetails[] = [
    { image: "/assets/images/webp/photo1.webp" },
    { image: "/assets/images/webp/photo2.webp" },
    { image: "/assets/images/webp/photo3.webp" },
    { image: "/assets/images/webp/photo4.webp" },
    { image: "/assets/images/webp/photo5.webp" },
    { image: "/assets/images/webp/photo6.webp" },
    { image: "/assets/images/webp/photo7.webp" },
    { image: "/assets/images/webp/photo8.webp" },
    { image: "/assets/images/webp/photo9.webp" },
    { image: "/assets/images/webp/photo10.webp" },
    { image: "/assets/images/webp/photo11.webp" },
    { image: "/assets/images/webp/photo12.webp" }
];