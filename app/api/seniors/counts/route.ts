import prisma from '@/prisma/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const totalSeniors = await prisma.senior.count();
        const totalPwdSeniors = await prisma.senior.count({
            where: {
                pwd: true,
            }
        });

        const specialCategory = await prisma.seniorCategory.findUnique({
            where: { name: 'Special assistance cases' },
            select: { id: true },
        });

        const regularCategory = await prisma.seniorCategory.findUnique({
            where: { name: 'Regular senior citizens' },
            select: { id: true },
        });

        const lowIncomeCategory = await prisma.seniorCategory.findUnique({
            where: { name: 'Low-income seniors' },
            select: { id: true },
        });

        const specialSeniorsCount = specialCategory
            ? await prisma.applications.count({
                  where: { category_id: specialCategory.id },
              })
            : 0;

        const regularSeniorsCount = regularCategory
            ? await prisma.applications.count({
                  where: { category_id: regularCategory.id },
              })
            : 0;

        const lowIncomeSeniorsCount = lowIncomeCategory
            ? await prisma.applications.count({
                  where: { category_id: lowIncomeCategory.id },
              })
            : 0;

        return NextResponse.json(
            {
                totalSeniors,
                totalPwdSeniors,
                categoryCounts: {
                    Special: specialSeniorsCount,
                    Regular: regularSeniorsCount,
                    LowIncome: lowIncomeSeniorsCount,
                },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('GET /api/seniors/counts error:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Failed to fetch senior counts',
                error: String(error),
            },
            { status: 500 }
        );
    }
}