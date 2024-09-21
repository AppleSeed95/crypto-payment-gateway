'use client'

import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Wallet, Trash2, Plus, Save, Send } from 'lucide-react'

interface Recipient {
    id: number;
    address: string;
    amount: string;
    currency: string;
}

const currencies = {
    crypto: ['BTC', 'ETH', 'LTC'],
    fiat: ['USD', 'EUR', 'GBP']
}

export default function SendForm() {
    const [activeTab, setActiveTab] = useState<'crypto' | 'fiat'>('crypto')
    const [recipients, setRecipients] = useState<Recipient[]>([
        { id: 1, address: '', amount: '', currency: currencies[activeTab][0] }
    ])

    const addRecipient = () => {
        const newId = recipients.length > 0 ? Math.max(...recipients.map(r => r.id)) + 1 : 1
        setRecipients([...recipients, { id: newId, address: '', amount: '', currency: currencies[activeTab][0] }])
    }

    const updateRecipient = (id: number, field: keyof Recipient, value: string) => {
        setRecipients(recipients.map(recipient =>
            recipient.id === id ? { ...recipient, [field]: value } : recipient
        ))
    }

    const deleteRecipient = (id: number) => {
        setRecipients(recipients.filter(recipient => recipient.id !== id))
    }

    const handleTabChange = (value: string) => {
        setActiveTab(value as 'crypto' | 'fiat')
        setRecipients(recipients.map(recipient => ({
            ...recipient,
            currency: currencies[value as 'crypto' | 'fiat'][0]
        })))
    }

    const handleSaveList = () => {
        console.log('Saving list:', recipients)
        // Implement save functionality here
    }

    const handleSendFunds = () => {
        console.log('Sending funds to:', recipients)
        // Implement send functionality here
    }

    return (
        <Card className="bg-white dark:bg-gray-800 w-full max-w-3xl mx-auto border-none shadow-lg">
            <CardHeader>
                <CardTitle>Recipients List</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <Tabs value={activeTab} onValueChange={handleTabChange}>
                    <TabsList className="shadow-md dark:bg-gray-700 grid w-full grid-cols-2">
                        <TabsTrigger className="hover:bg-gray-200 data-[state=active]:bg-gray-100 dark:data-[state=active]:bg-gray-800 dark:hover:bg-gray-600 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300" value="crypto">Cryptocurrency</TabsTrigger>
                        <TabsTrigger className="hover:bg-gray-200 data-[state=active]:bg-gray-100 dark:data-[state=active]:bg-gray-800 dark:hover:bg-gray-600 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300" value="fiat">Fiat Currency</TabsTrigger>
                    </TabsList>
                    <TabsContent value="crypto">Send cryptocurrency to your recipients.</TabsContent>
                    <TabsContent value="fiat">Send fiat currency to your recipients.</TabsContent>
                </Tabs>
                {recipients.map((recipient) => (
                    <div key={recipient.id} className="flex items-center space-x-2">
                        <Wallet className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        <Input
                            placeholder="Recipient's address"
                            value={recipient.address}
                            onChange={(e) => updateRecipient(recipient.id, 'address', e.target.value)}
                            className="flex-grow border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                        />
                        <Input
                            type="number"
                            placeholder="Amount"
                            value={recipient.amount}
                            onChange={(e) => updateRecipient(recipient.id, 'amount', e.target.value)}
                            className="w-24 flex-shrink-0 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                        />
                        <Select
                            value={recipient.currency}
                            onValueChange={(value) => updateRecipient(recipient.id, 'currency', value)}
                        >
                            <SelectTrigger className="w-20 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                                <SelectValue placeholder="Currency" />
                            </SelectTrigger>
                            <SelectContent className='bg-white dark:bg-gray-900'>
                                {currencies[activeTab].map((currency) => (
                                    <SelectItem key={currency} value={currency}>
                                        {currency}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Button
                            className="p-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                            variant="ghost"
                            size="icon"
                            onClick={() => deleteRecipient(recipient.id)}
                            aria-label="Delete recipient"
                        >
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>
                ))}
            </CardContent>
            <CardFooter className="flex flex-col md:flex-row justify-between">
                <Button onClick={addRecipient} variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Recipient
                </Button>
                <div className="space-x-2">
                    <Button
                        onClick={handleSaveList}
                        className='border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-900'
                        variant="outline"
                    >
                        <Save className="h-4 w-4 mr-2" />
                        Save List
                    </Button>
                    <Button onClick={handleSendFunds}>
                        <Send className="h-4 w-4 mr-2" />
                        Send Funds
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}