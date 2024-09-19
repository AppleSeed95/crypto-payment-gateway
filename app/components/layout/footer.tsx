'use client'
import Link from "next/link"
import { Facebook, Youtube, Github } from "lucide-react"
import { WithAnimation } from "../other/animated-element"
export default function Footer() {
    return (
        <footer className="bg-[#2b2d31] text-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Products Menu */}
                    <div>
                        <WithAnimation mode="up">
                            <h3 className="font-bold text-lg mb-4">Products</h3>
                        </WithAnimation>
                        <ul className="space-y-2">
                            {["Business", "Personal", "Pricing", "Mass Payouts", "White Label", "Invoices", "Donations", "Integrations"].map((item, idx) => (
                                <WithAnimation key={idx} delay={0.2 * idx} mode="up">
                                    <li key={item}>
                                        <Link href="#" className="text-gray-300 hover:text-blue-500">
                                            {item}
                                        </Link>
                                    </li>
                                </WithAnimation>
                            ))}

                        </ul>
                    </div>

                    {/* Resources Menu */}
                    <div>
                        <WithAnimation mode="up">

                            <h3 className="font-bold text-lg mb-4">Resources</h3>
                        </WithAnimation>

                        <ul className="space-y-2">
                            {["API", "Blog", "Security", "Bug Bounty", "FAQ", "Contact Us"].map((item, idx) => (
                                <WithAnimation key={idx} delay={0.2 * idx} mode="up">

                                    <li key={item}>
                                        <Link href="#" className="text-gray-300 hover:text-blue-500">
                                            {item}
                                        </Link>
                                    </li>
                                </WithAnimation>
                            ))}
                        </ul>
                    </div>

                    {/* Policy Menu */}
                    <div>
                        <WithAnimation mode="up">

                            <h3 className="font-bold text-lg mb-4">Policy</h3>
                        </WithAnimation>

                        <ul className="space-y-2">
                            {["Privacy Policy", "Terms Of Service"].map((item, idx) => (
                                <WithAnimation key={idx} delay={0.2 * idx} mode="up">

                                    <li key={item}>
                                        <Link href="#" className="text-gray-300 hover:text-blue-500">
                                            {item}
                                        </Link>
                                    </li>
                                </WithAnimation>

                            ))}
                        </ul>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <WithAnimation mode="up">

                            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                        </WithAnimation>
                        <WithAnimation mode="up">
                            <div className="flex space-x-4">
                                <Link href="#" className="text-gray-600 hover:text-gray-900">
                                    <Facebook size={24} />
                                    <span className="sr-only">Facebook</span>
                                </Link>
                                <Link href="#" className="text-gray-600 hover:text-gray-900">
                                    <Youtube size={24} />
                                    <span className="sr-only">YouTube</span>
                                </Link>
                                {/* <Link href="#" className="text-gray-600 hover:text-gray-900">
                                <Youtube size={24} />
                                <span className="sr-only">TikTok</span>
                            </Link> */}
                                <Link href="#" className="text-gray-600 hover:text-gray-900">
                                    <Github size={24} />
                                    <span className="sr-only">GitHub</span>
                                </Link>
                            </div>
                        </WithAnimation>
                    </div>
                </div>

                {/* Copyright */}
                <WithAnimation mode="up">
                    <div className="mt-12 text-center text-gray-400">
                        © 2024 Stellarpay. All Rights Reserved.
                    </div>
                </WithAnimation>
            </div>
        </footer>
    )
}