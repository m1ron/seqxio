import React from 'react'
import ProjectProgress from './ProjectProgress'
import TotalProjects from './TotalProjects'
import Calender from './Calender'
import RecentPhotos from './RecentPhotos'
import Roads from './Roads'
import Tracker from './Tracker'
import InteractiveMap from './InteractiveMap'

const AllDashboard = () => {
  return (
    
        <div className='bg-light-grey  md:py-8 md:px-6 p-4 rounded-2xl '>
            <div className='h-[calc(100vh-202px)] overflow-auto scrollbar-hide'>
              <div className='mb-4'>
                <TotalProjects />
              </div>
              <div className='flex xl:flex-row flex-col gap-4'>
                <div className='flex flex-col gap-4 w-full'>
                  <div className='flex sm:flex-row flex-col gap-4 '>
                    <ProjectProgress />
                    <InteractiveMap />
                  </div>
                  <div className='flex sm:flex-row flex-col items-center gap-4 justify-between'>
                    <Calender />
                    <RecentPhotos />
                  </div>
                </div>
                <div className='max-[1480px]:max-w-[265px] max-[1380px]:!max-w-[280px] max-xl:!max-w-full w-full max-xl:flex max-xl:flex-row max-sm:!flex-col gap-4 min-[1480px]:w-[45%]'>
                  <Roads />
                  <Tracker />
                </div>
              </div>
            </div>
        
        
      </div>
  )
}

export default AllDashboard