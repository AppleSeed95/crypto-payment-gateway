import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import Image from "next/image";
import { Download } from "lucide-react";
import { WithAnimation } from "../components/other/animated-element";

const items = [
    'bigcommerce',
    'blesta',
    'easydigitaldownloads',
    'ecwid',
    'magento',
    'opencart',
    'oscommerce',
    'prestashop',
    'telegram',
    'virtuemart',
    'whmcs',
    'woocommerce',
    'x-cart',
    'zencart'
]
const plugins1 = [
    'laravel',
    'nodejs',
    'php',
    'python',
]
const plugins2 = [
    'android',
    'react',
    'telegram',
    'vue',
]

export default function Home() {
    return (
        <div className="items-center justify-items-center min-h-screen">
            <Navbar />

            <div className="text-center py-20">
                <div className="text-4xl py-10 font-bold text-[#2b2d31]">Plugins</div>
                <div className="text-[#828cc0]">
                    Here you can find the most popular CMS integrations and plugins that will facilitate setting up your
                    <div>
                        own store. Use one of the ready-to-use solutions and start accepting cryptocurrency today.
                    </div>
                </div>
            </div>

            <div className="py-8 mt-8 flex flex-wrap justify-center w-[60vw] gap-10 mx-auto">
                {items.map((a, idx) => (
                    <WithAnimation key={idx} mode="up">
                        <div className="w-[350px] shadow-lg overflow-hidden rounded-lg">
                            <div className=" bg-gray-200 flex p-10 justify-center">
                                <Image src={`/img/group/${a}.${(a === 'virtuemart' || a === 'zencart') ? 'png' : 'svg'}`} alt="" width={50} height={50} className="w-auto h-[40px]" />
                            </div>
                            <div className="text-center py-10 text-3xl font-bold">
                                {a}
                            </div>
                            <div className="flex gap-2 text-2xl justify-center pb-10 text-blue-500 hover:text-blue-600 cursor-pointer">
                                <Download /> Download plugin
                            </div>
                        </div>
                    </WithAnimation>
                ))}
            </div>


            <div className="flex flex-row sm:flex-col justify-center">
                <div>
                    <div className="text-center py-20">
                        <div className="text-4xl py-10 font-bold text-[#2b2d31]">Server-side Libraries
                        </div>
                        <div className="text-[#828cc0]">
                            Plisio writes and maintains code libraries for today`s most
                            <div>
                                popular programming languages.
                            </div>
                        </div>
                    </div>
                    <div className="py-8 mt-8 flex flex-wrap justify-center  gap-10 mx-auto">
                        {plugins1.map((a, idx) => (
                            <WithAnimation key={idx} mode="zoom" delay={0.2 * idx}>
                                <div className="w-[350px] shadow-lg overflow-hidden rounded-lg">
                                    <div className=" bg-gray-200 flex p-10 justify-center">
                                        <Image src={`/img/plugin/${a}.${(a === 'virtuemart' || a === 'zencart') ? 'png' : 'svg'}`} alt="" width={50} height={50} className="w-auto h-[40px]" />
                                    </div>
                                    <div className="text-center py-10 text-3xl font-bold">
                                        {a}
                                    </div>
                                    <div className="flex gap-2 text-2xl justify-center pb-10 text-blue-500 hover:text-blue-600 cursor-pointer">
                                        Documentation
                                    </div>
                                </div>
                            </WithAnimation>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="text-center py-20">
                        <div className="text-4xl py-10 font-bold text-[#2b2d31]">Client-side Libraries
                        </div>
                        <div className="text-[#828cc0]">
                            Plisio writes and maintains code libraries for today`s most
                            <div>
                                popular UI libraries.
                            </div>
                        </div>
                    </div>
                    <div className="py-8 mt-8 flex flex-wrap justify-center  gap-10 mx-auto">
                        {plugins2.map((a, idx) => (
                            <WithAnimation key={idx} mode="zoom" delay={0.2 * idx}>
                                <div className="w-[350px] shadow-lg overflow-hidden rounded-lg">
                                    <div className=" bg-gray-200 flex p-10 justify-center">
                                        <Image src={`/img/plugin/${a}.${(a === 'virtuemart' || a === 'zencart') ? 'png' : 'svg'}`} alt="" width={50} height={50} className="w-auto h-[40px]" />
                                    </div>
                                    <div className="text-center py-10 text-3xl font-bold">
                                        {a}
                                    </div>
                                    <div className="flex gap-2 text-2xl justify-center pb-10 text-blue-500 hover:text-blue-600 cursor-pointer">
                                        Documentation
                                    </div>
                                </div>
                            </WithAnimation>
                        ))}
                    </div>
                </div>

            </div>
            <div className="flex w-full justify-center mt-20 py-40 gap-40 bg-[#f5f6fa]">
                <div >
                    <div className="text-3xl font-bold">
                        Use Our API
                    </div>
                    <div className="text-[#828cc0]">
                        We are constantly adding new solutions for various needs.
                    </div>
                    <div className="text-[#828cc0]">
                        Sign up for free in 2 clicks • Easy setup in 2 minutes • Tech support 24/7
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="shadow-lg rounded-lg bg-blue-500 hover:bg-blue-600 p-2 text-2xl text-white  px-6 ">StellarPay API</button>
                </div>
            </div>
            <Footer />
        </div >
    );
}
