import ApiForm from "@/app/components/api/apiForm"
export default function ApiPage() {
    return (
        <div className="flex gap-10 justify-center pt-10  justify-center min-h-screen bg-gray-100 dark:bg-gray-900 ">
            <div className="px-4 md:px-0">
                <ApiForm />
            </div>
        </div>
    )
}