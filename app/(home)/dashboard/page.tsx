import MyWallets from "@/app/components/dashboard/wallet"
import RecentOperations from "@/app/components/dashboard/recent-operation"
export default function DashboardPage() {
    return (
        <div className="flex flex-col md:flex-row gap-10 justify-center pt-10  justify-center min-h-screen bg-gray-100 dark:bg-gray-900 ">
            <div className="px-4 md:px-0">
                <MyWallets />
            </div>
            <div className="px-4 md:px-0">
                <RecentOperations />
            </div>
        </div>
    )
}