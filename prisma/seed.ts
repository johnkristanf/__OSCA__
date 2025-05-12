import { hashPassword } from '@/utils/password'
import prisma from './prisma'
import bcrypt from 'bcryptjs'
import { seedAdmin } from './seeders/user'
import { seedRemarks } from './seeders/remarks'

async function main() {
    await seedAdmin()
    await seedRemarks()
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
