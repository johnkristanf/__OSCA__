import prisma from "../prisma"

export async function seedSeniorCategories() {
    const categories = ['Low-income seniors', 'Regular senior citizens', 'Special assistance cases']

    await Promise.all(
        categories.map((name) =>
            prisma.seniorCategory.upsert({
                where: { name },
                update: {},
                create: { name },
            })
        )
    )
}
