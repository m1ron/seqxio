"use client"
import { useState } from 'react'
import Button from '../ui/Button'
import Icons from '../common/Icons'
import { ROADS_DATA } from '@/app/utils/helper'
import Heading from '../ui/Heading'
import AddRoadModal from './AddRoadModal'

interface RoadData {
  id: string
  name: string
  color: string
}

const Roads = () => {
  const [isAddRoadModalOpen, setIsAddRoadModalOpen] = useState(false)
  const [roads, setRoads] = useState<RoadData[]>(
    ROADS_DATA.map((road, index) => ({
      id: `default-${index}`,
      name: road.name,
      color: road.color
    }))
  )

  const handleAddRoad = (data: RoadData) => {
    setRoads(prev => [...prev, data])
    console.log('Road added:', data)
  }

  const handleDeleteRoad = (id: string) => {
    setRoads(prev => prev.filter(road => road.id !== id))
    console.log('Road deleted, ID:', id)
  }
  return (

    <div className='bg-white rounded-[15px] p-4 pb-3.5 flex flex-col gap-4 xl:mb-4 max-xl:w-[50%] max-sm:w-full'>
      <div className='flex items-center justify-between gap-2'>
        {/* <h2 className='font-medium leading-120 -tracking-[0.64px] text-xl text-black'>
          Roads
        </h2> */}
        <Heading>Roads</Heading>
        <Button
          variant='outline'
          className='group flex items-center gap-2  justify-center min-w-[96px] !min-h-[38px] !py-[7px] transition-all ease-linear duration-300'
          onClick={() => setIsAddRoadModalOpen(true)}
        >
          <Icons icon="greenPlusicon" className='group-hover:text-white text-dark-green transition-all ease-linear duration-300' />
          New
        </Button>
      </div>
      <div className='flex flex-col h-66 overflow-auto custom-scroll'>
        {roads.length === 0 ? (
          <div className='flex flex-col items-center justify-center h-full text-center py-8'>
            <span className='text-5xl mb-3'>🛣️</span>
            <p className='text-graphite text-base font-normal'>No roads selected</p>
            <p className='text-graphite text-sm font-normal mt-1'>Click &quot;New&quot; to add a road</p>
          </div>
        ) : (
          roads.map((item) => (
            <div className='cursor-pointer flex items-center justify-between gap-2 group hover:bg-gray-100 p-[5px] rounded-sm' key={item.id}>
              <p className='font-normal  text-base leading-150 -tracking-[0.64px] text-black'>{item.name}</p>
              <div className='flex items-center gap-2'>
                <div className='rounded-full size-2' style={{ backgroundColor: item.color }} />
                <button
                  onClick={() => handleDeleteRoad(item.id)}
                  className='cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity  hover:bg-red-900  bg-red-500 flex items-center justify-center rounded-sm'
                  title='Delete road'
                >
                  <Icons className='size-4' icon="closenav" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <AddRoadModal
        isOpen={isAddRoadModalOpen}
        onClose={() => setIsAddRoadModalOpen(false)}
        onAdd={handleAddRoad}
      />
    </div>
  )
}

export default Roads