'use client'
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Puzzle, FileText, CircleDollarSignIcon, Gift, ArrowLeftRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import InVoiceForm from "@/app/components/solutions/invoice/invoice"

interface SolutionComponentProps {
    onBtnClick: () => void
    name: string
    title: string
    description: string
    icon: React.ReactNode
    buttonTitle: string
}


const SolutionComponent = ({ onBtnClick, name, title, description, icon, buttonTitle }: SolutionComponentProps) => {
    return (
        <Card className=" max-w-sm border-none shadow-lg bg-white dark:bg-gray-800">
            <CardHeader className="flex flex-col items-center space-y-4 pt-6">
                <div className="rounded-full bg-primary/10 p-4">
                    {icon}
                </div>
                <div className="text-sm font-medium text-muted-foreground">{name}</div>
                <h2 className="text-2xl font-bold text-center">{title}</h2>
            </CardHeader>
            <CardContent className="text-center">
                <p className="text-muted-foreground">
                    {description}
                </p>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button
                    onClick={onBtnClick}
                >{buttonTitle}</Button>
            </CardFooter>
        </Card>
    )
}
export default function SolutionPage() {
    const [openModal, setOpenModal] = useState(false);
    const router = useRouter();
    const solutions = [
        {
            name: "Integrations",
            title: "Ready-to-use Plugins",
            description: "Use one of many ready-to-use CMS integrations, server-side and client-side libraries.",
            onBtnClick: () => {
                router.push('/integrations')
            },
            buttonTitle: 'All plugins',
            icon: < Puzzle className="h-12 w-12 text-primary" />
        },
        {
            name: "Invoices",
            title: "Create Online Invoices",
            description: "Get started quickly. Create and send invoices to individuals without coding.",
            onBtnClick: () => {
                setOpenModal(true)
            },
            buttonTitle: 'Create',
            icon: <FileText className="h-12 w-12 text-primary" />
        },
        {
            name: "Mass Payouts",
            title: "Automate Payments",
            description: "Combine many transactions into single. Save time and money with Mass Payouts.",
            onBtnClick: () => {
                router.push('/mass-payouts')
            },
            buttonTitle: 'Try now',
            icon: <CircleDollarSignIcon className="h-12 w-12 text-primary" />
        },
        {
            name: "Payment Link",
            title: "Accept Donations",
            buttonTitle: 'Create',
            description: "No code solution for bloggers, streamers and every kind of media persons.",
            onBtnClick: () => {
            },
            icon: <Gift className="h-12 w-12 text-primary" />
        },
        {
            name: "Exchange",
            title: "Exchange Crypto",
            description: "Low-cost crypto exchange solution built in your Plisio Wallet.",
            onBtnClick: () => {
                router.push('/exchange')
            },
            buttonTitle: 'Exchange',
            icon: <ArrowLeftRight className="h-12 w-12 text-primary" />
        },
    ]
    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen px-4">
            <div className=" py-10 pt-20 flex gap-2 w-full md:w-[70%] mx-auto flex-wrap justify-center md:justify-start">
                {solutions.map((a, idx) => (
                    <SolutionComponent
                        key={idx}
                        buttonTitle={a.buttonTitle}
                        name={a.name}
                        title={a.title}
                        description={a.description}
                        onBtnClick={a.onBtnClick}
                        icon={a.icon}
                    />
                ))}
            </div>
            <Dialog open={openModal} onOpenChange={setOpenModal}>
                <DialogContent className="sm:max-w-[425px]  bg-white dark:bg-gray-800 dark:text-gray-200 p-6">
                    <InVoiceForm />
                </DialogContent>
            </Dialog>
        </div>
    )
}