'use client'
import { useState } from 'react'
import Icons from '../common/Icons'
import Button from '../ui/Button'
import Input from '../common/Input'

interface ImportedData {
    id: string
    projectName: string
    wasteAmount: string
    date: string
    location: string
    type: 'manual' | 'file'
    fileName?: string
}

interface ImportDataModalProps {
    isOpen: boolean
    onClose: () => void
    onImport: (data: ImportedData) => void
}

const ImportDataModal = ({ isOpen, onClose, onImport }: ImportDataModalProps) => {
    const [activeTab, setActiveTab] = useState<'upload' | 'manual'>('upload')
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [manualData, setManualData] = useState({
        projectName: '',
        wasteAmount: '',
        date: '',
        location: ''
    })
    const [errors, setErrors] = useState({
        projectName: '',
        wasteAmount: '',
        date: '',
        location: ''
    })

    if (!isOpen) return null

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0])
        }
    }

    const handleManualInputChange = (field: string, value: string) => {
        setManualData(prev => ({ ...prev, [field]: value }))
        // Clear error when user starts typing
        if (errors[field as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [field]: '' }))
        }
    }

    const validateForm = () => {
        const newErrors = {
            projectName: '',
            wasteAmount: '',
            date: '',
            location: ''
        }
        let isValid = true

        if (!manualData.projectName.trim()) {
            newErrors.projectName = 'Project name is required'
            isValid = false
        }

        if (!manualData.wasteAmount.trim()) {
            newErrors.wasteAmount = 'Waste amount is required'
            isValid = false
        } else if (parseFloat(manualData.wasteAmount) <= 0) {
            newErrors.wasteAmount = 'Waste amount must be greater than 0'
            isValid = false
        }

        if (!manualData.date) {
            newErrors.date = 'Date is required'
            isValid = false
        }

        if (!manualData.location.trim()) {
            newErrors.location = 'Location is required'
            isValid = false
        }

        setErrors(newErrors)
        return isValid
    }

    const handleSubmit = () => {
        if (activeTab === 'upload' && selectedFile) {
            // For file upload, create data object with file info
            const fileData: ImportedData = {
                id: Date.now().toString(),
                projectName: selectedFile.name.split('.')[0],
                wasteAmount: '0', // You can parse this from the file
                date: new Date().toISOString().split('T')[0],
                location: 'From File',
                type: 'file',
                fileName: selectedFile.name
            }
            onImport(fileData)
            setSelectedFile(null)
            onClose()
        } else if (activeTab === 'manual') {
            // Validate manual data
            if (!validateForm()) {
                return
            }

            const manualDataEntry: ImportedData = {
                id: Date.now().toString(),
                ...manualData,
                type: 'manual'
            }
            onImport(manualDataEntry)
            // Reset form
            setManualData({
                projectName: '',
                wasteAmount: '',
                date: '',
                location: ''
            })
            setErrors({
                projectName: '',
                wasteAmount: '',
                date: '',
                location: ''
            })
            onClose()
        }
    }

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={onClose}>
            <div className="bg-white rounded-[15px] p-6 max-w-[500px] w-full mx-4" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-medium text-black">Import Data</h2>
                    <button onClick={onClose} className="cursor-pointer text-black hover:bg-red-900 bg-red-500 rounded-sm transition-all ease-linear duration-300">
                        <Icons icon="closenav" />
                    </button>
                </div>

                {/* Tabs */}
                <div className="bg-light-grey p-0.5 rounded-sm gap-1.5 flex items-center w-fit mb-6">
                    <button
                        onClick={() => setActiveTab('upload')}
                        className={`cursor-pointer px-4 py-2 rounded-xs text-sm font-normal transition-colors ${activeTab === 'upload'
                            ? 'bg-white text-black'
                            : 'text-graphite bg-transparent'
                            }`}
                    >
                        Upload File
                    </button>
                    <button
                        onClick={() => setActiveTab('manual')}
                        className={`cursor-pointer px-4 py-2 rounded-xs text-sm font-normal transition-colors ${activeTab === 'manual'
                            ? 'bg-white text-black'
                            : 'text-graphite bg-transparent'
                            }`}
                    >
                        Manual Input
                    </button>
                </div>

                {/* Content */}
                {activeTab === 'upload' ? (
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-normal text-black">
                            Select file (CSV, Excel, JSON)
                        </label>
                        <div className="border-2 border-dashed border-green rounded-lg p-8 text-center">
                            <input
                                type="file"
                                onChange={handleFileChange}
                                accept=".csv,.xlsx,.xls,.json"
                                className="hidden"
                                id="file-upload"
                            />
                            <label
                                htmlFor="file-upload"
                                className="cursor-pointer flex flex-col items-center"
                            >
                                <div className="mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="17 8 12 3 7 8"></polyline>
                                        <line x1="12" y1="3" x2="12" y2="15"></line>
                                    </svg>
                                </div>
                                <p className="text-sm text-graphite mb-1">
                                    {selectedFile ? selectedFile.name : 'Click to upload or drag and drop'}
                                </p>
                                <p className="text-xs text-graphite">
                                    CSV, XLSX, or JSON (max 10MB)
                                </p>
                            </label>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-4 mb-6">
                        <div>
                            <label className="block mb-2 text-sm font-normal text-black">Project Name</label>
                            <Input
                                placeholderText="Enter project name"
                                type="text"
                                name="projectName"
                                value={manualData.projectName}
                                onChange={(e) => handleManualInputChange('projectName', e.target.value)}
                                error={errors.projectName}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-normal text-black">Waste Amount (lbs)</label>
                            <Input
                                placeholderText="Enter waste amount"
                                type="number"
                                name="wasteAmount"
                                value={manualData.wasteAmount}
                                onChange={(e) => handleManualInputChange('wasteAmount', e.target.value)}
                                error={errors.wasteAmount}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-normal text-black">Date</label>
                            <Input
                                placeholderText="Select date"
                                type="date"
                                name="date"
                                value={manualData.date}
                                onChange={(e) => handleManualInputChange('date', e.target.value)}
                                error={errors.date}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-normal text-black">Location</label>
                            <Input
                                placeholderText="Enter location"
                                type="text"
                                name="location"
                                value={manualData.location}
                                onChange={(e) => handleManualInputChange('location', e.target.value)}
                                error={errors.location}
                            />
                        </div>
                    </div>
                )}

                {/* Actions */}
                <div className="flex gap-3">
                    <Button variant="outline" onClick={onClose} className="flex-1">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} className="flex-1">
                        Import
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ImportDataModal
