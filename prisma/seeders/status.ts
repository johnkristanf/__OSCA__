import prisma from "../prisma"

export async function seedStatuses() {
    const remarks = ['PENDING', 'APPROVED', 'REJECT']

    await Promise.all(
        remarks.map((name) =>
            prisma.status.upsert({
                where: { name },
                update: {},
                create: { name },
            })
        )
    )
}
