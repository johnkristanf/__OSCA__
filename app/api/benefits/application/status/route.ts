import prisma from '@/prisma/prisma'
import { PUTApiResponse } from '@/types/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
    try {
        const status = await prisma.status.findMany({
            select: {
                id: true,
                name: true,
            },
        })

        return NextResponse.json(status, { status: 200 })
    } catch (error) {
        console.error('GET /api/seniors/category error:', error)
        return NextResponse.json(
            { success: false, message: 'Failed to fetch senior categories', error: String(error) },
            { status: 500 }
        )
    }
}

export async function PUT(request: NextRequest) {
    try {
        const res = await request.json()
        console.log('res body json: ', res)

        const updatedApplictionStatus = await prisma.applications.update({
            where: { id: res.application_id },
            data: {
                status_id: res.status_id,
            },
        })

        const resp: PUTApiResponse = {
            data: updatedApplictionStatus,
            msg: 'Application Status Updated',
            code: 200
        }

        return NextResponse.json(resp, { status: 200 })
    } catch (error) {
        console.error('PUT /api/benefits/application/status error:', error)
        return NextResponse.json(
            {
                success: false,
                message: 'Failed to updating application status',
                error: String(error),
            },
            { status: 500 }
        )
    }
}
