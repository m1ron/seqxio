"use client";
import React, { useState, useRef } from 'react'
import Icons from '../common/Icons'
import Button from '../ui/Button'
import { PHOTOS_DATA } from '@/app/utils/helper'
import Image from 'next/image'
import Heading from '../ui/Heading';

const RecentPhotos = () => {
  const [photos, setPhotos] = useState(() => {
    // Only runs once on client-side
    if (typeof window !== 'undefined') {
      const savedPhotos = localStorage.getItem('uploadedPhotos');
      if (savedPhotos) {
        try {
          const parsedPhotos = JSON.parse(savedPhotos);
          return [...PHOTOS_DATA, ...parsedPhotos];
        } catch {
          return PHOTOS_DATA;
        }
      }
    }
    return PHOTOS_DATA;
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileReaders: Promise<{ image: string }>[] = [];

      Array.from(files).forEach(file => {
        const reader = new FileReader();
        const promise = new Promise<{ image: string }>((resolve) => {
          reader.onloadend = () => {
            resolve({ image: reader.result as string });
          };
          reader.readAsDataURL(file);
        });
        fileReaders.push(promise);
      });

      Promise.all(fileReaders).then(newPhotos => {
        const updatedPhotos = [...photos, ...newPhotos];
        setPhotos(updatedPhotos);

        // Save only uploaded photos to localStorage (exclude PHOTOS_DATA)
        const uploadedOnly = updatedPhotos.slice(PHOTOS_DATA.length);
        localStorage.setItem('uploadedPhotos', JSON.stringify(uploadedOnly));
      });
    }
  };

  const handleDeletePhoto = (index: number) => {
    const updatedPhotos = photos.filter((_, i) => i !== index);
    setPhotos(updatedPhotos);

    // Update localStorage
    const uploadedOnly = updatedPhotos.slice(PHOTOS_DATA.length);
    localStorage.setItem('uploadedPhotos', JSON.stringify(uploadedOnly));
  };

  return (
    <div className='bg-white rounded-[15px] p-4 flex flex-col gap-4 sm:w-[50%] xl:w-[41%] w-full h-full'>
      <div className='flex items-center justify-between gap-2'>
        <Heading>Recent Photos</Heading>
        <Button
          variant='outline'
          className='flex items-center gap-1.25 justify-center !min-h-[38px] !py-[7px] md:min-w-[114px]'
          onClick={handleUploadClick}
        >
          <Icons icon="greenPlusicon" className='size-3.5' />
          Upload
        </Button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
      <div className='overflow-y-auto h-[242px] scrollbar-hide'>
        {photos.length === 0 ? (
          <div className='flex flex-col items-center justify-center h-full gap-3'>
            <span className='text-4xl'>📷</span>
            <p className='text-gray-500 text-sm font-medium'>No Recent photos uploaded</p>
          </div>
        ) : (
          <div className='grid grid-cols-4 gap-x-2 gap-y-3'>
            {photos.map((item, index) => (
              <div className='relative overflow-hidden group' key={index}>
                <Image src={item.image}
                  width={72}
                  height={73}
                  alt='photo'
                  className='object-cover rounded-sm w-full h-18.25'
                />
                <button
                  onClick={() => handleDeletePhoto(index)}
                  className='absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer hover:bg-red-600'
                  aria-label='Delete photo'
                >
                  <svg
                    className='w-3 h-3'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  )
}

export default RecentPhotos