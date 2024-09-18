import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Puzzle, FileText, CircleDollarSignIcon, Gift, ArrowLeftRight } from "lucide-react"

interface SolutionComponentProps {
    onBtnClick: () => void
    name: string
    title: string
    description: string
    icon: React.ReactNode
    buttonTitle: string
}

const solutions = [
    {
        name: "Integrations",
        title: "Ready-to-use Plugins",
        description: "Use one of many ready-to-use CMS integrations, server-side and client-side libraries.",
        onBtnClick: () => {
        },
        buttonTitle: 'All plugins',
        icon: < Puzzle className="h-12 w-12 text-primary" />
    },
    {
        name: "Invoices",
        title: "Create Online Invoices",
        description: "Get started quickly. Create and send invoices to individuals without coding.",
        onBtnClick: () => {
        },
        buttonTitle: 'Create',
        icon: <FileText className="h-12 w-12 text-primary" />
    },
    {
        name: "Mass Payouts",
        title: "Automate Payments",
        description: "Combine many transactions into single. Save time and money with Mass Payouts.",
        onBtnClick: () => {
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
        },
        buttonTitle: 'Exchange',
        icon: <ArrowLeftRight className="h-12 w-12 text-primary" />
    },
]
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
                <Button>{buttonTitle}</Button>
            </CardFooter>
        </Card>
    )
}
export default function SolutionPage() {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
            <div className=" py-10 pt-20 flex gap-2 w-[70vw] mx-auto flex-wrap justify-start">
                {solutions.map((a, idx) => (
                    <SolutionComponent
                        key={idx}
                        buttonTitle={a.buttonTitle}
                        name={a.name}
                        title={a.title}
                        description={a.description}
                        onBtnClick={() => {
                        }}
                        icon={a.icon}
                    />
                ))}
            </div>
        </div>
    )
}