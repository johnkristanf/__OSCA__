'use client'

import * as React from 'react'
import { LayoutDashboard } from 'lucide-react'

import { CollapsibleNavLinks } from '@/components/collapsible-navlink'
import { NavUser } from '@/components/nav-user'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenuButton,
    SidebarRail,
} from '@/components/ui/sidebar'

import Image from 'next/image'
import {
    faFile,
    faGear,
    faMoneyBillWave,
    faPersonCane,
    IconDefinition,
} from '@fortawesome/free-solid-svg-icons' // Import IconDefinition
import { useSession } from 'next-auth/react'

// --- Define your types here ---

// This type represents a single sub-item in the navigation
interface NavSubItem {
    title: string
    url: string
    roles?: string[] // Make 'roles' optional
}

// This type represents a main collapsible navigation item
interface CollapsibleNavItem {
    title: string
    icon: IconDefinition
    isActive?: boolean // isActive is optional
    url: string
    items: NavSubItem[]
    roles?: string[] // Make 'roles' optional for parent items too
}

// --- End Type Definitions ---

// This is sample data.
const data: { collapsNav: CollapsibleNavItem[] } = {
    // Explicitly type data
    collapsNav: [
        {
            title: 'Senior Citizen',
            icon: faPersonCane,
            isActive: true,
            url: '#',
            items: [
                {
                    title: 'Record',
                    url: '/admin/senior-citizen/record',
                },
                // {
                //     title: 'Documents',
                //     url: '/admin/senior-citizen/documents',
                // },
            ],
        },
        {
            title: 'Applications',
            url: '#',
            icon: faFile,
            items: [
                {
                    title: 'Benefits',
                    url: '/admin/applications/benefits',
                    // roles: ['ADMIN'], // Use 'ADMIN' to match your enum
                },
                {
                    title: 'Applicants',
                    url: '/admin/applications/applicants',
                },
            ],
        },
        {
            title: 'Monitoring',
            url: '#',
            icon: faMoneyBillWave,
            items: [
                {
                    title: 'Financial',
                    url: '/admin/applications/financial-monitoring',
                },
            ],
            roles: ['ADMIN'], // Use 'ADMIN' to match your enum
        },

        {
            title: 'Settings',
            url: '#',
            icon: faGear,
            items: [
                {
                    title: 'General',
                    url: '#',
                },
                {
                    title: 'Team',
                    url: '#',
                },
                {
                    title: 'Billing',
                    url: '#',
                },
                {
                    title: 'Limits',
                    url: '#',
                },
            ],
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { data: session, status } = useSession()

    // Assuming your session.user object has a 'role' property, e.g., 'ADMIN', 'USER', etc.
    // Ensure the default role matches your Prisma enum, e.g., 'USER'
    const userRole = (session?.user as any)?.role || 'USER'

    // Filter the navigation data based on the user's role
    const filteredNav = data.collapsNav
        .map((navItem) => {
            // Filter sub-items first
            const filteredItems = navItem.items.filter((item) => {
                // If an item has 'roles' defined, check if the user's role is included
                if (item.roles) {
                    return item.roles.includes(userRole)
                }
                return true // If no roles defined, show to everyone
            })

            // If the parent navItem itself has roles, and the user doesn't have the role,
            // or if all its children were filtered out (making it empty), hide the parent.
            if (navItem.roles && !navItem.roles.includes(userRole)) {
                return null // Hide the entire parent if user doesn't have the required role
            }

            // If the parent item has items, and all its items were filtered out, also hide the parent.
            if (navItem.items && filteredItems.length === 0 && navItem.items.length > 0) {
                return null
            }

            return {
                ...navItem,
                items: filteredItems,
            }
        })
        .filter(Boolean) as CollapsibleNavItem[] // Remove any null entries (hidden parent items) and cast back to the correct type

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                    <div className="flex items-center gap-2">
                        <Image
                            src={'/img/cthall-logo.jpg'}
                            width={30}
                            height={30}
                            alt="OSCA Logo"
                            className="rounded-full"
                        />

                        <div className="flex flex-col">
                            <span className="truncate font-medium">OSCA</span>
                            <span className="truncate text-xs">Government</span>
                        </div>
                    </div>
                </SidebarMenuButton>
            </SidebarHeader>

            <SidebarContent>
                <SidebarMenuButton>
                    <LayoutDashboard />
                    <a href={'/admin/dashboard'}>
                        <span>Dashboard</span>
                    </a>
                </SidebarMenuButton>

                {/* Pass the filtered navigation data */}
                <CollapsibleNavLinks items={filteredNav} />
            </SidebarContent>

            <SidebarFooter>
                {status === 'loading' ? (
                    <div className="p-4 text-sm text-gray-500">Loading user...</div>
                ) : session?.user ? (
                    <NavUser
                        user={{
                            name: session.user.name ?? '',
                            email: session.user.email ?? '',
                            username:
                                (session.user as any).username ??
                                session.user.name?.split(' ').join('').toLowerCase() ??
                                '',
                            role: (session.user as any).role ?? 'USER',
                        }}
                    />
                ) : (
                    <div className="p-4 text-sm text-gray-500">No user session found.</div>
                )}
            </SidebarFooter>

            <SidebarRail />
        </Sidebar>
    )
}
