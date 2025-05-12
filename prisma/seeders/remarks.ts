import prisma from "../prisma"

export async function seedRemarks() {
    const remarks = ['NEW', 'TRANSFER', 'UPDATED', 'DECEASED']

    await Promise.all(
        remarks.map((name) =>
            prisma.remarks.upsert({
                where: { name },
                update: {},
                create: { name },
            })
        )
    )
}
