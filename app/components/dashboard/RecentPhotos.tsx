"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import Icons from "@/app/components/common/Icons";
import Button from "@/app/components/ui/Button";
import UploadPhotosModal from "@/app/components/dashboard/UploadPhotosModal";
import { PhotoDetails } from "@/app/utils/type";

const PHOTOS_DATA: PhotoDetails[] = [
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

type PhotoItem = {
    image: string;
};

const STORAGE_KEY = "uploadedPhotos";

function loadPhotos(): PhotoItem[] {
    if (typeof window === "undefined") {
        return PHOTOS_DATA;
    }

    const savedPhotos = localStorage.getItem(STORAGE_KEY);
    if (!savedPhotos) {
        return PHOTOS_DATA;
    }

    try {
        const parsedPhotos = JSON.parse(savedPhotos) as PhotoItem[];
        return [...PHOTOS_DATA, ...parsedPhotos];
    } catch {
        return PHOTOS_DATA;
    }
}

function getUploadedOnlyPhotos(photos: PhotoItem[]) {
    return photos.slice(PHOTOS_DATA.length);
}

export default function RecentPhotos() {
    const [photos, setPhotos] = useState<PhotoItem[]>([]);
    const [uploadPhotosOpen, setUploadPhotosOpen] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setPhotos(loadPhotos());
    }, []);

    const persistUploadedPhotos = (nextPhotos: PhotoItem[]) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(getUploadedOnlyPhotos(nextPhotos)));
    };

    const handleDeletePhoto = (index: number) => {
        setPhotos((currentPhotos) => {
            const updatedPhotos = currentPhotos.filter((_, photoIndex) => photoIndex !== index);
            persistUploadedPhotos(updatedPhotos);
            return updatedPhotos;
        });
    };

    return (
        <div className="bg-white rounded-[15px] p-4 flex flex-col gap-4 sm:w-[50%] w-full h-full">
            <div className="flex items-center justify-between gap-2">
                <h2 className="text-black font-medium leading-120 text-xl -tracking-[0.64px]">
                    Recent Photos
                </h2>
                <Button
                    variant="outline"
                    className="px-5 py-1.5 text-base leading-150 -tracking-mid rounded-full flex items-center gap-2 justify-center"
                    onClick={() => setUploadPhotosOpen(true)}
                >
                    <Icons className="-ml-px" icon="greenPlusicon"/>
                    Upload
                </Button>
            </div>

            <UploadPhotosModal
                open={uploadPhotosOpen}
                onClose={() => setUploadPhotosOpen(false)}
            />

            <div className="overflow-y-auto h-60.5 scrollbar-hidden">
                {photos.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full gap-3">
                        <span className="text-4xl">📷</span>
                        <p className="text-gray-500 text-sm font-medium">No recent photos uploaded</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-4 gap-x-2 gap-y-3">
                        {photos.map((item, index) => (
                            <div className="relative overflow-hidden group" key={`${item.image}-${index}`}>
                                <Image
                                    src={item.image}
                                    width={72}
                                    height={73}
                                    alt="photo"
                                    className="object-cover rounded-sm w-full h-full aspect-square"
                                />

                                <button
                                    type="button"
                                    onClick={() => handleDeletePhoto(index)}
                                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer hover:bg-red-600"
                                    aria-label="Delete photo"
                                >
                                    <svg
                                        className="w-3 h-3"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}