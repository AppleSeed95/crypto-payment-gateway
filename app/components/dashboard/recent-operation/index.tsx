import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { History } from "lucide-react"

export default function RecentOperations() {
    return (
        <Card className="bg-white dark:bg-gray-800 max-w-2xl grow-0 shadow-lg border-none">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Recent Operations</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center text-center py-12">
                <History className="w-24 h-24 text-gray-300 mb-6" />
                <h3 className="text-xl font-semibold mb-2">You haven't made any operations yet</h3>
                <p className="text-gray-500">
                    Here will be shown the last 5 transactions of your account
                </p>
            </CardContent>
        </Card>
    )
}