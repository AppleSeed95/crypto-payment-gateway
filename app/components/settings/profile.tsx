'use client'
import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Camera, X, Copy, Check } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function ProfileForm() {
    const [image, setImage] = useState<string | null>(null)
    const [copiedEmail, setCopiedEmail] = useState(false)
    const [copiedReferral, setCopiedReferral] = useState(false)
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

    const handleCopy = (text: string, setCopied: (value: boolean) => void) => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Form submitted')
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg px-10">
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
                <Label htmlFor="name" className='text-gray-700 dark:text-gray-300'>Name</Label>
                <Input id="name" type="text" placeholder="Enter your name" className='border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300' />
            </div>

            <div className="space-y-2">
                <Label htmlFor="email" className='text-gray-700 dark:text-gray-300'>Email</Label>
                <div className="flex">
                    <Input id="email" type="email" value="user@example.com" readOnly className='border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 flex-grow' />
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="icon"
                                    className="ml-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                                    onClick={() => handleCopy("user@example.com", setCopiedEmail)}
                                >
                                    {copiedEmail ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{copiedEmail ? 'Copied!' : 'Copy email'}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="phone" className='text-gray-700 dark:text-gray-300'>Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" className='border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300' />
            </div>

            <div className="space-y-2">
                <Label htmlFor="altContact" className='text-gray-700 dark:text-gray-300'>Alternative Contact</Label>
                <Input id="altContact" type="text" placeholder="Enter alternative contact" className='border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300' />
            </div>

            <div className="space-y-2">
                <Label htmlFor="timezone" className='text-gray-700 dark:text-gray-300'>Time Zone</Label>
                <Select>
                    <SelectTrigger className='border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300'>
                        <SelectValue placeholder="Select time zone" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="utc">UTC</SelectItem>
                        <SelectItem value="est">EST (UTC-5)</SelectItem>
                        <SelectItem value="cet">CET (UTC+1)</SelectItem>
                        <SelectItem value="jst">JST (UTC+9)</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2">
                <Label htmlFor="currency" className='text-gray-700 dark:text-gray-300'>Currency</Label>
                <Select>
                    <SelectTrigger className='border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300'>
                        <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="usd">USD</SelectItem>
                        <SelectItem value="uyu">UYU</SelectItem>
                        <SelectItem value="uzs">UZS</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2">
                <Label htmlFor="referralLink" className='text-gray-700 dark:text-gray-300'>Referral Link</Label>
                <div className="flex">
                    <Input id="referralLink" type="url" value="https://example.com/ref/user123" readOnly className='border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 flex-grow' />
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="icon"
                                    className="ml-2 hover:bg-gray-200 dark:hover:bg-gray-600 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                                    onClick={() => handleCopy("https://example.com/ref/user123", setCopiedReferral)}
                                >
                                    {copiedReferral ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{copiedReferral ? 'Copied!' : 'Copy referral link'}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="url" className='text-gray-700 dark:text-gray-300'>URL</Label>
                <Input id="url" type="url" placeholder="Enter your URL" className='border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300' />
            </div>

            <Button type="submit" className="w-full">
                Save Changes
            </Button>
        </form>
    )
}