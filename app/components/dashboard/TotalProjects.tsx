"use client"
import React, { useState } from 'react'
import Button from '../ui/Button'
import Icons from '../common/Icons'
import Image from 'next/image'
import Paragraph from '../ui/Paragraph'
import WasteChart from './WasteChart'
import Heading from '../ui/Heading'
import ImportDataModal from './ImportDataModal'
import AddProjectModal from './AddProjectModal'

import PageHeader from "@/app/components/common/PageHeader"

interface ImportedData {
    id: string
    projectName: string
    wasteAmount: string
    date: string
    location: string
    type: 'manual' | 'file'
    fileName?: string
}

interface ProjectData {
    id: string
    projectName: string
    month: string
    area: string
    description: string
    budget: string
    startDate: string
}

const TotalProjects = () => {
    const [isImportModalOpen, setIsImportModalOpen] = useState(false)
    const [isAddProjectModalOpen, setIsAddProjectModalOpen] = useState(false)
    const [importedData, setImportedData] = useState<ImportedData[]>([])
    const [projects, setProjects] = useState<ProjectData[]>([])

    const handleDataImport = (data: ImportedData) => {
        setImportedData(prev => [...prev, data])
        console.log('Data stored:', data)
        console.log('All imported data:', [...importedData, data])
    }

    const handleDeleteData = (id: string) => {
        setImportedData(prev => prev.filter(item => item.id !== id))
        console.log('Data deleted, ID:', id)
    }

    const handleAddProject = (data: ProjectData) => {
        setProjects(prev => [...prev, data])
        console.log('Project added:', data)
        console.log('All projects:', [...projects, data])
    }

    const handleDeleteProject = (id: string) => {
        setProjects(prev => prev.filter(item => item.id !== id))
        console.log('Project deleted, ID:', id)
    }
    return (
        <>
            <PageHeader
                heading="Dashboard"
                subheading="Monitor and manage waste collection operations in real-time."
            >
                <Button className='flex items-center gap-2 min-w-[162px]  justify-center  max-sm:w-full xl:min-h-[56px]' onClick={() => setIsAddProjectModalOpen(true)}><Image width={14} height={14} src="./assets/images/svg/plus-icon.svg" alt="plus-icon"/> Add Project</Button>
                <Button variant='outline' className='min-w-[135px] max-sm:w-full xl:min-h-[56px]' onClick={() => setIsImportModalOpen(true)}>Import Data</Button>
            </PageHeader>

            {/* Projects Display */}
            {projects.length > 0 && (
                <div className='my-4 p-4 bg-white rounded-[15px]'>
                    <Heading className='mb-4'>{`Projects (${projects.length})`}</Heading>
                    <div className='grid md:grid-cols-2 gap-3 h-[145px] overflow-auto scrollbar-custom'>
                        {projects.map((project) => (
                            <div key={project.id} className='sm:p-4 p-3 border border-green rounded-lg'>
                                <div className='flex justify-between items-start mb-3'>
                                    <div>
                                        <h3 className='font-medium text-lg text-black'>{project.projectName}</h3>
                                        <p className='text-sm text-graphite'>{project.month} • {project.area}</p>
                                    </div>
                                    <button
                                        onClick={() => handleDeleteProject(project.id)}
                                        className='text-graphite hover:bg-red-900 bg-red-500 rounded-sm transition-colors'
                                        title='Delete'
                                    >
                                        <Icons className='size-4' icon="closenav"/>
                                    </button>
                                </div>
                                <p className='text-sm text-black mb-2'>{project.description}</p>
                                <div className='flex justify-between items-center text-sm'>
                                    <span className='text-graphite'>Budget: ${project.budget}</span>
                                    <span className='text-graphite'>Start: {project.startDate}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {/* Imported Data Display */}
            {importedData.length > 0 && (
                <div className='my-4 p-4 bg-white rounded-[15px]'>
                    <Heading className='mb-4'>{`Imported Data (${importedData.length})`}</Heading>
                    <div className='space-y-2 h-[180px] overflow-auto scrollbar-custom'>
                        {importedData.map((item) => (
                            <div key={item.id} className='p-3 border border-light-grey rounded-lg flex justify-between items-center'>
                                <div className='max-sm:max-w-[120px]'>
                                    <p className='font-medium text-black'>{item.projectName}</p>
                                    <p className='text-sm text-graphite'>
                                        {item.wasteAmount} lbs • {item.location} • {item.date}
                                    </p>
                                    {item.fileName && (
                                        <p className='text-xs text-graphite'>File: {item.fileName}</p>
                                    )}
                                </div>
                                <div className='flex items-center gap-2'>
                  <span className='text-xs px-2 py-1 bg-light-grey rounded'>
                    {item.type === 'file' ? 'File Upload' : 'Manual Entry'}
                  </span>
                                    <button
                                        onClick={() => handleDeleteData(item.id)}
                                        className='cursor-pointer text-graphite hover:bg-red-900 transition-colors bg-red-500 rounded-sm'
                                        title='Delete'
                                    >
                                        <Icons className='size-4' icon="closenav"/>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {/* boxes */}
            <div className='flex xl:flex-row flex-col items-center gap-4'>
                {/* total */}
                <div className='flex items-center sm:flex-row flex-col gap-4 w-full'>
                    <div className='max-[1480px]:max-w-[265px] max-xl:max-w-full w-full p-4 rounded-[15px] bg-gradient-to-b from-[#155234] to-[#227D53] xl:min-h-[188px] min-h-[160px]'>
                        <div className='flex justify-between items-center mb-4'>
                            {/* <h4 className='font-medium text-xl leading-120 text-white'>
                  Total Projects
                </h4> */}
                            <Heading className='text-white'>Total Projects</Heading>
                            <div className='rounded-full bg-white size-[24px] flex  items-center justify-center transition-all ease-linear cursor-pointer group hover:bg-green border border-transparent hover:border-white'>
                                <Icons icon="rightArrowTop" className=" text-black group-hover:text-white transition-all ease-linear duration-150"/>
                            </div>
                        </div>
                        <h3 className='text-white xl:text-custom-6xl text-5xl font-semibold -tracking-[0.64px] leading-100 mb-4 '>
                            24
                        </h3>
                        <div className='flex  items-center gap-2'>
                            <div className='border w-[24px] h-[20px] border-lime-green rounded-[5px] flex items-center justify-center gap-0.5'>
                                <Paragraph className='text-lime-green text-[10px] leading-100 font-normal'>
                                    5
                                </Paragraph>
                                <Icons icon='triangleDropIcon' className=' text-lime-green'/>
                            </div>
                            <p className='text-sm font-normal leading-100!  text-lime-green tracking-[-.04em]'>
                                Increased from last month
                            </p>
                        </div>
                    </div>
                    {/* ended */}
                    <div className='max-[1480px]:max-w-[265px] max-xl:max-w-full w-full p-4 rounded-[15px] bg-white xl:min-h-[188px] h-[160px]'>
                        <div className='flex  flex-wrap justify-between mb-4'>
                            {/* <h4 className='font-medium text-xl leading-120 text-black'>
                  Ended Projects
                </h4> */}
                            <Heading>Ended Projects</Heading>
                            <div className='rounded-full bg-white border border-black  size-6 transition-all ease-in-out duration-150  cursor-pointer flex items-center justify-center hover:border-green hover:bg-green group'>
                                <Icons icon="rightArrowTop" className="text-black group-hover:text-white transition-all ease-linear duration-150"/>
                            </div>
                        </div>
                        <h3 className='text-black xl:text-custom-6xl text-5xl font-semibold -tracking-[0.64px] leading-100 mb-4 '>
                            10
                        </h3>
                        <div className='flex  items-center gap-2'>
                            <div className='border w-6 h-5 border-green rounded-[5px] flex items-center justify-center gap-[1.5px] bg-light-grey-100'>
                                <Paragraph className='text-green text-xs leading-100 font-normal'>
                                    6
                                </Paragraph>
                                <Icons icon='triangleDropIcon' className=' text-green'/>
                            </div>
                            <p className='text-sm font-normal leading-100!  text-green tracking-[-.04em]'>
                                Increased from last month
                            </p>
                        </div>
                    </div>
                </div>
                {/* chart */}
                <div className='max-[1480px]:max-w-137 max-xl:max-w-full w-full p-4 rounded-[15px] bg-white flex max-sm:flex-col justify-between gap-1.5 sm:h-[188px] min-[1480px]:w-[674px] min-[1480px]:shrink-0 overflow-x-clip'>
                    <div className='xlmax-w-[237px]'>
                        <Heading className='mb-4 xl:text-nowrap tracking-[-.03em]'>Collected Waste Summary</Heading>
                        <h3 className='text-black xl:text-custom-6xl text-5xl font-semibold leading-100 mb-4 '>
                            1,284.6
                        </h3>
                        <div className='flex  items-center gap-2 max-sm:mb-6'>
                            <div className='border w-[39px] h-[20px] border-green rounded-[5px] flex items-center justify-center gap-0.5 bg-light-grey-100'>
                                <Paragraph className='text-green text-[10px] leading-100 font-normal'>
                                    200
                                </Paragraph>

                                <Icons icon='triangleDropIcon' className='text-green '/>
                            </div>
                            <p className='text-sm font-normal leading-100!  text-green tracking-[-.04em]'>
                                Increased from last month
                            </p>
                        </div>
                    </div>
                    <div className='xl:max-w-none min-[1150px]:max-w-[500px] lg:max-w-[350px] md:max-w-[400px] max-w-[262px] w-full max-sm:mx-auto'>
                        <WasteChart/>
                    </div>
                </div>
            </div>


            <ImportDataModal
                isOpen={isImportModalOpen}
                onClose={() => setIsImportModalOpen(false)}
                onImport={handleDataImport}
            />
            <AddProjectModal
                isOpen={isAddProjectModalOpen}
                onClose={() => setIsAddProjectModalOpen(false)}
                onAdd={handleAddProject}
            />
        </>
    )
}

export default TotalProjects
