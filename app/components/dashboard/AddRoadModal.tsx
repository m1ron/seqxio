'use client'
import { useState } from 'react'
import Icons from '../common/Icons'
import Button from '../ui/Button'
import Input from '../common/Input'

interface RoadData {
    id: string
    name: string
    color: string
}

interface AddRoadModalProps {
    isOpen: boolean
    onClose: () => void
    onAdd: (data: RoadData) => void
}

const AddRoadModal = ({ isOpen, onClose, onAdd }: AddRoadModalProps) => {
    const [roadData, setRoadData] = useState({
        name: '',
        color: '#227D53'
    })
    const [errors, setErrors] = useState({
        name: '',
        color: ''
    })

    if (!isOpen) return null

    const predefinedColors = [
        '#227D53', '#155234', '#5FBD92', '#DBA6A9',
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A',
        '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'
    ]

    const handleInputChange = (field: string, value: string) => {
        setRoadData(prev => ({ ...prev, [field]: value }))
        if (errors[field as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [field]: '' }))
        }
    }

    const validateForm = () => {
        const newErrors = {
            name: '',
            color: ''
        }
        let isValid = true

        if (!roadData.name.trim()) {
            newErrors.name = 'Road name is required'
            isValid = false
        }

        if (!roadData.color) {
            newErrors.color = 'Color is required'
            isValid = false
        }

        setErrors(newErrors)
        return isValid
    }

    const handleSubmit = () => {
        if (!validateForm()) {
            return
        }

        const newRoad: RoadData = {
            id: Date.now().toString(),
            ...roadData
        }
        onAdd(newRoad)

        // Reset form
        setRoadData({
            name: '',
            color: '#227D53'
        })
        setErrors({
            name: '',
            color: ''
        })
        onClose()
    }

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={onClose}>
            <div className="bg-white rounded-[15px] p-6 max-w-[500px] w-full mx-4" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-medium text-black">Add New Road</h2>
                    <button onClick={onClose} className="cursor-pointer bg-red-500 hover:bg-red-900 rounded-sm transition-all ease-linear duration-300">
                        <Icons icon="closenav" />
                    </button>
                </div>

                <div className="space-y-4 mb-6">
                    <div>
                        <label className="block mb-2 text-sm font-normal text-black">Road Name</label>
                        <Input
                            placeholderText="Enter road name"
                            type="text"
                            name="name"
                            value={roadData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            error={errors.name}
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-normal text-black">Color</label>
                        <div className="grid grid-cols-6 gap-2 mb-3">
                            {predefinedColors.map((color) => (
                                <button
                                    key={color}
                                    type="button"
                                    onClick={() => handleInputChange('color', color)}
                                    className={`w-full h-10 rounded-lg border-2 transition-all ${roadData.color === color ? 'border-black scale-110' : 'border-light-grey'
                                        }`}
                                    style={{ backgroundColor: color }}
                                    title={color}
                                />
                            ))}
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="color"
                                value={roadData.color}
                                onChange={(e) => handleInputChange('color', e.target.value)}
                                className="w-16 h-10 rounded-lg border border-black cursor-pointer"
                            />
                            <span className="text-sm text-graphite">Or pick a custom color</span>
                        </div>
                        {errors.color && <p className="text-red-500 text-sm mt-1 font-normal">{errors.color}</p>}
                    </div>
                </div>

                <div className="flex gap-3">
                    <Button variant="outline" onClick={onClose} className="flex-1">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} className="flex-1">
                        Add Road
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AddRoadModal
