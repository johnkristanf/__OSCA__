import cloudinary from '@/lib/cloudinary'
import { Gender } from '@/lib/generated/prisma'
import prisma from '@/prisma/prisma'
import { SeniorsFormDataType } from '@/types/seniors'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        const formData = await request.formData()
        console.log('formData: ', formData)

        const seniorData: Partial<SeniorsFormDataType> = {
            firstName: formData.get('firstName') as string,
            middleName: formData.get('middleName') as string,
            lastName: formData.get('lastName') as string,
            email: formData.get('email') as string,
            age: formData.get('age') as string,
            birthDate: formData.get('birthDate') as string,
            gender: formData.get('gender') as string,
            barangay: formData.get('barangay') as string,
            purok: formData.get('purok') as string,
            contactNumber: formData.get('contactNumber') as string,
        }

        const senior = await prisma.senior.create({
            data: {
                firstname: seniorData.firstName || '',
                middlename: seniorData.middleName || '',
                lastname: seniorData.lastName || '',
                email: seniorData.email || '',
                age: seniorData.age || '',
                birthdate: new Date(seniorData.birthDate || ''),
                gender: (seniorData.gender as Gender) || '',
                barangay: seniorData.barangay || '',
                purok: seniorData.purok || '',
                contact_no: seniorData.contactNumber || '',
            },
        })

        if (senior) {
            const fileTags = [
                'birth_certificate',
                'certificate_of_residency',
                'government_issued_id',
                'membership_certificate',
            ]

            for (const tag of fileTags) {
                const file = formData.get(tag) as File | null

                if (file && file instanceof File) {
                    console.log(`${tag}: ${file.name}`)

                    const arrayBuffer = await file.arrayBuffer()
                    const buffer = Buffer.from(arrayBuffer)
                    const cloudinaryFolderPath = `registration/documents/${senior.id}`

                    const uploadResult = await new Promise((resolve, reject) => {
                        const stream = cloudinary.uploader.upload_stream(
                            {
                                folder: cloudinaryFolderPath,
                                public_id: file.name,
                            },

                            (error, result) => {
                                if (error) reject(error)
                                else resolve(result)
                            }
                        )

                        stream.end(buffer)
                    })

                    console.log(`Uploaded ${tag}:`, uploadResult)

                    await prisma.registrationDocument.create({
                        data: {
                            tag: tag,
                            path: cloudinaryFolderPath,
                            seniors_id: senior.id,
                            file_name: file.name,
                        },
                    })
                }
            }
        }

        return NextResponse.json(
            { success: true, message: 'Senior Registered Successfully' },
            { status: 201 }
        )
    } catch (error) {
        console.error('POST /api/senior error:', error)
        return NextResponse.json(
            { success: false, message: 'Something went wrong', error: String(error) },
            { status: 500 }
        )
    }
}

export async function GET(request: Request): Promise<NextResponse> {
    try {
        const { searchParams } = new URL(request.url)

        const queryOptions: any = {
            include: {
                remarks: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        }

        const whereConditions: any = {}
        let hasWhereConditions = false

        if (searchParams.has('name')) {
            const nameSearch = searchParams.get('name')

            // Create an OR condition to search across all name fields
            whereConditions.OR = [
                {
                    firstname: {
                        contains: nameSearch,
                        mode: 'insensitive', // Case-insensitive search (like ILIKE)
                    },
                },
                {
                    middlename: {
                        contains: nameSearch,
                        mode: 'insensitive',
                    },
                },
                {
                    lastname: {
                        contains: nameSearch,
                        mode: 'insensitive',
                    },
                },
            ]

            hasWhereConditions = true
        }

        if (hasWhereConditions) {
            queryOptions.where = whereConditions
        }

        const seniors = await prisma.senior.findMany(queryOptions)
        return NextResponse.json(seniors)
        
    } catch (error) {
        console.error('GET /api/senior error:', error)
        return NextResponse.json(
            { success: false, message: 'Failed to fetch seniors', error: String(error) },
            { status: 500 }
        )
    }
}
