import React from 'react'
import Marquee from 'react-fast-marquee'
import {
    ShoppingBag,
    DollarSign,
    ShoppingCart,
    AlertTriangle,
    Store,
    Briefcase,
    Heart,
    Users,
    Paintbrush,
    Gamepad2,
    MoreHorizontal,
} from 'lucide-react'

interface MarqueeItemProps {
    icon: React.ReactNode
    title: string
}

const MarqueeItem: React.FC<MarqueeItemProps> = ({ icon, title }) => (
    <div className="bg-blue-100 flex flex-col p-6 py-10 items-center justify-center gap-2 rounded-lg shadow-md m-2 min-w-[200px]">
        <div className='text-blue-500 text-5xl font-bold'>
            {icon}
        </div>
        <div className="font-semibold">{title}</div>
    </div>
)



const firstRowItems = [
    { icon: <ShoppingBag className="w-6 h-6" />, title: "Marketplaces" },
    { icon: <DollarSign className="w-6 h-6" />, title: "Finance" },
    { icon: <ShoppingCart className="w-6 h-6" />, title: "eCommerce" },
    { icon: <AlertTriangle className="w-6 h-6" />, title: "High Risk" },
    { icon: <Store className="w-6 h-6" />, title: "Online Retail" },
    { icon: <Briefcase className="w-6 h-6" />, title: "Freelancer" },
]

const secondRowItems = [
    { icon: <Heart className="w-6 h-6" />, title: "Non-Profit" },
    { icon: <Users className="w-6 h-6" />, title: "Adult" },
    { icon: <Paintbrush className="w-6 h-6" />, title: "Creators" },
    { icon: <Gamepad2 className="w-6 h-6" />, title: "Games" },
    { icon: <MoreHorizontal className="w-6 h-6" />, title: "Other" },
]

const MarqueeWithGradient: React.FC<{ children: React.ReactNode, direction?: "left" | "right" }> = ({ children, direction = "left" }) => (
    <div className="relative overflow-hidden">
        <div className="absolute top-0 bottom-0 left-0 w-1/6 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-1/6 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        <Marquee gradient={false} speed={50} direction={direction}>
            {children}
        </Marquee>
    </div>
)

export default function MarQueeWithSponsors() {
    return (
        <div className="flex flex-col w-[50vw] mx-auto gap-8 py-8">
            <MarqueeWithGradient>
                {firstRowItems.map((item, index) => (
                    <MarqueeItem key={index} icon={item.icon} title={item.title} />
                ))}
            </MarqueeWithGradient>
            <MarqueeWithGradient direction="right">
                {secondRowItems.map((item, index) => (
                    <MarqueeItem key={index} icon={item.icon} title={item.title} />
                ))}
            </MarqueeWithGradient>
        </div>
    )
}