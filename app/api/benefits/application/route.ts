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
                    select: {
                        firstname: true,
                        middlename: true,
                        lastname: true,
                        email: true,
                    },
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