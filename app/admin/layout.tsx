'use client'

import { AppSidebar } from '@/components/app-sidebar'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

import { usePathname } from 'next/navigation'
import { formatSegment } from '@/utils/segment'
import { SessionProvider } from 'next-auth/react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const pathSegments = pathname.split('/').filter(Boolean)

    return (
        <SidebarProvider>
            {/* SIDEBAR */}
            <AppSidebar />

            <SidebarInset>
                <header className="bg-green-600 text-white w-full flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />

                        <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4"
                        />

                        <Breadcrumb>
                            <BreadcrumbList className="flex flex-wrap items-center gap-1">
                                {pathSegments.map((segment, index) => {
                                    const href = '/' + pathSegments.slice(0, index + 1).join('/')
                                    const isLast = index === pathSegments.length - 1

                                    return (
                                        <div
                                            key={href}
                                            className="flex items-center gap-1 text-white"
                                        >
                                            <BreadcrumbItem>
                                                {isLast ? (
                                                    <BreadcrumbPage className="text-white">
                                                        {formatSegment(segment)}
                                                    </BreadcrumbPage>
                                                ) : (
                                                    <BreadcrumbLink
                                                        href={href}
                                                        className="text-white"
                                                    >
                                                        {formatSegment(segment)}
                                                    </BreadcrumbLink>
                                                )}
                                            </BreadcrumbItem>
                                            
                                            {!isLast && <BreadcrumbSeparator />}
                                        </div>
                                    )
                                })}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>

                {/* MAIN PANEL CONTENTS */}
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0 ">{children}</div>
            </SidebarInset>
        </SidebarProvider>
    )
}
