'use client'

import { Button } from "@/components/ui/button"
import { KeyRound, Eye, IdCard, UsersRound, Smartphone, KeySquare, ShieldCheck, Puzzle, MapPinHouse, RefreshCcwDot, Fingerprint, Database } from "lucide-react"

export default function SecurityPage() {
    return (
        <div className="relative">
            <div className="bg-[#4574eb] pt-20 md:pt-40 pb-16 md:pb-32 text-white text-center px-4"
                style={{
                    borderBottomLeftRadius: '100% 100%',
                    borderBottomRightRadius: '100% 100%'
                }}
            >
                <div className="text-2xl md:text-3xl font-bold mb-6 md:mb-10">Security</div>
                <div className="max-w-2xl mx-auto">
                    Learn everything about your funds safety
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-4 justify-center py-10 md:py-20 px-4">
                {[
                    { icon: KeyRound, title: "SSL connection", description: "Encrypted SSL connection via HTTPS protocol, two-factor authentication, trusted IP addresses." },
                    { icon: Eye, title: "Privacy", description: "We store transaction information exactly as long as it is required to make a payment, and then delete it." },
                    { icon: IdCard, title: "Anonymity", description: "We respect the confidentiality of our customers and do not require proof of identity. Your payments remain anonymous." }
                ].map((item, index) => (
                    <div key={index} className="text-center py-6 md:py-10">
                        <div className="flex justify-center text-[40px] md:text-[50px]">
                            <item.icon className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] text-blue-500" />
                        </div>
                        <div className="text-xl md:text-2xl font-bold text-[#2b2d31] mt-4">
                            {item.title}
                        </div>
                        <div className="text-sm md:text-base text-[#828cc0] mt-2">
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center px-4">
                <div className="bg-[#f5f6fa] p-4 md:p-6 rounded-lg flex gap-2 items-center">
                    <UsersRound className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] text-blue-500 flex-shrink-0" />
                    <div className="text-sm md:text-base">
                        <div>Start accepting cryptocurrency and</div>
                        <div>increase <span className="text-blue-500">your clients base up to 23%</span></div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row py-10 md:py-20 gap-10 md:gap-20 justify-center w-full md:w-[90vw] lg:w-[70vw] mx-auto px-4">
                <div className="w-full md:w-1/2">
                    <div className="text-2xl md:text-4xl text-[#2b2d31] font-bold py-4">
                        How to enhance your security
                    </div>
                    <div className="text-sm md:text-base text-[#828cc0]">
                        Follow simple tips to increase security
                    </div>
                    <div className="flex flex-col gap-8 py-10 md:py-20">
                        {[
                            { icon: Smartphone, title: "Use 2-FA", description: "Connect the two-factor authentication option in your personal account. With it, you can protect your account from unauthorized access." },
                            { icon: KeySquare, title: "Do not store data online", description: "We strongly recommend you to store your passwords at the offline storage, and even better on a physical drive. So you protect your data from intruders and protect your account." },
                            { icon: ShieldCheck, title: "Use security software", description: "If the device which you are working from with the service is not protected by antivirus, you risk falling victim to phishing or other fraudulent activities. Install security software on your computer or other device to avoid such problems." }
                        ].map((item, index) => (
                            <div key={index} className="flex gap-4">
                                <item.icon className="min-w-[30px] min-h-[30px] md:min-w-[50px] md:min-h-[50px] text-blue-500" />
                                <div>
                                    <div className="font-bold text-lg md:text-2xl">{item.title}</div>
                                    <div className="text-sm md:text-base text-[#828cc0]">{item.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="text-2xl md:text-4xl text-[#2b2d31] font-bold py-4">
                        Security for developers
                    </div>
                    <div className="text-sm md:text-base text-[#828cc0]">
                        Carefully approach your site`s security
                    </div>
                    <div className="flex flex-col gap-8 py-10 md:py-20">
                        {[
                            { icon: Puzzle, title: "API keys", description: "Your API keys are personal information that can help attackers impersonate you. Never share your API keys with third parties." },
                            { icon: MapPinHouse, title: "Trusted IPs", description: "Use the trusted IPs feature in your personal account. So you can restrict access to your account. Only the specified IP addresses will be able to log in to the account." },
                            { icon: RefreshCcwDot, title: "Monitor your security", description: "Always monitor the security status of your system and all connected applications. Use only the latest versions of software and services to avoid errors that have already been fixed, and which intruders could use." }
                        ].map((item, index) => (
                            <div key={index} className="flex gap-4">
                                <item.icon className="min-w-[30px] min-h-[30px] md:min-w-[50px] md:min-h-[50px] text-blue-500" />
                                <div>
                                    <div className="font-bold text-lg md:text-2xl">{item.title}</div>
                                    <div className="text-sm md:text-base text-[#828cc0]">{item.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-[#f5f6fa] py-10 md:py-20 flex justify-center text-center px-4">
                <div className="max-w-3xl">
                    <div className="w-full flex justify-center">
                        <ShieldCheck className="min-w-[40px] min-h-[40px] md:min-w-[50px] md:min-h-[50px] text-blue-500" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold py-4 md:py-6">SSL Technology</div>
                    <div className="text-sm md:text-base text-center text-[#828cc0]">
                        SSL protects your information using both server authentication and data encryption.
                        We use TLS with at least 128-bit AES encryption. Connection uses TLS v1.2.
                        It is encrypted and the user uses AES_128_GCM_SHA256 and ECDHE_RSA as the key exchange mechanism.
                    </div>
                </div>
            </div>

            <div className="py-10 md:py-20 text-center px-4">
                <div className="text-2xl md:text-3xl font-bold">
                    Ensuring your safety
                </div>
                <div className="text-sm md:text-base text-[#828cc0] py-6 md:py-10">
                    We use all available methods to ensure the safety of you and your funds
                </div>
                <div className="flex flex-col md:flex-row gap-6 md:gap-4">
                    {[
                        { icon: ShieldCheck, title: "Security", description: "We use innovative methods of information protection, machine learning and always strive to improve the security system and maintain its full working capacity." },
                        { icon: Fingerprint, title: "Anonymity", description: "We appreciate and take care that our clients can maintain anonymity and confidentiality using our service." },
                        { icon: Database, title: "Cold Storage", description: "90% of all funds are stored on \"cold\" wallets. What makes their theft impossible and significantly increases the degree of funds protection." }
                    ].map((item, index) => (
                        <div key={index} className="bg-gray-100 rounded-md p-6 md:p-10 w-full">
                            <div className="flex justify-center">
                                <item.icon className="min-w-[40px] min-h-[40px] md:min-w-[50px] md:min-h-[50px] text-blue-500" />
                            </div>
                            <div className="text-xl md:text-2xl font-bold py-4">
                                {item.title}
                            </div>
                            <div className="text-sm md:text-base text-[#828cc0]">
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="py-10 md:py-20 bg-[#f5f6fa] flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 w-full px-4">
                <div className="flex justify-center max-w-full md:max-w-[50vw]">
                    <div>
                        <div className="text-2xl md:text-3xl font-bold">
                            Take your business to the next level
                        </div>
                        <div className="text-sm md:text-base text-[#828cc0] py-4">
                            Connect to Plisio and start accepting 10+ cryptocurrencies on your website today
                        </div>
                        <div className="text-xs md:text-sm text-[#828cc0]">
                            Sign up for free in 2 clicks • Easy setup in 2 minutes • Tech support 24/7
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <Button className="bg-blue-500 w-full md:w-auto">Make the first Step</Button>
                </div>
            </div>
        </div>
    )
}