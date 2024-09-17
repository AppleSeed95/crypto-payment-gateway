'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown, Sun, Moon, BadgeDollarSign } from 'lucide-react'
// import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Toggle } from '@/components/ui/toggle'

const MenuItem = ({ title, items }: { title: string; items: { name: string; href: string }[] }) => (
    <div className="relative group">
        <button className="dark:text-gray-300 flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-blue-500">
            <span>{title}</span>
            <ChevronDown className="w-4 h-4" />
        </button>
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <div className="py-1">
                {items.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-500"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    </div>
)

export default function Navbar() {
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

    const menuItems = [
        {
            title: 'Products',
            items: [
                { name: 'Crypto Payment Gateway', href: '/products/payment-gateway' },
                { name: 'Crypto Wallet', href: '/products/wallet' },
            ],
        },
        {
            title: 'Connect',
            items: [
                { name: 'API', href: '/connect/api' },
                { name: 'Integration Solution', href: '/connect/integration' },
            ],
        },
        {
            title: 'Learn',
            items: [
                { name: 'Blog', href: '/learn/blog' },
                { name: 'FAQ', href: '/learn/faq' },
                { name: 'Help', href: '/learn/help' },
            ],
        },
        {
            title: 'Company',
            items: [
                { name: 'Security', href: '/company/security' },
                { name: 'Contact Us', href: '/company/contact' },
            ],
        },
    ]

    return (
        <nav className="bg-white dark:bg-gray-800 shadow py-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="w-[30%] flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <BadgeDollarSign />
                            {/* <Image className="h-8 w-auto" src="/img/logo.png" width={150} height={150} alt="Logo" /> */}
                        </Link>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="hidden sm:ml-6 sm:flex items-center sm:space-x-8">
                            {menuItems.map((item) => (
                                <MenuItem key={item.title} title={item.title} items={item.items} />
                            ))}
                            <Link href="/pricing" className="flex items-center">
                                <Button variant="ghost" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                                    Pricing
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="w-[30%] flex justify-end items-center space-x-4">
                        <Toggle
                            aria-label="Toggle theme"
                            pressed={theme === 'dark'}
                            onPressedChange={toggleTheme}
                        >
                            {theme === 'light' ? (
                                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            ) : (
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            )}
                            <span className="sr-only">Toggle theme</span>
                        </Toggle>
                        <Link href="/login">
                            <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900">Login</Button>
                        </Link>
                        <Link href="/signup">
                            <Button className="bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">Sign Up</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}