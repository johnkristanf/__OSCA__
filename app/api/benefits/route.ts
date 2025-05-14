import { benefitFormSchema } from '@/schema/benefit/benefit.schema'
import prisma from '@/prisma/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const parsed = benefitFormSchema.parse(body)

        const { name, description, tag, requirements } = parsed

        await prisma.benefits.create({
            data: {
                name: name,
                description: description,
                tag: tag,
                benefit_requirements: {
                    create: requirements.map((req) => ({
                        name: req.name,
                    })),
                },
            },
        })

        return NextResponse.json({ msg: 'Benefit Added Successfully', code: 201 }, { status: 201 })
    } catch (error: any) {
        console.error('[CREATE_BENEFIT_ERROR]', error)
        return NextResponse.json({ msg: error.message, code: 500 }, { status: 500 })
    }
}

export async function GET() {
    try {
        const benefits = await prisma.benefits.findMany({
            select: {
                id: true,
                name: true,
                description: true,
                tag: true,
                benefit_requirements: {
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

        return NextResponse.json(benefits, { status: 200 })
    } catch (error: any) {
        console.error('[FETCH_BENEFITS_ERROR]', error)
        return NextResponse.json({ msg: 'Failed to fetch benefits', code: 500 }, { status: 500 })
    }
}
