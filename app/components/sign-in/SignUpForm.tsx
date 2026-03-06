"use client"
import React, { useState } from 'react'
import Input from '../common/Input'
import Button from '../ui/Button'
import { useRouter } from 'next/navigation'

const SignUpForm = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = { email: '', password: '' }
    let isValid = true

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required'
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
      isValid = false
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required'
      isValid = false
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (validateForm()) {
      console.log('Form submitted:', formData)

      // Reset form fields
      setFormData({
        email: '',
        password: '',
        rememberMe: false
      })

      // Navigate to home page
      router.push('/')
    }
  }

  return (
    <div className="sm:max-w-124.5 w-full mx-auto">
      <h2 className="text-custom-4xl leading-120 text-black font-normal mb-4 tracking-[.03em]">Sign in</h2>
      <p className="font-normal text-base leading-144 text-bold-grey mb-4 tracking-[0.005em]">Enter your email and password to login.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className='flex flex-col'>
          <Input
            placeholderText="Email address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <Input
            placeholderText="Password"
            type="password"
            name="password"
            className='mt-4'
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="size-4 accent-dark-green rounded-md cursor-pointer"
            />
            <span className="font-normal text-base text-black leading-144">Remember me</span>
          </label>

          <a href="#" className="text-base font-normal leading-144 text-dark-green underline underline-offset-4">
            Forgot password?
          </a>
        </div>

        <Button type="submit" className="w-full !text-base">Sign In</Button>
        <p className='font-normal text-base leading-120 text-black'>Don’t have an account? <a href="#" className='text-dark-green underline underline-offset-2 mt-4.5'>Contact us.</a>  </p>

      </form>
    </div>
  )
}

export default SignUpForm
