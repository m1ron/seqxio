"use client";
import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js'
import Heading from '../ui/Heading';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend)

const ProjectProgress = () => {
  const data = {
    datasets: [
      // Outermost donut - Completed
      {
        label: 'Completed',
        data: [51, 49],
        backgroundColor: ['#227D53', '#F7F7F7'],
        borderWidth: 0,
        circumference: 180,
        rotation: 270,
        cutout: '25%',
        borderRadius: 5,
      },
      // Middle donut - In Progress
      {
        label: 'In Progress',
        data: [35, 65],
        backgroundColor: ['#155234', '#F7F7F7'],
        borderWidth: 0,
        circumference: 180,
        rotation: 270,
        cutout: '16%',
        borderRadius: 5,
      },
      // Innermost donut - Pending
      {
        label: 'Pending',
        data: [14, 86],
        backgroundColor: ['#5FBD92', '#F7F7F7'],
        borderWidth: 0,
        circumference: 180,
        rotation: 270,
        cutout: '11%',
        borderRadius: 5,

      },
    ],
  }

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        // backgroundColor: 'transparent',
        // titleColor: '#000',
        // bodyColor: '#000',
        // borderColor: 'transparent',
        // borderWidth: 0,
        filter: function (tooltipItem) {
          // Only show tooltip for the first segment (filled color), not the background
          return tooltipItem.dataIndex === 0
        },
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.parsed}%`
          }
        }
      },
    },
  }

  return (
    <div className='sm:w-[50%] xl:w-[59.5%]  flex flex-col w-full rounded-[15px] bg-white p-4 overflow-clip min-h-61 overflow-hidden'>
      {/* <h2 className='font-medium leading-120 text-black text-xl -tracking-[0.64px] mb-4'>
        Project Progress
      </h2> */}
      <Heading className='xl:mb-6 mb-4'>Project Progress</Heading>

      <div className='flex min-[1420px]:flex-row flex-col gap-1 justify-between'>
        {/* Chart */}
        <div className='w-65 relative mx-auto'>
          <Doughnut data={data} options={options} className='min-[1420px]:scale-135' />
          {/* Percentage labels positioned on each donut ring */}
          <div className='absolute min-[1420px]:top-0 top-[11%] left-[55%] text-base leading-137 font-regular text-black'>
            51%
          </div>
          <div className='absolute min-[1420px]:top-[36%] min-[1420px]:left-[35%] top-[38%] left-[45%] text-base leading-137 font-regular text-black'>
            35%
          </div>
          <div className='absolute min-[1420px]:top-[77%] min-[1420px]:left-[35%] top-[65%] left-[43%] text-base leading-137 font-regular text-black'>
            14%
          </div>
        </div>

        {/* Legend */}
        <div className='flex flex-col gap-2  min-[1420px]:mx-0'>
          <div className='flex items-center gap-1'>
            <div className='w-3 h-3 rounded-full bg-green'></div>
            <span className='text-[14px] leading-157 font-normal text-black'>Completed</span>
          </div>
          <div className='flex items-center gap-1'>
            <div className='w-3 h-3 rounded-full bg-dark-green'></div>
            <span className='text-[14px] leading-157 font-normal text-blac whitespace-nowrap'>In Progress</span>
          </div>
          <div className='flex items-center gap-1'>
            <div className='w-3 h-3 rounded-full bg-[#5FBD92]'></div>
            <span className='text-[14px] leading-157 font-normal text-black'>Pending</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectProgress