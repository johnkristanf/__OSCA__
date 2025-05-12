import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { LucideIcon } from 'lucide-react'

export type CollapsibleLinks = {
    title: string
    url: string
    icon?: any
    isActive?: boolean
    items?: {
        title: string
        url: string
    }[]
}
