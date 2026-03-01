"use client"
import React, { useState } from 'react'
import Icons from './Icons'

interface InputProps {
    placeholderText: string
    type: string
    name: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    error?: string
    className?:string
}

const Input: React.FC<InputProps> = ({ placeholderText, type, name, value, onChange, error,className }) => {
    const [showPassword, setShowPassword] = useState(false)
    const isPasswordField = type === 'password'

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <>
            <div className="relative">
                <input
                    required
                    type={isPasswordField && showPassword ? 'text' : type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={`font-normal sm:text-xl text-base leading-120 text-black placeholder:text-black tracking-[0.15px] border border-black outline-none py-[15px] px-3 rounded-[10px] w-full pr-12 ${className}`}
                    placeholder={placeholderText}
                />
                {isPasswordField && (
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="cursor-pointer absolute right-4 top-[47%] text-gray-500 hover:text-gray-700"
                    >
                        {showPassword ? (
                            <Icons icon="passwordEyeClose" />
                        ) : (
                            <Icons icon="passwordEye" />
                        )}
                    </button>
                )}
            </div>
            {error && <p className="text-red-500 text-sm mt-1 font-normal">{error}</p>}
        </>
    )
}

export default Input