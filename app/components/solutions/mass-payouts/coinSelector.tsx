import { useState } from 'react'
import { ChevronDown, ChevronUp, Wallet } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const currencies = [
    { name: 'Bitcoin', symbol: 'BTC', image: '/img/coins/BTC.svg' },
    { name: 'Litecoin', symbol: 'LTC', image: '/img/coins/LTC.svg' },
    { name: 'Tron', symbol: 'TRX', image: '/img/coins/TON.svg' },
]

const transactionFees = [
    { name: 'Economy', description: 'Fee rate: 4 sat/vbyte' },
    { name: 'Normal', description: 'Fee rate: 6 sat/vbyte' },
    { name: 'Priority', description: 'Fee rate: 7 sat/vbyte' },
]

export default function CoinSelector() {
    const [currency, setCurrency] = useState(currencies[0])
    const [amount, setAmount] = useState('')
    const [unit, setUnit] = useState('USD')
    const [isDetailsExpanded, setIsDetailsExpanded] = useState(false)
    const [selectedFee, setSelectedFee] = useState('Normal')

    const walletAddress = '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2'

    return (
        <Card className="bg-white dark:bg-gray-800 w-full max-w-md border-none shadow-lg">
            <CardHeader>
                <CardTitle>Choose Currency and Amount</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="currency">Currency</Label>
                    <Select onValueChange={(value) => setCurrency(currencies.find(c => c.symbol === value) || currencies[0])}>
                        <SelectTrigger id="currency" className='border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300'>
                            <SelectValue>
                                <div className="flex items-center">
                                    <img src={currency.image} alt={currency.name} className="w-6 h-6 mr-2" />
                                    {currency.name}
                                </div>
                            </SelectValue>
                        </SelectTrigger>
                        <SelectContent className='bg-white dark:bg-gray-900'>
                            {currencies.map((c) => (
                                <SelectItem
                                    key={c.symbol} value={c.symbol}>
                                    <div className="flex items-center">
                                        <img src={c.image} alt={c.name} className="w-6 h-6 mr-2" />
                                        {c.name}
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="wallet">Wallet Address</Label>
                    <div className="flex items-center space-x-2 p-2 bg-muted dark:bg-gray-700 rounded-md">
                        <Wallet className="w-5 h-5" />
                        <span className="text-sm font-mono">{walletAddress}</span>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label>Amount</Label>
                    <Tabs value={unit} onValueChange={setUnit} className="w-full">
                        <TabsList className="grid w-full grid-cols-2 shadow-md dark:bg-gray-700">
                            <TabsTrigger
                                className="hover:bg-gray-200 data-[state=active]:bg-gray-100 dark:data-[state=active]:bg-gray-800 dark:hover:bg-gray-600 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                                value="USD">
                                USD
                            </TabsTrigger>
                            <TabsTrigger
                                className="hover:bg-gray-200 data-[state=active]:bg-gray-100 dark:data-[state=active]:bg-gray-800 dark:hover:bg-gray-600 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                                value={currency.symbol}>
                                {currency.symbol}
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="USD" className="mt-2">
                            <Input
                                type="number"
                                className='border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300'
                                placeholder="Enter amount in USD"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </TabsContent>
                        <TabsContent value={currency.symbol} className="mt-2">
                            <Input
                                type="number"
                                className='border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300'
                                placeholder={`Enter amount in ${currency.symbol}`}
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </TabsContent>
                    </Tabs>
                </div>

                <div className="space-y-2">
                    <button
                        onClick={() => setIsDetailsExpanded(!isDetailsExpanded)}
                        className="flex items-center justify-between w-full p-2 bg-muted dark:bg-gray-700 rounded-md"
                    >
                        <span>Details</span>
                        {isDetailsExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                    {isDetailsExpanded && (
                        <div className="space-y-2 p-4 bg-muted dark:bg-gray-700 rounded-md text-sm">
                            <p>Balance: 1.23456789 {currency.symbol}</p>
                            <p>Network fee: 0.00012345 {currency.symbol}</p>
                            <p>Plisio fee: 0.00001234 {currency.symbol}</p>
                            <p>Total amount: 1.23470368 {currency.symbol}</p>
                            <p>Remain amount: 0.00013579 {currency.symbol}</p>
                        </div>
                    )}
                </div>

                <div className="space-y-2">
                    <Label>Transaction Fee</Label>
                    {transactionFees.map((fee) => (
                        <div key={fee.name} className="flex items-start space-x-2">
                            <Checkbox
                                id={fee.name}
                                checked={selectedFee === fee.name}
                                onCheckedChange={() => setSelectedFee(fee.name)}
                            />
                            <Label htmlFor={fee.name} className="font-normal">
                                <div>{fee.name}</div>
                                <div className="text-sm text-muted-foreground">{fee.description}</div>
                            </Label>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}