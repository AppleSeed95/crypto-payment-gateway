"use client"
import { useState } from "react"
import CoinSelector from "@/app/components/solutions/mass-payouts/coinSelector"
import History from "@/app/components/solutions/mass-payouts/history"
import SendForm from "@/app/components/solutions/mass-payouts/sendForm"


export default function MassPayoutPage() {
    return (
        <div className="w-full bg-gray-100 dark:bg-gray-900 min-h-screen">
            <div className="container justify-center mx-auto py-10 flex gap-4">
                <div className="flex flex-col gap-4">
                    <CoinSelector />
                    <History />
                </div>
                <div>
                    <SendForm />
                </div>
            </div>
        </div>
    )
}