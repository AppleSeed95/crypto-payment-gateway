import ApiSettingsForm from "@/app/components/api/apiSettingsForm"
export default function ApiAddPage() {
    return (
        <div className=" flex gap-10 justify-center pt-10  justify-center min-h-screen bg-gray-100 dark:bg-gray-900 py-6">
            <div className="px-4 md:px-0">
                <ApiSettingsForm />
            </div>
        </div>
    )
}