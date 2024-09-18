import ApiForm from "@/app/components/api/apiForm"
export default function ApiAddPage() {
    return (
        <div className="fixed -z-50 w-full flex gap-10 justify-center pt-10  justify-center min-h-screen bg-gray-100 dark:bg-gray-900 ">
            <div>
                <ApiForm />
            </div>
        </div>
    )
}