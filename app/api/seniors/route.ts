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
            emergencyNumber: formData.get('emergencyNumber') as string,
            pwd: formData.get('pwd') === 'true',
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
                emergency_no: seniorData.emergencyNumber || '',
                pwd: seniorData.pwd ?? false,
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

                    try {
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
                                    if (error) {
                                        console.error(
                                            `🟥 Cloudinary upload error for ${tag}:`,
                                            error
                                        )
                                        reject(error)
                                    } else {
                                        resolve(result)
                                    }
                                }
                            )
                            stream.end(buffer)
                        })

                        if (uploadResult) {
                            await prisma.registrationDocument.create({
                                data: {
                                    tag,
                                    path: cloudinaryFolderPath,
                                    imageUrl: (uploadResult as any).secure_url, // Store the public URL
                                    seniors_id: senior.id,
                                    file_name: file.name,
                                },
                            })
                        }
                    } catch (err) {
                        console.error(`Error processing file "${tag}":`, err)
                        // Optional: continue instead of failing the whole request
                    }
                }
            }
        }

        return NextResponse.json(
            { success: true, message: 'Senior Registered Successfully' },
            { status: 201 }
        )
    } catch (error: any) {
        // High-level catch
        const isECONNRESET = error.code === 'ECONNRESET'

        console.error('❌ POST /api/senior unhandled error:', {
            message: error.message,
            code: error.code,
            stack: error.stack,
        })

        return NextResponse.json(
            {
                success: false,
                message: isECONNRESET
                    ? 'Connection reset by client or upstream service'
                    : 'Internal Server Error',
                error: error.message,
            },
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
                documents: true, // Include documents to get public_id for deletion
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

export async function PUT(request: NextRequest): Promise<NextResponse> {
    try {
        const body = await request.json()
        const { id, ...updateData } = body

        const updatedSenior = await prisma.senior.update({
            where: { id: Number(id) },
            data: {
                email: updateData.email,
                contact_no: updateData.contact_no,
                emergency_no: updateData.emergency_no,
                barangay: updateData.barangay,
                purok: updateData.purok,
            },
        })

        return NextResponse.json({ success: true, data: updatedSenior })
    } catch (error: any) {
        console.error('❌ PUT /api/seniors error:', error)
        return NextResponse.json(
            { success: false, message: 'Failed to update senior.', error: error.message },
            { status: 500 }
        )
    }
}


export async function DELETE(request: NextRequest): Promise<NextResponse> {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json(
                { success: false, message: 'Senior ID is required for deletion.' },
                { status: 400 }
            );
        }

        // First, find all documents associated with the senior
        const documentsToDelete = await prisma.registrationDocument.findMany({
            where: {
                seniors_id: parseInt(id),
            },
            select: {
                public_id: true,
            }
        });

        // Delete documents from Cloudinary
        const publicIdsToDelete = documentsToDelete
            .map(doc => doc.public_id)
            .filter((id): id is string => typeof id === 'string' && !!id);
        if (publicIdsToDelete.length > 0) {
            console.log('Deleting from Cloudinary:', publicIdsToDelete);
            await cloudinary.api.delete_resources(publicIdsToDelete);
            // Optionally delete the folder itself if it's empty after deleting resources
            // await cloudinary.api.delete_folder(`registration/documents/${id}`);
        }

        // Then, delete the documents from your database
        await prisma.registrationDocument.deleteMany({
            where: {
                seniors_id: parseInt(id),
            },
        });

        // Finally, delete the senior record
        await prisma.senior.delete({
            where: {
                id: parseInt(id),
            },
        });

        return NextResponse.json(
            { success: true, message: `Senior with ID ${id} deleted successfully.` },
            { status: 200 }
        );

    } catch (error: any) {
        console.error('❌ DELETE /api/seniors unhandled error:', {
            message: error.message,
            stack: error.stack,
        });

        return NextResponse.json(
            { success: false, message: 'Failed to delete senior.', error: error.message },
            { status: 500 }
        );
    }
}