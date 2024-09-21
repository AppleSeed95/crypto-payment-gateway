"use client"
import CoinSelector from "@/app/components/solutions/mass-payouts/coinSelector"
import History from "@/app/components/solutions/mass-payouts/history"
import SendForm from "@/app/components/solutions/mass-payouts/sendForm"


export default function MassPayoutPage() {
    return (
        <div className="w-full bg-gray-100 dark:bg-gray-900 min-h-screen">
            <div className="container justify-center mx-auto py-10 flex flex-col md:flex-row gap-4">
                <div className="flex flex-col gap-4 px-4 md:px-o">
                    <CoinSelector />
                    <History />
                </div>
                <div className="flex flex-col gap-4 px-4 md:px-o">
                    <SendForm />
                </div>
            </div>
        </div>
    )
}