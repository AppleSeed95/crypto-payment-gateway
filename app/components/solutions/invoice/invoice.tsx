'use client'

import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, X } from "lucide-react"
import Image from "next/image"

const currencies = [
    { name: 'Bitcoin', symbol: 'BTC', image: '/img/coins/BTC.svg' },
    { name: 'Ethereum', symbol: 'ETH', image: '/img/coins/ETC.svg' },
    { name: 'Litecoin', symbol: 'LTC', image: '/img/coins/LTC.svg' },
]

export default function InVoiceForm() {
    const [image, setImage] = useState<string | null>(null)
    const [amountCurrency, setAmountCurrency] = useState('USD')
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]
            const reader = new FileReader()
            reader.onload = (e) => {
                setImage(e.target?.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleImageClick = () => {
        fileInputRef.current?.click()
    }

    const handleRemoveImage = (e: React.MouseEvent) => {
        e.stopPropagation()
        setImage(null)
        if (fileInputRef.current) {
            fileInputRef.current.value = ''
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Form submitted')
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 mx-auto p-6 px-2 bg-white dark:bg-gray-800">
            <div className="space-y-2">
                <div
                    className="relative w-32 h-32 mx-auto rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer overflow-hidden group"
                    onClick={handleImageClick}
                >
                    {image ? (
                        <>
                            <img src={image} alt="Profile" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <X className="w-8 h-8 text-white" onClick={handleRemoveImage} />
                            </div>
                        </>
                    ) : (
                        <Camera className="w-12 h-12 text-gray-400" />
                    )}
                </div>
                <Input
                    id="image"
                    type="file"
                    accept=".jpg,.gif,.png"
                    onChange={handleImageChange}
                    className="hidden"
                    ref={fileInputRef}
                />
                <p className="text-sm text-muted-foreground text-center">
                    Click to upload. You can upload your site`s profile picture in .jpg, .gif, .png.
                </p>
            </div>

            <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Recipient`s or Store`s name</Label>
                <Input id="name" type="text" placeholder="Enter name" className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300" />
            </div>

            <div className="space-y-2">
                <Label htmlFor="currency" className="text-gray-700 dark:text-gray-300">Default currency</Label>
                <Select>
                    <SelectTrigger className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                        <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                        {currencies.map((currency) => (
                            <SelectItem key={currency.name} value={currency.symbol}>
                                <div className="flex items-center space-x-2">
                                    <Image src={currency.image} alt={currency.name} width={20} height={20} className="rounded-full" />
                                    <span>{currency.name} ({currency.symbol})</span>
                                </div>
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2">
                <Label htmlFor="amount" className="text-gray-700 dark:text-gray-300">Amount to be paid</Label>
                <div className="flex items-center space-x-2">
                    <Input id="amount" type="number" placeholder="Enter amount" className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300" />
                    <Tabs value={amountCurrency} onValueChange={setAmountCurrency} className="flex-shrink-0">
                        <TabsList className="shadow-md dark:bg-gray-700 grid w-full grid-cols-2">
                            <TabsTrigger className="hover:bg-gray-200 data-[state=active]:bg-gray-100 dark:data-[state=active]:bg-gray-800 dark:hover:bg-gray-600 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300" value="USD">USD</TabsTrigger>
                            <TabsTrigger className="hover:bg-gray-200 data-[state=active]:bg-gray-100 dark:data-[state=active]:bg-gray-800 dark:hover:bg-gray-600 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300" value="BTC">BTC</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="expiration" className="text-gray-700 dark:text-gray-300">Expiration period (in minutes)</Label>
                <Input id="expiration" type="number" placeholder="Enter expiration period" className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300" />
            </div>

            <div className="space-y-2">
                <Label htmlFor="note" className="text-gray-700 dark:text-gray-300">Note (optional)</Label>
                <Textarea id="note" placeholder="Enter additional notes" className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300" />
            </div>

            <Button type="submit" className="w-full">
                Create Invoice
            </Button>
        </form>
    )
}