// components/notification-dropdown.tsx
'use client'

import * as React from 'react'
import { BellRing } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ScrollArea } from '@/components/ui/scroll-area' // Import ScrollArea for long lists

export function NotificationDropdown() {
    // Static notifications for demonstration
    const notifications = [
        {
            id: '1',
            type: 'senior_pending',
            message: 'Juan Dela Cruz - Senior Citizen pending verification.',
            timestamp: '2025-05-29T10:00:00Z',
            link: '/admin/senior-citizen/record?filter=pending&seniorId=123', // Example link
        },
        {
            id: '2',
            type: 'senior_pending',
            message: 'Maria Clara - Senior Citizen pending verification.',
            timestamp: '2025-05-28T15:30:00Z',
            link: '/admin/senior-citizen/record?filter=pending&seniorId=456',
        },
        {
            id: '3',
            type: 'release_approved',
            message: 'Benefits released for Pedro Penduko.',
            timestamp: '2025-05-27T09:00:00Z',
            link: '/admin/applications/release-monitoring?status=released',
        },
        {
            id: '4',
            type: 'senior_pending',
            message: 'Jose Rizal - Senior Citizen pending verification.',
            timestamp: '2025-05-29T10:00:00Z',
            link: '/admin/senior-citizen/record?filter=pending&seniorId=123', // Example link
        },
        {
            id: '5',
            type: 'senior_pending',
            message: 'Gregorio del Pilar - Senior Citizen pending verification.',
            timestamp: '2025-05-28T15:30:00Z',
            link: '/admin/senior-citizen/record?filter=pending&seniorId=456',
        },
        {
            id: '6',
            type: 'release_approved',
            message: 'Benefits released for Apolinario Mabini.',
            timestamp: '2025-05-27T09:00:00Z',
            link: '/admin/applications/release-monitoring?status=released',
        },
        {
            id: '7',
            type: 'senior_pending',
            message: 'Lapu-Lapu - Senior Citizen pending verification.',
            timestamp: '2025-05-29T10:00:00Z',
            link: '/admin/senior-citizen/record?filter=pending&seniorId=123', // Example link
        },
        {
            id: '8',
            type: 'senior_pending',
            message: 'Gabriela Silang - Senior Citizen pending verification.',
            timestamp: '2025-05-28T15:30:00Z',
            link: '/admin/senior-citizen/record?filter=pending&seniorId=456',
        },
        {
            id: '9',
            type: 'release_approved',
            message: 'Benefits released for Tandang Sora.',
            timestamp: '2025-05-27T09:00:00Z',
            link: '/admin/applications/release-monitoring?status=released',
        },
    ]

    // Calculate pending seniors count (static for now, but will be dynamic with real data)
    const pendingSeniorsCount = notifications.filter(
        (notif) => notif.type === 'senior_pending'
    ).length

    // Function to format timestamp (you can use your existing formatDateTime if preferred)
    const formatTimeAgo = (timestamp: string) => {
        const date = new Date(timestamp);
        const now = new Date();
        const diffSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

        if (diffSeconds < 60) return `${diffSeconds}s ago`;
        const diffMinutes = Math.floor(diffSeconds / 60);
        if (diffMinutes < 60) return `${diffMinutes}m ago`;
        const diffHours = Math.floor(diffMinutes / 60);
        if (diffHours < 24) return `${diffHours}h ago`;
        const diffDays = Math.floor(diffHours / 24);
        if (diffDays < 7) return `${diffDays}d ago`;
        // Fallback to a simple date for older notifications
        return date.toLocaleDateString();
    };


    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative text-white hover:bg-white/20 hover:text-white">
                    <BellRing className="h-5 w-5" />
                    {pendingSeniorsCount > 0 && (
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                            {pendingSeniorsCount}
                        </span>
                    )}
                    <span className="sr-only">Notifications</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[300px] p-0" align="end" forceMount>
                <DropdownMenuLabel className="font-semibold text-lg p-3">Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <ScrollArea className="h-[300px]"> {/* Max height for scrollable content */}
                    <DropdownMenuGroup>
                        {notifications.length > 0 ? (
                            notifications.map((notification) => (
                                <DropdownMenuItem key={notification.id} asChild>
                                    <a
                                        href={notification.link}
                                        className="flex flex-col items-start gap-1 p-3 hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors duration-200"
                                    >
                                        <div className="font-medium text-sm">{notification.message}</div>
                                        <div className="text-xs text-muted-foreground">
                                            {formatTimeAgo(notification.timestamp)}
                                        </div>
                                    </a>
                                </DropdownMenuItem>
                            ))
                        ) : (
                            <DropdownMenuItem className="py-4 text-center text-muted-foreground justify-center">
                                No new notifications.
                            </DropdownMenuItem>
                        )}
                    </DropdownMenuGroup>
                </ScrollArea>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <a href="/admin/notifications" className="block text-center text-sm p-2 text-primary hover:bg-accent hover:text-accent-foreground cursor-pointer">
                        View All Notifications
                    </a>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}