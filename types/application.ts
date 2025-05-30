import { RegistrationDocument } from "./seniors"

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
        // You might want to include benefit_requirements here as well if you plan to use it for display
        // benefit_requirements?: { name: string; id: number }[]
    }
    senior: {
        firstname: string
        middlename: string
        lastname: string
        email: string
        // ADD THIS LINE TO INCLUDE DOCUMENTS IN THE SENIOR OBJECT OF AN APPLICATION
        documents: RegistrationDocument[] // This is the crucial addition!
    }
    status: {
        name: string
    }
    category: {
        name: string
    } | null
}


export type UpdateCategoryData = {
    application_id: number,
    category_id: number
}


export type UpdateStatusData = {
    application_id: number,
    status_id: number
}