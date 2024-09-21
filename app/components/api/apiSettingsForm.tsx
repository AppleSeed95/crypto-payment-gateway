'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
// import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command"
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
// import { Copy, HelpCircle, ChevronsUpDown, Check } from 'lucide-react'
import { Copy, HelpCircle } from 'lucide-react'
// import { cn } from "@/lib/utils"
import Link from 'next/link'

// const currencies = [
//     { label: "LiteCoin", value: "litecoin" },
//     { label: "Tron", value: "tron" },
//     { label: "Bitcoin", value: "bitcoin" },
//     { label: "Ethereum", value: "ethereum" },
//     { label: "Ripple", value: "ripple" },
// ]

export default function ApiSettingsForm() {
    const secretKey = 'R6V5Hbzybcm5sIjyM6ByiqZNuBvp9Ppd9Ky1lXqzX6uHWdLvGwsPdJqf5aK1Jg'
    // const [secretKey, setSecretKey] = useState('R6V5Hbzybcm5sIjyM6ByiqZNuBvp9Ppd9Ky1lXqzX6uHWdLvGwsPdJqf5aK1Jg')
    const [copiedKey, setCopiedKey] = useState(false)
    // const [selectedCurrencies, setSelectedCurrencies] = useState<string[]>([])
    // const [open, setOpen] = useState(false)

    const handleCopyKey = () => {
        navigator.clipboard.writeText(secretKey)
        setCopiedKey(true)
        setTimeout(() => setCopiedKey(false), 2000)
    }


    // const toggleCurrency = (currency: string) => {
    //     setSelectedCurrencies((current = []) =>
    //         current.includes(currency)
    //             ? current.filter(c => c !== currency)
    //             : [...current, currency]
    //     )
    // }

    return (
        <form className="space-y-6 max-w-md bg-white dark:bg-gray-800 mx-auto p-6 px-10 bg-white rounded-lg shadow-lg border-none  text-gray-700 dark:text-gray-300">
            <div className="space-y-2">
                <Label htmlFor="integrationType">Integration Type</Label>
                <Select >
                    <SelectTrigger className='border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300' id="integrationType">
                        <SelectValue placeholder="Select integration type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="custom">Custom</SelectItem>
                        <SelectItem value="blesta">Blesta</SelectItem>
                        <SelectItem value="easydigitaldownloads">Easy Digital Downloads</SelectItem>
                        <SelectItem value="ecwid">Ecwid</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2">
                <Label htmlFor="secretKey">Secret Key</Label>
                <div className="flex items-center space-x-2">
                    <Input id="secretKey" value={secretKey} readOnly className="flex-grow border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300" />
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="outline" size="icon" onClick={handleCopyKey}>
                                    <Copy className="h-4 w-4" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{copiedKey ? 'Copied!' : 'Copy to clipboard'}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="ipLimit">Limit Access by IP address</Label>
                <div className="flex items-center space-x-2">
                    <Input id="ipLimit" type="text" placeholder="Enter IP address" className='border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300' />
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <HelpCircle className="h-4 w-4" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Enter IP addresses to limit access. Use commas to separate multiple IPs.</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="statusUrl">Status URL</Label>
                <div className="flex items-center space-x-2">
                    <Input id="statusUrl" type="url" placeholder="Enter status URL" className='border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300' />
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <HelpCircle className="h-4 w-4" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>URL to check the status of the integration.</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="successUrl">Success URL</Label>
                <div className="flex items-center space-x-2">
                    <Input id="successUrl" type="url" placeholder="Enter success URL" className='border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300' />
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <HelpCircle className="h-4 w-4" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>URL to redirect after successful payment.</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="failedUrl">Failed URL</Label>
                <div className="flex items-center space-x-2">
                    <Input id="failedUrl" type="url" placeholder="Enter failed URL" className='border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300' />
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <HelpCircle className="h-4 w-4" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>URL to redirect after failed payment.</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="commission">Who pays the commission</Label>
                <Select>
                    <SelectTrigger id="commission" className='border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300'>
                        <SelectValue placeholder="Select who pays" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="client">Client</SelectItem>
                        <SelectItem value="site">Site</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* <div className="space-y-2">
                <Label>Supported currencies</Label>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-full justify-between border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                        >
                            {selectedCurrencies.length > 0
                                ? `${selectedCurrencies.length} selected`
                                : "Select currencies"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                        <Command>
                            <CommandInput placeholder="Search currencies..." className='border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300' />
                            <CommandEmpty>No currency found.</CommandEmpty>
                            <CommandGroup>
                                {currencies && currencies.map((currency) => (
                                    <CommandItem
                                        key={currency.value}
                                        onSelect={() => toggleCurrency(currency.value)}
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                true ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {currency.label}
                                        test
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div> */}

            <div className="space-y-2">
                <Label htmlFor="expirationPeriod">Expiration period (in minutes)</Label>
                <Input id="expirationPeriod" type="number" placeholder="Enter expiration period" className='border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300' />
            </div>

            <div className="space-y-4">
                <div className="flex items-center space-x-2">
                    <Checkbox id="showRenewButton" />
                    <Label htmlFor="showRenewButton">Show renew button after invoice expired</Label>
                </div>

                <div className="flex items-center space-x-2">
                    <Checkbox id="whiteLabel" />
                    <Label htmlFor="whiteLabel">White-label payment processing</Label>
                </div>

                <div className="flex items-center space-x-2">
                    <Checkbox id="showCurrencyHash" />
                    <Label htmlFor="showCurrencyHash">Show currency name hash in QR-code</Label>
                </div>

                <div className="flex items-center space-x-2">
                    <Checkbox id="addInvoiceAmount" />
                    <Label htmlFor="addInvoiceAmount">Add invoice amount to QR-code</Label>
                </div>

                <div className="flex items-center space-x-2">
                    <Checkbox id="highRiskBusiness" />
                    <Label htmlFor="highRiskBusiness">High-risk business</Label>
                </div>

                <div className="flex items-center space-x-2">
                    <Checkbox id="disableWithdrawal" />
                    <Label htmlFor="disableWithdrawal">Disable withdrawal via API</Label>
                </div>
            </div>

            <div className="flex justify-between items-center pt-6">
                <Link href="/api/add" className="text-blue-600 hover:underline">
                    Site Profile
                </Link>
                <Button type="submit">Save Changes</Button>
            </div>
        </form>
    )
}