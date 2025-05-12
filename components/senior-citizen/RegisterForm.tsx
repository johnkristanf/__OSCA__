'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Input } from '../ui/input'
import { RegistrationDocumentTag } from '@/types/seniors'
import { AlertDialogComponent } from '../alert-component'
import { SeniorsFormData, seniorsFormSchema } from '@/features/seniors/seniors.schema'
import { apiService } from '@/lib/axios'
import { useMutation } from '@tanstack/react-query'
import { cn } from '@/lib/utils'

type FileData = {
    birth_certificate: File | null
    certificate_of_residency: File | null
    government_issued_id: File | null
    membership_certificate: File | null
}

const RegisterFormComponents = () => {
    // FILE DATA UPLOAD STATE
    const [fileData, setFileData] = useState<FileData>({
        birth_certificate: null,
        certificate_of_residency: null,
        government_issued_id: null,
        membership_certificate: null,
    })

    // FILE UPLOAD ERROR STATE
    const [isUploadError, setIsUploadError] = useState<boolean>(false)

    // Initialize form with vee-validate
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<SeniorsFormData>({
        resolver: zodResolver(seniorsFormSchema),
        defaultValues: {
            firstName: '',
            middleName: '',
            lastName: '',
            email: '',
            age: '',
            birthDate: '',
            gender: 'female',
            barangay: 'Gredu',
            purok: 'Talong',
            contactNumber: '',
        },
    })

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, tag: string) => {
        const file = e.target.files?.[0] || null

        if (file && !file.type.startsWith('image/')) {
            setIsUploadError(true)
            return
        }

        fileData[tag as keyof FileData] = file
    }

    const mutation = useMutation({
        mutationFn: async (formData: FormData) => {
            return await apiService.post('/api/seniors', formData)
        },
        onSuccess: (data) => {
            console.log('Success:', data)
            reset() // optionally reset form
        },
        onError: (error) => {
            console.error('Error submitting form:', error)
        },
    })

    const onSubmit = async (data: SeniorsFormData) => {
        const apiFormData = new FormData()
        console.log('form data submitted: ', data)
        console.log('file data: ', fileData)

        // APPENDING INPUT FIELDS TO FORM DATA
        Object.entries(data).forEach(([key, value]) => {
            apiFormData.append(key, value)
        })

        // APPENDING FILE UPLOADS TO FORM DATA
        Object.entries(fileData).forEach(([key, file]) => {
            if (file) {
                apiFormData.append(key, file)
            }
        })

        for (const [key, value] of apiFormData.entries()) {
            console.log(key, value)
        }

        // API CALL HERE
        mutation.mutate(apiFormData)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="h-90 overflow-y-auto mt-5">
                <div className="space-y-12">
                    {/* <!------------------------------- PERSONAL INFORMATION ---------------------------> */}
                    <div className="border-b border-gray-900/10">
                        <h2 className="text-base/7 font-semibold text-gray-900">
                            Personal Information
                        </h2>
                        <p className="mt-1 text-sm/6 text-gray-600">
                            Use a permanent address where you can receive mail.
                        </p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
                            {/* First Name */}
                            <div>
                                <label
                                    htmlFor="firstName"
                                    className="block text-sm/6 text-gray-900"
                                >
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register('firstName', {
                                            required: 'First name is required',
                                        })}
                                        type="text"
                                        id="firstName"
                                        autoComplete="given-name"
                                        className="font-medium block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6"
                                    />
                                    {errors.firstName && (
                                        <span className="text-red-500 text-xs">
                                            {errors.firstName.message}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Middle Name */}
                            <div>
                                <label
                                    htmlFor="middleName"
                                    className="block text-sm/6 text-gray-900"
                                >
                                    Middle name
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register('middleName')}
                                        type="text"
                                        id="middleName"
                                        autoComplete="additional-name"
                                        className="font-medium block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            {/* Last Name */}
                            <div>
                                <label htmlFor="lastName" className="block text-sm/6 text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register('lastName', {
                                            required: 'Last name is required',
                                        })}
                                        type="text"
                                        id="lastName"
                                        autoComplete="family-name"
                                        className="font-medium block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6"
                                    />
                                    {errors.lastName && (
                                        <span className="text-red-500 text-xs">
                                            {errors.lastName.message}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Email */}
                            <div className="sm:col-span-1">
                                <label htmlFor="email" className="block text-sm text-gray-900">
                                    Email address (optional)
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register('email')}
                                        id="email"
                                        type="email"
                                        className="font-medium block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-green-600 sm:text-sm"
                                    />
                                    {errors.email && (
                                        <span className="text-red-500 text-xs">
                                            {errors.email.message}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Contact Number */}
                            <div className="sm:col-span-1">
                                <label
                                    htmlFor="contactNumber"
                                    className="block text-sm text-gray-900"
                                >
                                    Contact Number
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register('contactNumber', {
                                            required: 'Contact Number is required',
                                        })}
                                        id="contactNumber"
                                        type="tel"
                                        className="font-medium block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-green-600 sm:text-sm"
                                    />
                                    {errors.contactNumber && (
                                        <span className="text-red-500 text-xs">
                                            {errors.contactNumber.message}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Age */}
                            <div className="sm:col-span-1">
                                <label htmlFor="age" className="block text-sm text-gray-900">
                                    Age
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register('age', { required: 'Age is required' })}
                                        type="number"
                                        id="age"
                                        className="font-medium block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-3 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-1 focus:outline-green-600 sm:text-sm/6"
                                    />
                                    {errors.age && (
                                        <span className="text-red-500 text-xs">
                                            {errors.age.message}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Birth Date */}
                            <div className="sm:col-span-3">
                                <label htmlFor="birthDate" className="block text-sm text-gray-900">
                                    Birth Date
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register('birthDate', {
                                            required: 'Birth date is required',
                                        })}
                                        type="date"
                                        id="birthDate"
                                        autoComplete="bday"
                                        className="font-medium block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-green-600 sm:text-sm"
                                    />
                                    {errors.birthDate && (
                                        <span className="text-red-500 text-xs">
                                            {errors.birthDate.message}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Gender */}
                            <div className="sm:col-span-1">
                                <label htmlFor="gender" className="block text-sm/6 text-gray-900">
                                    Gender
                                </label>
                                <div className="mt-2 grid grid-cols-1">
                                    <select
                                        {...register('gender', { required: 'Gender is required' })}
                                        id="gender"
                                        className="font-medium col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6"
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="female">Female</option>
                                        <option value="male">Male</option>
                                    </select>
                                    {errors.gender && (
                                        <span className="text-red-500 text-xs">
                                            {errors.gender.message}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Barangay */}
                            <div className="sm:col-span-1">
                                <label htmlFor="barangay" className="block text-sm/6 text-gray-900">
                                    Barangay
                                </label>
                                <div className="mt-2 grid grid-cols-1">
                                    <select
                                        {...register('barangay', {
                                            required: 'Barangay is required',
                                        })}
                                        id="barangay"
                                        className="font-medium col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6"
                                    >
                                        <option value="">Select Barangay</option>
                                        <option value="Gredu">Gredu</option>
                                        <option value="Cagangohan">Cagangohan</option>
                                        <option value="J.P Larurel">J.P Larurel</option>
                                    </select>
                                    {errors.barangay && (
                                        <span className="text-red-500 text-xs">
                                            {errors.barangay.message}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Purok */}
                            <div className="sm:col-span-1">
                                <label htmlFor="purok" className="block text-sm/6 text-gray-900">
                                    Purok
                                </label>
                                <div className="mt-2 grid grid-cols-1">
                                    <select
                                        {...register('purok', { required: 'Purok is required' })}
                                        id="purok"
                                        className="font-medium col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6"
                                    >
                                        <option value="">Select Purok</option>
                                        <option value="Talong">Talong</option>
                                        <option value="Santol">Santol</option>
                                    </select>
                                    {errors.purok && (
                                        <span className="text-red-500 text-xs">
                                            {errors.purok.message}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!------------------------------- DOCUMENTS ---------------------------> */}
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base/7 font-semibold text-gray-900">
                            Registration Documents
                        </h2>
                        <p className="mt-1 text-sm/6 text-gray-600">
                            Upload Document Required for Registration
                        </p>
                        <p className="mt-1 text-green-600 text-sm/6 text-gray-600">
                            Only Image Files are Accepted (JPG, PNG, GIF, WEBP, etc.)
                        </p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            {/* <!--------------------------------- BIRTH CERTIFICATE-------------------------> */}

                            <div className="col-span-full">
                                <label className="block text-sm/6 text-gray-900 mb-3">
                                    Birth Certificate
                                </label>
                                <div className="space-y-2">
                                    <Input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) =>
                                            handleFileChange(
                                                e,
                                                RegistrationDocumentTag.BIRTH_CERTIFICATE
                                            )
                                        }
                                    />
                                </div>
                            </div>

                            {/* <!--------------------------------- CERTIFICATE OF RESIDENCY -------------------------> */}

                            <div className="col-span-full">
                                <label className="block text-sm/6 text-gray-900 mb-3">
                                    Certificate of Residency
                                </label>
                                <div className="space-y-2">
                                    <Input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) =>
                                            handleFileChange(
                                                e,
                                                RegistrationDocumentTag.CERTIFICATE_OF_RESIDENCY
                                            )
                                        }
                                    />
                                </div>
                            </div>

                            {/* <!--------------------------------- GOVERNMENT ISSUED ID -------------------------> */}

                            <div className="col-span-full">
                                <label className="block text-sm/6 text-gray-900 mb-3">
                                    Government Issued ID
                                </label>
                                <div className="space-y-2">
                                    <Input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) =>
                                            handleFileChange(
                                                e,
                                                RegistrationDocumentTag.GOVERNMENT_ISSUED_ID
                                            )
                                        }
                                    />
                                </div>
                            </div>

                            {/* <!--------------------------------- MEMBERSHIP CERTIFICATE -------------------------> */}

                            <div className="col-span-full">
                                <label className="block text-sm/6 text-gray-900 mb-3">
                                    Membership Certificate
                                </label>
                                <div className="space-y-2">
                                    <Input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) =>
                                            handleFileChange(
                                                e,
                                                RegistrationDocumentTag.MEMBERSHIP_CERTIFICATE
                                            )
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- SUBMIT BUTTON --> */}
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="submit"
                        disabled={mutation.isPending}
                        className={cn(
                            'rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600',
                            mutation.isPending ? 'bg-gray-500' : 'bg-green-600 hover:bg-green-500'
                        )}
                    >
                        {mutation.isPending ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </form>

            {isUploadError && (
                <AlertDialogComponent
                    dialogTitle="Failed to Upload File"
                    dialogMessage="Only Image Type is Allowed"
                />
            )}
        </>
    )
}

export default RegisterFormComponents
