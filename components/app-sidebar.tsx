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
import { faFile, faGear, faPersonCane } from '@fortawesome/free-solid-svg-icons'
import { useSession } from 'next-auth/react'

// This is sample data.
const data = {
    collapsNav: [
        {
            title: 'Senior Citizen',
            icon: faPersonCane,
            isActive: true,
            items: [
                {
                    title: 'Record',
                    url: '/admin/senior-citizen/record',
                },
                {
                    title: 'Documents',
                    url: '/admin/senior-citizen/documents',
                },
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
                },
                {
                    title: 'Applicants',
                    url: '/admin/applications/applicants',
                },
                
            ],
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

    return (
        <Sidebar
            collapsible="icon"
            {...props}
        >
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

            <SidebarContent >
                <SidebarMenuButton>
                    <LayoutDashboard />
                    <a href={'/admin/dashboard'}>
                        <span>Dashboard</span>
                    </a>
                </SidebarMenuButton>

                <CollapsibleNavLinks items={data.collapsNav} />
                {/* <NavProjects projects={data.projects} /> */}
            </SidebarContent>

            <SidebarFooter>
                {status === 'loading' ? (
                    <div className="p-4 text-sm text-gray-500">Loading user...</div>
                ) : session?.user ? (
                    <NavUser user={session.user} />
                ) : (
                    <div className="p-4 text-sm text-gray-500">No user session found.</div>
                )}
            </SidebarFooter>

            <SidebarRail />
        </Sidebar>
    )
}
