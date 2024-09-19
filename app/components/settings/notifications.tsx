"use client"

import { useState } from "react"
import { Bell, DollarSign, Gift, Newspaper, HelpCircle } from "lucide-react"
import { Card, CardContent, CardFooter, } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

type NotificationOption = {
    id: string
    title: string
    description: string
    icon: React.ReactNode
}

const notificationOptions: NotificationOption[] = [
    {
        id: "safety",
        title: "Safety",
        description: "We will notify you when we detect suspicious actions in your account.",
        icon: <Bell className="h-8 w-8" />,
    },
    {
        id: "transactions",
        title: "Transactions",
        description: "We will notify you when you receive or send funds.",
        icon: <DollarSign className="h-8 w-8" />,
    },
    {
        id: "special-offers",
        title: "Special Offers",
        description: "Get discounts and personalized offers that are perfect for your business.",
        icon: <Gift className="h-8 w-8" />,
    },
    {
        id: "news",
        title: "News",
        description: "Stay tuned on the latest company's news and updates.",
        icon: <Newspaper className="h-8 w-8" />,
    },
    {
        id: "guides-and-help",
        title: "Guides and Help",
        description: "Get emails and pushes that will help you learn Plisio better and quicker.",
        icon: <HelpCircle className="h-8 w-8" />,
    },
]

export default function NotificationSettings() {
    const [settings, setSettings] = useState<Record<string, { email: boolean; push: boolean }>>({
        safety: { email: false, push: false },
        transactions: { email: false, push: false },
        "special-offers": { email: false, push: false },
        news: { email: false, push: false },
        "guides-and-help": { email: false, push: false },
    })

    const [allChecked, setAllChecked] = useState(false)

    const handleToggle = (id: string, type: "email" | "push") => {
        setSettings((prev) => ({
            ...prev,
            [id]: { ...prev[id], [type]: !prev[id][type] },
        }))
    }

    const handleToggleAll = () => {
        const newAllChecked = !allChecked
        setAllChecked(newAllChecked)
        setSettings(
            Object.keys(settings).reduce(
                (acc, key) => ({
                    ...acc,
                    [key]: { email: newAllChecked, push: newAllChecked },
                }),
                {}
            )
        )
    }

    const handleSaveChanges = () => {
        console.log("Saving settings:", settings)
        // Implement your save logic here
    }

    return (
        <Card className="w-full w-[30vw] p-6 mx-auto border-none shadow-lg space-y-6  bg-white dark:bg-gray-800 rounded-lg  px-10">

            <CardContent className="space-y-6">
                {notificationOptions.map((option) => (
                    <div key={option.id} className="flex items-center justify-between">
                        <div className="w-[70%] flex items-start space-x-4">
                            <div className="mt-1">{option.icon}</div>
                            <div>
                                <h3 className="font-semibold">{option.title}</h3>
                                <p className="text-sm text-muted-foreground">{option.description}</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id={`${option.id}-email`}
                                    checked={settings[option.id].email}
                                    onCheckedChange={() => handleToggle(option.id, "email")}
                                />
                                <label
                                    htmlFor={`${option.id}-email`}
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Send by e-mail
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id={`${option.id}-push`}
                                    checked={settings[option.id].push}
                                    onCheckedChange={() => handleToggle(option.id, "push")}
                                />
                                <label
                                    htmlFor={`${option.id}-push`}
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Send by push
                                </label>
                            </div>
                        </div>
                    </div>
                ))}
            </CardContent>
            <CardFooter className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-2">
                    <Checkbox id="check-all" checked={allChecked} onCheckedChange={handleToggleAll} />
                    <label
                        htmlFor="check-all"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Check or uncheck all
                    </label>
                </div>
                <Button onClick={handleSaveChanges} className="w-full sm:w-auto">
                    Save Changes
                </Button>
            </CardFooter>
        </Card>
    )
}