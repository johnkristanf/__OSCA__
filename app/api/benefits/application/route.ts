// app\api\benefits\application\route.ts:
import { benefitApplicationSchema } from '@/schema/benefit/benefit.schema'
import prisma from '@/prisma/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const parsed = benefitApplicationSchema.parse(body)
        const { benefit_id, selected_senior_ids } = parsed

        const applicationsData = selected_senior_ids.map((senior_id) => ({
            benefit_id,
            senior_id,
            status_id: 1, // DEFAULT STATUS TO AVOID NULL BUT LATER ON GETS UPDATED
            category_id: null, // DEFAULT CATEGORY TO AVOID NULL BUT LATER ON GETS UPDATED
        }))

        await prisma.applications.createMany({
            data: applicationsData,
        })

        return NextResponse.json({ msg: 'Benefit Application Success', code: 201 }, { status: 201 })
    } catch (error: any) {
        console.error('[CREATE_BENEFIT_ERROR]', error)
        return NextResponse.json({ msg: error.message, code: 500 }, { status: 500 })
    }
}

export async function GET() {
    try {
        const applications = await prisma.applications.findMany({
            include: {
                senior: {
                    // Change 'select' to 'include' to get documents, or
                    // if you still want to select specific fields AND include relations,
                    // you need to structure it differently.
                    // Option 1: Include all senior fields and documents (simpler)
                    include: {
                        documents: true, // <--- Add this line!
                    },
                    // Option 2: Select specific senior fields AND include documents
                    // select: {
                    //     firstname: true,
                    //     middlename: true,
                    //     lastname: true,
                    //     email: true,
                    //     documents: true, // You can put 'documents: true' here too if still using select
                    //     // Add other senior fields you need for the Senior model for DocumentViewDialog
                    //     // e.g., id, contact_no, emergency_no, birthdate, age, gender, barangay, purok, pwd, remarks (if needed)
                    // }
                },
                benefit: {
                    select: {
                        id: true,
                        name: true,
                        benefit_requirements: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                    },
                },
                status: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
                category: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        })

        return NextResponse.json(applications, { status: 200 })
    } catch (error: any) {
        console.error('[GET /api/applications]', error)
        return NextResponse.json({ msg: error.message, code: 500 }, { status: 500 })
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const url = new URL(request.url)
        const applicationId = url.searchParams.get('application_id')

        if (!applicationId) {
            return NextResponse.json({ msg: 'Application ID is required', code: 400 }, { status: 400 })
        }

        await prisma.applications.delete({
            where: {
                id: parseInt(applicationId),
            },
        })

        return NextResponse.json({ msg: 'Application deleted successfully', code: 200 }, { status: 200 })
    } catch (error: any) {
        console.error('[DELETE /api/benefits/application]', error)
        return NextResponse.json({ msg: 'Error deleting application', code: 500 }, { status: 500 })
    }
}