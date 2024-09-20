'use client'

import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import Image from 'next/image'

const tokens = [
    { name: 'Ethereum', symbol: 'ETH', image: '/img/coins/ETH.svg' },
    { name: 'Bitcoin', symbol: 'BTC', image: '/img/coins/BTC.svg' },
    { name: 'Litecoin', symbol: 'LTC', image: '/img/coins/LTC.svg' },
]

export default function Exchange() {
    const [sendAmount, setSendAmount] = useState('')
    const [getAmount, setGetAmount] = useState('')
    const [sendType, setSendType] = useState('USD')
    const [getType, setGetType] = useState('USD')
    const [sendToken, setSendToken] = useState(tokens[0].name)
    const [getToken, setGetToken] = useState(tokens[0].name)
    const [agreedToTerms, setAgreedToTerms] = useState(false)

    const handleExchange = () => {
        // Implement exchange logic here
        console.log('Exchange initiated:', {
            sendAmount,
            sendType,
            sendToken: sendType === 'Token' ? sendToken : 'USD',
            getAmount,
            getType,
            getToken: getType === 'Token' ? getToken : 'USD'
        })
    }

    return (
        <Card className="bg-white dark:bg-gray-800 w-full max-w-2xl mx-auto border-none shadow-lg">
            <CardHeader>
                <CardTitle>Exchange Currencies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <Label htmlFor="send-amount">You Send</Label>
                    <div className="mt-1 flex items-center space-x-2">
                        <Input
                            id="send-amount"
                            type="number"
                            value={sendAmount}
                            onChange={(e) => setSendAmount(e.target.value)}
                            placeholder="0.00"
                            className="flex-grow border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                        />

                        <Tabs value={sendType} onValueChange={setSendType} className="flex-shrink-0">
                            <TabsList className="shadow-md dark:bg-gray-700 grid w-full grid-cols-2" >
                                <TabsTrigger className="hover:bg-gray-200 data-[state=active]:bg-gray-100 dark:data-[state=active]:bg-gray-800 dark:hover:bg-gray-600 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300" value="USD">USD</TabsTrigger>
                                <TabsTrigger className="hover:bg-gray-200 data-[state=active]:bg-gray-100 dark:data-[state=active]:bg-gray-800 dark:hover:bg-gray-600 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300" value="Token">ETH</TabsTrigger>
                            </TabsList>
                        </Tabs>
                        <Select value={sendToken} onValueChange={setSendToken}>
                            <SelectTrigger className="w-[200px]  border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                                <SelectValue placeholder="Select token" />
                            </SelectTrigger>
                            <SelectContent>
                                {tokens.map((token) => (
                                    <SelectItem key={token.name} value={token.name}>
                                        <div className="flex items-center space-x-2">
                                            <Image src={token.image} alt={token.name} width={20} height={20} className="rounded-full" />
                                            <span>{token.symbol}</span>
                                        </div>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div>
                    <Label htmlFor="get-amount">You Get</Label>
                    <div className="mt-1 flex items-center space-x-2">
                        <Input
                            id="get-amount"
                            type="number"
                            value={getAmount}
                            onChange={(e) => setGetAmount(e.target.value)}
                            placeholder="0.00"
                            className="flex-grow border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                        />
                        <Tabs value={getType} onValueChange={setGetType} className="flex-shrink-0">
                            <TabsList className="shadow-md dark:bg-gray-700 grid w-full grid-cols-2" >
                                <TabsTrigger className="hover:bg-gray-200 data-[state=active]:bg-gray-100 dark:data-[state=active]:bg-gray-800 dark:hover:bg-gray-600 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300" value="USD">USD</TabsTrigger>
                                <TabsTrigger className="hover:bg-gray-200 data-[state=active]:bg-gray-100 dark:data-[state=active]:bg-gray-800 dark:hover:bg-gray-600 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300" value="Token">ETH</TabsTrigger>
                            </TabsList>
                        </Tabs>
                        <Select value={getToken} onValueChange={setGetToken}>
                            <SelectTrigger className="w-[200px]  border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                                <SelectValue placeholder="Select token" />
                            </SelectTrigger>
                            <SelectContent>
                                {tokens.map((token) => (
                                    <SelectItem key={token.name} value={token.name}>
                                        <div className="flex items-center space-x-2">
                                            <Image src={token.image} alt={token.name} width={20} height={20} className="rounded-full" />
                                            <span>{token.symbol}</span>
                                        </div>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-4">
                <div className="flex items-center space-x-2">
                    <Checkbox id="terms" checked={agreedToTerms}
                        onCheckedChange={(v: boolean) => {
                            setAgreedToTerms(v);
                        }}
                    />
                    <Label htmlFor="terms" className="text-sm">
                        I have read and agree with Terms
                    </Label>
                </div>
                <Button onClick={handleExchange} disabled={!agreedToTerms} className="w-full">
                    Exchange
                </Button>
            </CardFooter>
        </Card>
    )
}