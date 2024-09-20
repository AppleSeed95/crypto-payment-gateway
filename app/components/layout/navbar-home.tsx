'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { BadgeDollarSign, HelpCircle, Bell, User, LayoutDashboard, Settings, FileText, HelpCircle as FAQ, LogOut, Sun, Moon, Receipt, Cpu, Lightbulb } from 'lucide-react'
import { Toggle } from '@/components/ui/toggle'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

function NavItem({ href, icon: Icon, children }: { href: string; icon: React.ElementType; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm font-medium transition-colors hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md"
        >
            <Icon className="h-5 w-5 text-blue-400 hover:text-blue-400 duration-500" />
            <span>{children}</span>
        </Link>
    )
}

export default function HomeNavbar() {
    const unreadNotifications = 3;
    // const [unreadNotifications, setUnreadNotifications] = useState(3)
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
        if (savedTheme) {
            setTheme(savedTheme)
            document.documentElement.classList.toggle('dark', savedTheme === 'dark')
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        document.documentElement.classList.toggle('dark', newTheme === 'dark')
    }
    return (
        <>

            <nav className="bg-white dark:bg-gray-800 shadow-md py-2 border-b-[1px] border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="flex items-center space-x-2">
                                <BadgeDollarSign className="w-8 h-8 text-blue-500" />
                                <span className="text-xl font-bold text-gray-900 dark:text-white">StellarPay</span>
                            </Link>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Toggle
                                aria-label="Toggle theme"
                                pressed={theme === 'dark'}
                                onPressedChange={toggleTheme}
                                className='w-[50px]'
                            >
                                {theme === 'light' ? (
                                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                ) : (
                                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                )}
                                <span className="sr-only">Toggle theme</span>
                            </Toggle>
                            <Button variant="ghost" size="icon" aria-label="Help">
                                <HelpCircle className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                            </Button>
                            <Button variant="ghost" size="icon" aria-label="Notifications" className="relative">
                                <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                                {unreadNotifications > 0 && (
                                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                                        {unreadNotifications}
                                    </span>
                                )}
                            </Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="relative h-8 w-8 rounded-full">
                                        <User className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56  shadow-lg bg-white dark:bg-gray-900" align="end" forceMount>
                                    <DropdownMenuLabel className="font-normal">
                                        <div className="flex flex-col space-y-1">
                                            <p className="text-sm font-medium leading-none">John Doe</p>
                                            <p className="text-xs leading-none text-muted-foreground">john@example.com</p>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <LayoutDashboard className="mr-2 h-4 w-4" />
                                        <span>Dashboard</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Settings className="mr-2 h-4 w-4" />
                                        <span>Settings</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <FileText className="mr-2 h-4 w-4" />
                                        <span>Documentation</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <FAQ className="mr-2 h-4 w-4" />
                                        <span>FAQ</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <LogOut className="mr-2 h-4 w-4" />
                                        <span>Log out</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
            </nav>
            <header className="bg-white dark:bg-gray-800 shadow-lg z-10 relative py-2">
                <div className="container min-w-full flex h-16 items-center justify-center gap-6 px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-6 ">
                        <NavItem href="/dashboard" icon={LayoutDashboard}>
                            <span className='text-blue-400 hover:text-blue-400 duration-500'>
                                Dashboard
                            </span>
                        </NavItem>
                        <NavItem href="/transactions" icon={Receipt}>
                            <span className='text-blue-400 hover:text-blue-400 duration-500'>
                                Transactions
                            </span>
                        </NavItem>
                        <NavItem href="/api" icon={Cpu}>
                            <span className='text-blue-400 hover:text-blue-400 duration-500'>
                                API
                            </span>
                        </NavItem>
                        <NavItem href="/solutions" icon={Lightbulb}>
                            <span className='text-blue-400 hover:text-blue-400 duration-500'>
                                Solutions
                            </span>
                        </NavItem>
                        <NavItem href="/settings" icon={Settings}>
                            <span className='text-blue-400 hover:text-blue-400 duration-500'>
                                Settings
                            </span>
                        </NavItem>
                    </nav>
                </div>
            </header>
        </>

    )
}