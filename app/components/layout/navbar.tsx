'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown, Sun, Moon, BadgeDollarSign, CreditCard, Wallet, Plug, Wrench, BookOpen, HelpCircle, MessageCircle, Shield, Phone } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Toggle } from '@/components/ui/toggle'

const MenuItem = ({ title, items }: { title: string; items: { name: string; href: string; description: string; icon: React.ElementType }[] }) => (
    <div className="relative group">
        <button className="dark:text-gray-300 flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-blue-500">
            <span>{title}</span>
            <ChevronDown className="w-4 h-4" />
        </button>
        <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <div className="py-1">
                {items.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900 hover:text-blue-500"
                    >
                        <div className="flex items-center">
                            <item.icon className="w-5 h-5 mr-3 text-blue-500" />
                            <div>
                                <div className="font-medium">{item.name}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">{item.description}</div>
                            </div>
                        </div>
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
                { name: 'Crypto Payment Gateway', href: '/products/payment-gateway', description: 'Accept crypto payments easily', icon: CreditCard },
                { name: 'Crypto Wallet', href: '/products/wallet', description: 'Secure storage for your assets', icon: Wallet },
            ],
        },
        {
            title: 'Connect',
            items: [
                { name: 'API', href: '/connect/api', description: 'Integrate our services into your app', icon: Plug },
                { name: 'Integration Solution', href: '/connect/integration', description: 'Custom solutions for your business', icon: Wrench },
            ],
        },
        {
            title: 'Learn',
            items: [
                { name: 'Blog', href: '/learn/blog', description: 'Latest news and articles', icon: BookOpen },
                { name: 'FAQ', href: '/learn/faq', description: 'Frequently asked questions', icon: HelpCircle },
                { name: 'Help', href: '/learn/help', description: 'Get support and guidance', icon: MessageCircle },
            ],
        },
        {
            title: 'Company',
            items: [
                { name: 'Security', href: '/company/security', description: 'Our commitment to your safety', icon: Shield },
                { name: 'Contact Us', href: '/company/contact', description: 'Get in touch with our team', icon: Phone },
            ],
        },
    ]

    return (
        <nav className="bg-white dark:bg-gray-800 shadow-lg py-1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="w-[30%] flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center space-x-2">
                            <BadgeDollarSign className="w-8 h-8 text-blue-500" />
                            <span className="text-xl font-bold text-gray-900 dark:text-white">StellarPay</span>
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