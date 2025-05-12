import bcrypt from 'bcryptjs'

export async function hashPassword(password: string, saltRounds: number) {
    return await bcrypt.hash(password, saltRounds)
}

export async function comparePassword(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword)
}
