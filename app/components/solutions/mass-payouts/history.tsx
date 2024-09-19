import { FileX } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function History() {
    return (
        <Card className=" bg-white dark:bg-gray-800 w-full max-w-md border-none shadow-lg text-center">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Transaction History</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
                <FileX className="w-24 h-24 text-muted-foreground" />
                <div className="space-y-2">
                    <h3 className="text-xl font-semibold">You have no lists yet</h3>
                    <CardDescription>Try to import or create a new one</CardDescription>
                </div>
                <div className="flex space-x-2 mt-4">
                    <Button
                        className='border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-900'
                        variant="outline"
                    >
                        Import List
                    </Button>
                    <Button>Create New</Button>
                </div>
            </CardContent>
        </Card>
    )
}