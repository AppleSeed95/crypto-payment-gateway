"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown, BadgeDollarSign, CreditCard, Wallet, Plug, Wrench, BookOpen, HelpCircle, MessageCircle, Shield, Phone, Menu, X, LogIn, UserPlus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

const MenuItem = ({ title, items, isScrolled, isMobile, onItemClick }: { title: string; items: { name: string; href: string; description: string; icon: React.ElementType }[]; isScrolled: boolean; isMobile: boolean; onItemClick?: () => void }) => {
    const [isOpen, setIsOpen] = useState(false)

    if (isMobile) {
        return (
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full justify-between">
                        {title}
                        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
                    </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    {items.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900 hover:text-blue-500"
                            onClick={onItemClick}
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
                </CollapsibleContent>
            </Collapsible>
        )
    }

    return (
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
}

export default function Navbar({ welcomeMode }: { welcomeMode?: boolean }) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

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
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/" className="flex-shrink-0 flex items-center space-x-2">
                                <BadgeDollarSign className={`w-8 h-8 ${isScrolled ? 'text-blue-500' : 'text-white'} transition-colors duration-300`} />
                                <span className={`text-xl font-bold ${isScrolled ? 'text-blue-500' : 'text-white dark:text-white'} transition-colors duration-300`}>StellarPay</span>
                            </Link>
                        </div>
                        <div className="hidden md:flex justify-center items-center">
                            <div className="ml-6 flex items-center space-x-8">
                                {menuItems.map((item) => (
                                    <MenuItem key={item.title} title={item.title} items={item.items} isScrolled={isScrolled} isMobile={false} />
                                ))}
                                <Link href="/" className="flex items-center">
                                    <Button variant="ghost" className={`text-sm font-medium ${isScrolled ? 'text-blue-500 hover:text-blue-200' : 'text-white dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'} transition-colors duration-300`}>
                                        Pricing
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center space-x-4">
                            <Link href="/login">
                                <Button variant={isScrolled ? "ghost" : "ghost"} className={`${isScrolled ? 'bg-white text-blue-500 hover:bg-blue-50' : 'border-blue-500 text-white hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900'} transition-colors duration-300`}>Login</Button>
                            </Link>
                            <Link href="/signup">
                                <Button className={`${isScrolled ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-white shadow-none text-blue-500 hover:bg-blue-50'} transition-colors duration-300`}>Sign Up</Button>
                            </Link>
                        </div>
                        <div className="flex items-center md:hidden">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsSidebarOpen(true)}
                                aria-label="Open menu"
                            >
                                <Menu className={`w-6 h-6 ${isScrolled ? 'text-blue-500' : 'text-white'}`} />
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar */}
            {isSidebarOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
                    <div className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out">
                        <div className="flex justify-between items-center p-4 border-b">
                            <Link href="/" className="flex items-center space-x-2" onClick={() => setIsSidebarOpen(false)}>
                                <BadgeDollarSign className="w-8 h-8 text-blue-500" />
                                <span className="text-xl font-bold text-blue-500">StellarPay</span>
                            </Link>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsSidebarOpen(false)}
                                aria-label="Close menu"
                            >
                                <X className="w-6 h-6 text-gray-500" />
                            </Button>
                        </div>
                        <ScrollArea className="h-full">
                            <div className="p-4">
                                {menuItems.map((item) => (
                                    <div key={item.title} className="mb-4">
                                        <MenuItem
                                            title={item.title}
                                            items={item.items}
                                            isScrolled={isScrolled}
                                            isMobile={true}
                                            onItemClick={() => setIsSidebarOpen(false)}
                                        />
                                    </div>
                                ))}
                                <div className='px-4'>
                                    <Link href="/" className="block py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900 hover:text-blue-500" onClick={() => setIsSidebarOpen(false)}>
                                        Pricing
                                    </Link>
                                </div>
                                <div className="mt-6 flex justify-center space-x-4">
                                    <Link href="/login">
                                        <Button variant="ghost" size="icon" className="text-blue-500 hover:bg-blue-50" onClick={() => setIsSidebarOpen(false)}>
                                            <LogIn className="w-5 h-5" />
                                            <span className="sr-only">Login</span>
                                        </Button>
                                    </Link>
                                    <Link href="/signup">
                                        <Button variant="ghost" size="icon" className="text-blue-500 hover:bg-blue-50" onClick={() => setIsSidebarOpen(false)}>
                                            <UserPlus className="w-5 h-5" />
                                            <span className="sr-only">Sign Up</span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </ScrollArea>
                    </div>
                </div>
            )}
        </>
    )
}