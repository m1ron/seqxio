"use client"
import { useState } from 'react'
import Icons from '../common/Icons'
import Button from '../ui/Button'
import Input from '../common/Input'

interface ProjectData {
    id: string
    projectName: string
    month: string
    area: string
    description: string
    budget: string
    startDate: string
}

interface AddProjectModalProps {
    isOpen: boolean
    onClose: () => void
    onAdd: (data: ProjectData) => void
}

const AddProjectModal = ({ isOpen, onClose, onAdd }: AddProjectModalProps) => {
    const [projectData, setProjectData] = useState({
        projectName: '',
        month: '',
        area: '',
        description: '',
        budget: '',
        startDate: ''
    })
    const [errors, setErrors] = useState({
        projectName: '',
        month: '',
        area: '',
        description: '',
        budget: '',
        startDate: ''
    })

    if (!isOpen) return null

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ]

    const handleInputChange = (field: string, value: string) => {
        setProjectData(prev => ({ ...prev, [field]: value }))
        if (errors[field as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [field]: '' }))
        }
    }

    const validateForm = () => {
        const newErrors = {
            projectName: '',
            month: '',
            area: '',
            description: '',
            budget: '',
            startDate: ''
        }
        let isValid = true

        if (!projectData.projectName.trim()) {
            newErrors.projectName = 'Project name is required'
            isValid = false
        }

        if (!projectData.month) {
            newErrors.month = 'Month is required'
            isValid = false
        }

        if (!projectData.area.trim()) {
            newErrors.area = 'Area is required'
            isValid = false
        }

        if (!projectData.description.trim()) {
            newErrors.description = 'Description is required'
            isValid = false
        }

        if (!projectData.budget.trim()) {
            newErrors.budget = 'Budget is required'
            isValid = false
        } else if (parseFloat(projectData.budget) <= 0) {
            newErrors.budget = 'Budget must be greater than 0'
            isValid = false
        }

        if (!projectData.startDate) {
            newErrors.startDate = 'Start date is required'
            isValid = false
        }

        setErrors(newErrors)
        return isValid
    }

    const handleSubmit = () => {
        if (!validateForm()) {
            return
        }

        const newProject: ProjectData = {
            id: Date.now().toString(),
            ...projectData
        }
        onAdd(newProject)

        // Reset form
        setProjectData({
            projectName: '',
            month: '',
            area: '',
            description: '',
            budget: '',
            startDate: ''
        })
        setErrors({
            projectName: '',
            month: '',
            area: '',
            description: '',
            budget: '',
            startDate: ''
        })
        onClose()
    }

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={onClose}>
            <div className="bg-white rounded-[15px] p-6 max-w-[600px] w-full mx-4 max-h-[90vh] overflow-y-auto custom-scroll" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-medium text-black">Add New Project</h2>
                    <button onClick={onClose} className="cursor-pointer text-black hover:bg-red-900 bg-red-500 rounded-sm transition-all ease-linear duration-300">
                        <Icons icon="closenav" />
                    </button>
                </div>

                <div className="space-y-4 mb-6">
                    <div>
                        <label className="block mb-2 text-sm font-normal text-black">Project Name</label>
                        <Input
                            placeholderText="Enter project name"
                            type="text"
                            name="projectName"
                            value={projectData.projectName}
                            onChange={(e) => handleInputChange('projectName', e.target.value)}
                            error={errors.projectName}
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-normal text-black">Month</label>
                        <select
                            name="month"
                            value={projectData.month}
                            onChange={(e) => handleInputChange('month', e.target.value)}
                            className="font-normal sm:text-xl text-base leading-120 text-black border border-black outline-none py-[15px] px-3 rounded-[10px] w-full"
                        >
                            <option value="">Select month</option>
                            {months.map((month) => (
                                <option key={month} value={month}>
                                    {month}
                                </option>
                            ))}
                        </select>
                        {errors.month && <p className="text-red-500 text-sm mt-1 font-normal">{errors.month}</p>}
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-normal text-black">Area</label>
                        <Input
                            placeholderText="Enter area/location"
                            type="text"
                            name="area"
                            value={projectData.area}
                            onChange={(e) => handleInputChange('area', e.target.value)}
                            error={errors.area}
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-normal text-black">Description</label>
                        <textarea
                            name="description"
                            value={projectData.description}
                            onChange={(e) => handleInputChange('description', e.target.value)}
                            placeholder="Enter project description"
                            className="font-normal sm:text-xl text-base leading-120 text-black placeholder:text-black border border-black outline-none py-[15px] px-3 rounded-[10px] w-full min-h-[100px] resize-none"
                        />
                        {errors.description && <p className="text-red-500 text-sm mt-1 font-normal">{errors.description}</p>}
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-normal text-black">Budget ($)</label>
                        <Input
                            placeholderText="Enter budget amount"
                            type="number"
                            name="budget"
                            value={projectData.budget}
                            onChange={(e) => handleInputChange('budget', e.target.value)}
                            error={errors.budget}
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-normal text-black">Start Date</label>
                        <Input
                            placeholderText="Select start date"
                            type="date"
                            name="startDate"
                            value={projectData.startDate}
                            onChange={(e) => handleInputChange('startDate', e.target.value)}
                            error={errors.startDate}
                        />
                    </div>
                </div>

                <div className="flex gap-3">
                    <Button variant="outline" onClick={onClose} className="flex-1">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} className="flex-1">
                        Add Project
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AddProjectModal
