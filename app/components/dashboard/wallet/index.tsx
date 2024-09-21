'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Copy, Plus, ArrowDownToLine, RefreshCw, FileText, WalletMinimal } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image'

// Mock data for wallets
const wallets = [
    { name: 'Bitcoin', symbol: 'BTC', amount: 0.5, price: 30000, address: '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2' },
    { name: 'Ethereum', symbol: 'ETH', amount: 2.5, price: 2000, address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e' },
    { name: 'Litecoin', symbol: 'LTC', amount: 10, price: 62.77, address: 'LQ3R5ufRVrWoFqqhDwNLriaqG9Lhwrcvpc' },
]
const coins = [
    {
        name: "Bitcoin",
        key: 'BTC'
    },
    {
        name: "Litecoin",
        key: 'LTC'
    },
    {
        name: "Dash",
        key: 'DASH'
    },
    {
        name: "Zcash",
        key: 'ZEC'
    },
    {
        name: "Dogecoin",
        key: 'DOGE'
    },
    {
        name: "Bitcoin Cash",
        key: 'BCH'
    },
    {
        name: "Monero",
        key: 'XMR'
    },
    {
        name: "Ethereum",
        key: 'ETH'
    },
    {
        name: "Tether ERC-20",
        key: 'USDT'
    },
    {
        name: "TrueUSD ERC-20",
        key: 'TUSD'
    },
    {
        name: "USD Coin ERC-20",
        key: 'USDC'
    },
    {
        name: "Shiba Inu ERC-20",
        key: 'SHIB'
    },
    {
        name: "Tron",
        key: 'TRX'
    },
    {
        name: "Tether TRC-20",
        key: 'USDT_TRX'
    },
    {
        name: "BNB Chain",
        key: 'BNB'
    },
    {
        name: "Tether BEP-20",
        key: 'USDT_BSC'
    },
    {
        name: "Binance USD BEP-20",
        key: 'BUSD'
    },
    {
        name: "BitTorrent-Chain TRC-20",
        key: 'BTT_TRX'
    },
    {
        name: "Ethereum Classic",
        key: 'ETC'
    },
    {
        name: "Toncoin",
        key: 'TON'
    },
]

export default function MyWallets() {
    const [openWallet, setOpenWallet] = useState<string | null>(null)
    const totalBalance = wallets.reduce((sum, wallet) => sum + wallet.amount * wallet.price, 0)

    const toggleWallet = (name: string) => {
        setOpenWallet(openWallet === name ? null : name)
    }

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
        alert('Address copied to clipboard!')
    }

    const handleAction = (action: string, wallet: string) => {
        alert(`${action} action for ${wallet}`)
    }

    return (
        <Card className="bg-white dark:bg-gray-800 w-full min-w-[30vw] max-w-2xl shadow-xl border-none">
            <CardHeader className=" space-y-0 pb-2">
                <div className='w-full flex flex-row flex-wrap items-center justify-between'>
                    <div className='flex flex-row items-center gap-2'>
                        <CardTitle className="text-2xl font-bold">My Wallets</CardTitle>
                        <div className="text-xl font-semibold">${totalBalance.toFixed(2)} USD</div>
                    </div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>Edit</Button>
                        </DialogTrigger>
                        <DialogContent className="max-h-screen overflow-scroll sm:max-w-[425px] md:min-w-[800px] bg-white dark:bg-gray-800 dark:text-gray-200 p-14">
                            <DialogHeader>
                                <DialogTitle>Edit wallets</DialogTitle>
                                <DialogDescription>
                                    You can create, enable or disable desired currencies to be appeared on Dashboard page.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="flex flex-wrap md:grid grid-cols-5 gap-4">
                                {
                                    coins.map((a, idx) => (
                                        <div key={idx} className='w-full flex flex-col justify-between border border-gray-200 dark:border-gray-700 rounded-md p-3'>
                                            <div className='flex flex-col '>
                                                <Image src={`/img/coins/${a.key}.svg`} width={50} height={50} className='mx-auto w-8 h-8' alt='' />
                                                <div className='text-sm text-center font-bold'>
                                                    {a.name}
                                                </div>
                                                <div className='text-sm text-center'>
                                                    {a.key}
                                                </div>
                                            </div>

                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center space-x-2"
                                            >
                                                <WalletMinimal size={16} />
                                                <span>Create</span>
                                            </Button>
                                        </div>
                                    ))
                                }
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </CardHeader>
            <CardContent>
                {wallets.map((wallet) => (
                    <Collapsible
                        key={wallet.name}
                        open={openWallet === wallet.name}
                        onOpenChange={() => toggleWallet(wallet.name)}
                    >
                        <CollapsibleTrigger asChild>
                            <div className="flex flex-wrap items-center justify-between py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md px-2">
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 bg-primary dark:bg-gray-600 rounded-full flex items-center justify-center text-white font-bold">
                                        {wallet.symbol}
                                    </div>
                                    <div>
                                        <div className="font-semibold">{wallet.name}</div>
                                        <div className="text-sm text-gray-500">{wallet.amount} {wallet.symbol}</div>
                                    </div>
                                </div>
                                <div className="flex items-center w-full md:w-auto justify-between space-x-4">
                                    <div className="text-right">
                                        <div className="font-semibold">${(wallet.amount * wallet.price).toFixed(2)}</div>
                                        <div className="text-sm text-gray-500">1 {wallet.symbol} = ${wallet.price}</div>
                                    </div>

                                    {openWallet === wallet.name ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </div>
                            </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-2 py-4 space-y-2">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-medium">Wallet Address</div>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="flex items-center space-x-2"
                                    onClick={() => copyToClipboard(wallet.address)}
                                >
                                    <Copy size={16} />
                                    <span>Copy</span>
                                </Button>
                            </div>
                            <div className="text-sm text-gray-500 break-all">{wallet.address}</div>
                            <div className="mt-4">
                                <div className="text-sm font-medium mb-2">Price Chart (Last 7 days)</div>
                                <div className="h-20 bg-gray-100 rounded-md flex items-end">
                                    {[...Array(7)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="flex-1 bg-primary"
                                            style={{ height: `${Math.random() * 100}%` }}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className='mx-auto w-full flex justify-center'>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button variant="ghost" size="icon" onClick={() => handleAction('Add', wallet.name)}>
                                                <Plus className="h-4 w-4" />
                                                <span className="sr-only">Add</span>
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Add</p>
                                        </TooltipContent>
                                    </Tooltip>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button variant="ghost" size="icon" onClick={() => handleAction('Withdraw', wallet.name)}>
                                                <ArrowDownToLine className="h-4 w-4" />
                                                <span className="sr-only">Withdraw</span>
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Withdraw</p>
                                        </TooltipContent>
                                    </Tooltip>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button variant="ghost" size="icon" onClick={() => handleAction('Exchange', wallet.name)}>
                                                <RefreshCw className="h-4 w-4" />
                                                <span className="sr-only">Exchange</span>
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Exchange</p>
                                        </TooltipContent>
                                    </Tooltip>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button variant="ghost" size="icon" onClick={() => handleAction('Create Invoice', wallet.name)}>
                                                <FileText className="h-4 w-4" />
                                                <span className="sr-only">Create Invoice</span>
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Create Invoice</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        </CollapsibleContent>
                    </Collapsible>
                ))}
            </CardContent>
        </Card>
    )
}