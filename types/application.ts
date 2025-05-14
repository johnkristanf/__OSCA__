export type BenefitApplicationData = {
    id: number
    benefit_id: number
    senior_id: number
    status_id: number
    category_id: number | null
    createdAt: string // ISO date string
    updatedAt: string // ISO date string
    benefit: {
        name: string
    }
    senior: {
        firstname: string
        middlename: string
        lastname: string
        email: string
    }
    status: {
        name: string
    }
    category: {
        name: string
    } | null
}
