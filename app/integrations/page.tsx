import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import Image from "next/image";
import { Download } from "lucide-react";
import { WithAnimation } from "../components/other/animated-element";

const items = [
    'bigcommerce', 'blesta', 'easydigitaldownloads', 'ecwid', 'magento',
    'opencart', 'oscommerce', 'prestashop', 'telegram', 'virtuemart',
    'whmcs', 'woocommerce', 'x-cart', 'zencart'
]
const plugins1 = ['laravel', 'nodejs', 'php', 'python']
const plugins2 = ['android', 'react', 'telegram', 'vue']

export default function Home() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="bg-[#4574eb] pt-20 pb-32 text-white text-center px-4"
                style={{
                    borderBottomLeftRadius: '100% 100%',
                    borderBottomRightRadius: '100% 100%'
                }}
            >
                <div className="text-2xl sm:text-3xl pt-10 sm:pt-20 font-bold mb-6 sm:mb-10">Integration solutions</div>
                <div className="max-w-2xl mx-auto text-sm sm:text-base">
                    Accept Bitcoin and other cryptocurrencies anywhere you take payments
                </div>
            </div>
            <div className="text-center py-10 sm:py-20 px-4">
                <div className="text-3xl sm:text-4xl py-6 sm:py-10 font-bold text-[#2b2d31]">Plugins</div>
                <div className="text-[#828cc0] text-sm sm:text-base">
                    Here you can find the most popular CMS integrations and plugins that will facilitate setting up your
                    own store. Use one of the ready-to-use solutions and start accepting cryptocurrency today.
                </div>
            </div>

            <div className="py-8 mt-8 flex flex-wrap justify-center w-full w-full md:w-[60vw] gap-6 sm:gap-10 mx-auto px-4">
                {items.map((a, idx) => (
                    <WithAnimation key={idx} mode="up">
                        <div className="w-[90vw] md:w-[350px] shadow-lg overflow-hidden rounded-lg">
                            <div className="bg-gray-200 flex p-6 sm:p-10 justify-center">
                                <Image src={`/img/group/${a}.${(a === 'virtuemart' || a === 'zencart') ? 'png' : 'svg'}`} alt="" width={50} height={50} className="w-auto h-[30px] sm:h-[40px]" />
                            </div>
                            <div className="text-center py-6 sm:py-10 text-2xl sm:text-3xl font-bold">
                                {a}
                            </div>
                            <div className="flex gap-2 text-xl sm:text-2xl justify-center pb-6 sm:pb-10 text-blue-500 hover:text-blue-600 cursor-pointer">
                                <Download /> Download plugin
                            </div>
                        </div>
                    </WithAnimation>
                ))}
            </div>

            <div className="flex flex-col justify-center">
                <div>
                    <div className="text-center py-10 sm:py-20 px-4">
                        <div className="text-3xl sm:text-4xl py-6 sm:py-10 font-bold text-[#2b2d31]">Server-side Libraries</div>
                        <div className="text-[#828cc0] text-sm sm:text-base">
                            Plisio writes and maintains code libraries for today`s most popular programming languages.
                        </div>
                    </div>
                    <div className="py-8 mt-8 flex flex-wrap justify-center gap-6 sm:gap-10 mx-auto px-4">
                        {plugins1.map((a, idx) => (
                            <WithAnimation key={idx} mode="zoom" delay={0.2 * idx}>
                                <div className="w-[90vw] md:w-[350px] shadow-lg overflow-hidden rounded-lg">
                                    <div className="bg-gray-200 flex p-6 sm:p-10 justify-center">
                                        <Image src={`/img/plugin/${a}.${(a === 'virtuemart' || a === 'zencart') ? 'png' : 'svg'}`} alt="" width={50} height={50} className="w-auto h-[30px] sm:h-[40px]" />
                                    </div>
                                    <div className="text-center py-6 sm:py-10 text-2xl sm:text-3xl font-bold">
                                        {a}
                                    </div>
                                    <div className="flex gap-2 text-xl sm:text-2xl justify-center pb-6 sm:pb-10 text-blue-500 hover:text-blue-600 cursor-pointer">
                                        Documentation
                                    </div>
                                </div>
                            </WithAnimation>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="text-center py-10 sm:py-20 px-4">
                        <div className="text-3xl sm:text-4xl py-6 sm:py-10 font-bold text-[#2b2d31]">Client-side Libraries</div>
                        <div className="text-[#828cc0] text-sm sm:text-base">
                            Plisio writes and maintains code libraries for today`s most popular UI libraries.
                        </div>
                    </div>
                    <div className="py-8 mt-8 flex flex-wrap justify-center gap-6 sm:gap-10 mx-auto px-4">
                        {plugins2.map((a, idx) => (
                            <WithAnimation key={idx} mode="zoom" delay={0.2 * idx}>
                                <div className="w-[90vw] md:w-[350px] shadow-lg overflow-hidden rounded-lg">
                                    <div className="bg-gray-200 flex p-6 sm:p-10 justify-center">
                                        <Image src={`/img/plugin/${a}.${(a === 'virtuemart' || a === 'zencart') ? 'png' : 'svg'}`} alt="" width={50} height={50} className="w-auto h-[30px] sm:h-[40px]" />
                                    </div>
                                    <div className="text-center py-6 sm:py-10 text-2xl sm:text-3xl font-bold">
                                        {a}
                                    </div>
                                    <div className="flex gap-2 text-xl sm:text-2xl justify-center pb-6 sm:pb-10 text-blue-500 hover:text-blue-600 cursor-pointer">
                                        Documentation
                                    </div>
                                </div>
                            </WithAnimation>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row w-full justify-center items-center mt-10 sm:mt-20 py-20 sm:py-40 gap-10 sm:gap-40 bg-[#f5f6fa] px-4">
                <div className="text-center sm:text-left">
                    <div className="text-2xl sm:text-3xl font-bold mb-4">
                        Use Our API
                    </div>
                    <div className="text-[#828cc0] text-sm sm:text-base mb-2">
                        We are constantly adding new solutions for various needs.
                    </div>
                    <div className="text-[#828cc0] text-sm sm:text-base">
                        Sign up for free in 2 clicks • Easy setup in 2 minutes • Tech support 24/7
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="shadow-lg rounded-lg bg-blue-500 hover:bg-blue-600 p-2 text-xl sm:text-2xl text-white px-4 sm:px-6">StellarPay API</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}