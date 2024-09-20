import { Button } from "@/components/ui/button"
import { KeyRound, Eye, IdCard, UsersRound, Smartphone, KeySquare, ShieldCheck, Puzzle, MapPinHouse, RefreshCcwDot, Fingerprint, Database } from "lucide-react"
export default function SecurityPage() {
    return (
        <div className="relative">
            <div className="bg-[#4574eb] pt-40 pb-32 text-white text-center"
                style={{
                    borderBottomLeftRadius: '100% 100%',
                    borderBottomRightRadius: '100% 100%'
                }}
            >
                <div className="text-3xl font-bold mb-10">Security
                </div>
                <div className="max-w-2xl mx-auto px-4">
                    Learn everything about your funds safety
                </div>
            </div>
            <div className="flex gap-4 justify-center py-20">
                <div className="text-center py-10">
                    <div className="flex justify-center text-[50px]">
                        <KeyRound className="w-[50px] h-[50px] text-blue-500" />
                    </div>
                    <div className="text-2xl font-bold text-[#2b2d31]">
                        SSL connection
                    </div>
                    <div className="text-[#828cc0]">
                        Encrypted SSL connection via HTTPS protocol,
                        <div>
                            two-factor authentication, trusted IP addresses.
                        </div>
                    </div>
                </div>
                <div className="text-center py-10">
                    <div className="flex justify-center text-[50px]">
                        <Eye className="w-[50px] h-[50px] text-blue-500" />
                    </div>
                    <div className="text-2xl font-bold text-[#2b2d31]">
                        Privacy
                    </div>
                    <div className="text-[#828cc0]">
                        We store transaction information exactly as long
                        <div>
                            as it is required to make a payment, and then
                        </div>
                        <div>delete it.</div>
                    </div>
                </div>
                <div className="text-center py-10">
                    <div className="flex justify-center text-[50px]">
                        <IdCard className="w-[50px] h-[50px] text-blue-500" />
                    </div>
                    <div className="text-2xl font-bold text-[#2b2d31]">
                        Anonymity
                    </div>
                    <div className="text-[#828cc0]">
                        We respect the confidentiality of our customers
                        <div>
                            and do not require proof of identity. Your
                        </div>
                        <div>
                            payments remain anonymous.
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="bg-[#f5f6fa] p-6 rounded-lg flex gap-2">
                    <UsersRound className="w-[50px] h-[50px] text-blue-500" />
                    <div>
                        <div>
                            Start accepting cryptocurrency and
                        </div>
                        <div>
                            increase <span className="text-blue-500">your clients base up to 23%</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex py-20 gap-20 justify-center w-[70vw] mx-auto">
                <div>
                    <div className="text-4xl text-[#2b2d31] font-bold py-4">
                        How to enhance your security
                    </div>
                    <div className="text-[#828cc0]">
                        Follow simple tips to increase security
                    </div>
                    <div className="flex flex-col gap-8 py-20">
                        <div className="flex gap-4">
                            <Smartphone className="min-w-[50px] min-h-[50px] text-blue-500" />
                            <div>
                                <div className="font-bold text-2xl">Use 2-FA</div>
                                <div className="text-[#828cc0]">
                                    Connect the two-factor authentication option in your personal account. With it, you can protect your account from unauthorized access.
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <KeySquare className="min-w-[50px] min-h-[50px] text-blue-500" />
                            <div>
                                <div className="font-bold text-2xl">Do not store data online</div>
                                <div className="text-[#828cc0]">
                                    We strongly recommend you to store your passwords at the offline storage, and even better on a physical drive. So you protect your data from intruders and protect your account.
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <ShieldCheck className="min-w-[50px] min-h-[50px] text-blue-500" />
                            <div>
                                <div className="font-bold text-2xl">Use security software</div>
                                <div className="text-[#828cc0]">
                                    If the device which you are working from with the service is not protected by antivirus, you risk falling victim to phishing or other fraudulent activities. Install security software on your computer or other device to avoid such problems.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-4xl text-[#2b2d31] font-bold py-4">
                        Security for developers
                    </div>
                    <div className="text-[#828cc0]">
                        Carefully approach your site’s security
                    </div>
                    <div className="flex flex-col gap-8 py-20">
                        <div className="flex gap-4">
                            <Puzzle className="min-w-[50px] min-h-[50px] text-blue-500" />
                            <div>
                                <div className="font-bold text-2xl">API keys
                                </div>
                                <div className="text-[#828cc0]">
                                    Your API keys are personal information that can help attackers impersonate you. Never share your API keys with third parties.
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <MapPinHouse className="min-w-[50px] min-h-[50px] text-blue-500" />
                            <div>
                                <div className="font-bold text-2xl">Trusted IPs
                                </div>
                                <div className="text-[#828cc0]">
                                    Use the trusted IPs feature in your personal account. So you can restrict access to your account. Only the specified IP addresses will be able to log in to the account.
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <RefreshCcwDot className="min-w-[50px] min-h-[50px] text-blue-500" />
                            <div>
                                <div className="font-bold text-2xl">Monitor your security
                                </div>
                                <div className="text-[#828cc0]">
                                    Always monitor the security status of your system and all connected applications. Use only the latest versions of software and services to avoid errors that have already been fixed, and which intruders could use.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#f5f6fa] py-20 flex justify-center text-center">
                <div>
                    <div className="w-full flex justify-center">
                        <ShieldCheck className="min-w-[50px] min-h-[50px] text-blue-500" />
                    </div>
                    <div className="text-3xl font-bold py-6">SSL Technology
                    </div>
                    <div className="text-center text-[#828cc0]">
                        SSL protects your information using both server authentication and data encryption.
                        <div>
                            We use TLS with at least 128-bit AES encryption. Connection uses TLS v1.2.
                        </div>
                        <div>
                            It is encrypted and the user uses AES_128_GCM_SHA256 and ECDHE_RSA as the key exchange mechanism.
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-20 text-center">
                <div className="text-3xl font-bold">
                    Ensuring your safety
                </div>
                <div className="text-[#828cc0] py-10">We use all available methods to ensure the safety of you and your funds
                </div>
                <div className="flex mx-20 gap-4">
                    <div className="bg-gray-100 rounded-md p-10 w-full">
                        <div className="flex justify-center">
                            <ShieldCheck className="min-w-[50px] min-h-[50px] text-blue-500" />

                        </div>
                        <div className="text-2xl font-bold py-4">
                            Security
                        </div>
                        <div className="text-[#828cc0]">
                            We use innovative methods of information protection, machine learning and always strive to improve the security system and maintain its full working capacity.
                        </div>
                    </div>
                    <div className="bg-gray-100 rounded-md p-10 w-full">
                        <div className="flex justify-center">
                            <Fingerprint className="min-w-[50px] min-h-[50px] text-blue-500" />

                        </div>
                        <div className="text-2xl font-bold py-4">
                            Anonymity
                        </div>
                        <div className="text-[#828cc0]">
                            We appreciate and take care that our clients can maintain anonymity and confidentiality using our service.
                        </div>
                    </div>
                    <div className="bg-gray-100 rounded-md p-10 w-full">
                        <div className="flex justify-center">
                            <Database className="min-w-[50px] min-h-[50px] text-blue-500" />

                        </div>
                        <div className="text-2xl font-bold py-4">
                            Cold Storage
                        </div>
                        <div className="text-[#828cc0]">
                            90% of all funds are stored on “cold” wallets. What makes their theft impossible and significantly increases the degree of funds protection.
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-20 bg-[#f5f6fa] flex items-center justify-center gap-20 w-full py-20">
                <div className="flex justify-center max-w-[50vw]">
                    <div className="max-w-[50vw]">
                        <div className="text-3xl font-bold">
                            Take your business to the next level
                        </div>
                        <div className="text-[#828cc0] py-4">
                            Connect to Plisio and start accepting 10+ cryptocurrencies on your website today
                        </div>
                        <div className="text-[#828cc0]">
                            Sign up for free in 2 clicks • Easy setup in 2 minutes • Tech support 24/7
                        </div>
                    </div>
                </div>
                <div className=" flex items-center justify-center">
                    <Button className="bg-blue-500">Make the first Step</Button>
                </div>
            </div>

        </div>
    )
}