'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown, BadgeDollarSign, CreditCard, Wallet, Plug, Wrench, BookOpen, HelpCircle, MessageCircle, Shield, Phone } from 'lucide-react'

import { Button } from '@/components/ui/button'

const MenuItem = ({ title, items, isScrolled }: { title: string; items: { name: string; href: string; description: string; icon: React.ElementType }[]; isScrolled: boolean }) => (
    <div className="relative group">
        <button className={`flex items-center space-x-1 text-sm font-medium ${isScrolled ? 'text-blue-500' : 'text-white dark:text-gray-300'} hover:text-blue-300 transition-colors duration-300`}>
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

export default function Navbar({ welcomeMode }: { welcomeMode?: boolean }) {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        if (welcomeMode) {
            setIsScrolled(true)
            return
        }

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [welcomeMode])

    const menuItems = [
        {
            title: 'Products',
            items: [
                { name: 'Crypto Payment Gateway', href: '/', description: 'Accept crypto payments easily', icon: CreditCard },
                { name: 'Crypto Wallet', href: '/', description: 'Secure storage for your assets', icon: Wallet },
            ],
        },
        {
            title: 'Connect',
            items: [
                { name: 'API', href: '/integrations', description: 'Integrate our services into your app', icon: Plug },
                { name: 'Integration Solution', href: '/integrations', description: 'Custom solutions for your business', icon: Wrench },
            ],
        },
        {
            title: 'Learn',
            items: [
                { name: 'Blog', href: '/', description: 'Latest news and articles', icon: BookOpen },
                { name: 'FAQ', href: '/', description: 'Frequently asked questions', icon: HelpCircle },
                { name: 'Help', href: '/', description: 'Get support and guidance', icon: MessageCircle },
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
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="w-[30%] flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center space-x-2">
                            <BadgeDollarSign className={`w-8 h-8 ${isScrolled ? 'text-blue-500' : 'text-white'} transition-colors duration-300`} />
                            <span className={`text-xl font-bold ${isScrolled ? 'text-blue-500' : 'text-white dark:text-white'} transition-colors duration-300`}>StellarPay</span>
                        </Link>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="hidden sm:ml-6 sm:flex items-center sm:space-x-8">
                            {menuItems.map((item) => (
                                <MenuItem key={item.title} title={item.title} items={item.items} isScrolled={isScrolled} />
                            ))}
                            <Link href="/" className="flex items-center">
                                <Button variant="ghost" className={`text-sm font-medium ${isScrolled ? 'text-blue-500 hover:text-blue-200' : 'text-white dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'} transition-colors duration-300`}>
                                    Pricing
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="w-[30%] flex justify-end items-center space-x-4">
                        <Link href="/login">
                            <Button variant={isScrolled ? "ghost" : "ghost"} className={`${isScrolled ? 'bg-white text-blue-500 hover:bg-blue-50' : 'border-blue-500 text-white hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900'} transition-colors duration-300`}>Login</Button>
                        </Link>
                        <Link href="/signup">
                            <Button className={`${isScrolled ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-white shadow-none text-blue-500 hover:bg-blue-50'} transition-colors duration-300`}>Sign Up</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}