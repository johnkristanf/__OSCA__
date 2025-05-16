export const enum RegistrationDocumentTag {
    BIRTH_CERTIFICATE = 'birth_certificate',
    CERTIFICATE_OF_RESIDENCY = 'certificate_of_residency',
    GOVERNMENT_ISSUED_ID = 'government_issued_id',
    MEMBERSHIP_CERTIFICATE = 'membership_certificate',
}

export interface SeniorsFormDataType {
    firstName: string
    middleName: string
    lastName: string
    email: string
    age: string
    birthDate: string
    gender: string
    barangay: string
    purok: string
    contactNumber: string
}

export interface RegistrationDocumentType {
    birth_certificate: File | null
    certificate_of_residency: File | null
    government_issued_id: File | null
    membership_certificate: File | null
}

export interface RegistrationDocument {
    id: number
    tag: string
    path: string
    file_name: string
    imageUrl: string
    seniors_id: number
    createdAt: string // or Date if you parse it
    updatedAt: string // or Date
}

export interface SeniorsDocuments {
    id: number
    firstname: string
    middlename?: string
    lastname: string
    email?: string
    documents: RegistrationDocument[]
}


export type Remarks = {
    id: number,
    name: string
}

export type Seniors = {
    id: number
    firstname: string
    middlename: string
    lastname: string
    email: string
    contact_no: string
    birthdate: string // You can also use Date if it's parsed
    age: string // Consider making this `number` if it's numeric
    gender: string
    barangay: string
    purok: string
    remarks: Remarks
    createdAt: string // or Date
    updatedAt: string // or Date
}


export type Categories = {
    id: number,
    name: string
}

export type Status = {
    id: number,
    name: string
}