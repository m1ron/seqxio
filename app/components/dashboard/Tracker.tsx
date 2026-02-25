"use client";
import React, { useState, useEffect, useRef } from 'react'
import Heading from '../ui/Heading';

const Tracker = () => {
  const [time, setTime] = useState(0); // time in seconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handlePlayPause = () => {
    setIsRunning(!isRunning);
  };

  const handleStop = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (

    <div className='xl:h-56 sm:h-auto max-sm:h-[200px] bg-cover bg-center bg-no-repeat rounded-[15px] overflow-hidden max-xl:w-[50%] max-sm:w-full' style={{ backgroundImage: "url('/assets/images/webp/Time Tracker-bg.webp')" }}>
      <div className='p-4 flex flex-col justify-between h-full'>
        {/* <h3 className='font-medium text-xl leading-100 -tracking-[0.64px] text-white '>
          Time Tracker
        </h3> */}
        <Heading className='text-white'>Time Tracker</Heading>
        <h2 className='font-medium md:text-custom-4xl text-4xl -tracking-[0.64px] text-white mx-auto max-sm:my-2'>
          {formatTime(time)}
        </h2>
        <div className='flex items-center gap-3.25 mx-auto mb-[5px]'>
          <button
            onClick={handlePlayPause}
            className='size-11 rounded-full cursor-pointer bg-white flex items-center justify-center hover:bg-gray-100 transition-colors'
            aria-label={isRunning ? 'Pause' : 'Play'}
          >
            {isRunning ? (
              // Pause icon
              <div className='flex gap-1'>
                <div className='w-1.5 h-4.5 bg-gray-800 rounded-xs'></div>
                <div className='w-1.5 h-4.5 bg-gray-800 rounded-xs'></div>
              </div>
            ) : (
              // Play icon
              <div className='w-0 h-0 border-t-8  border-t-transparent border-l-14 border-l-gray-800 border-b-8 border-b-transparent ml-1'></div>
            )}
          </button>
          <button
            onClick={handleStop}
            className='rounded-full cursor-pointer size-11 bg-[#DA383A] flex items-center justify-center hover:bg-[#c02f31] transition-colors'
            aria-label='Stop'
          >
            <div className='size-4.75 bg-white rounded-xs'></div>
          </button>
        </div>
      </div>
    </div>

  )
}

export default Tracker