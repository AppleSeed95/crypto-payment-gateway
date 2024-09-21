"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProfileForm from "@/app/components/settings/profile"
import NotificationSettings from "@/app/components/settings/notifications"
import SecuritySettings from "@/app/components/settings/securitySettings"
import ChangePasswordForm from "@/app/components/settings/changePassword"

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState("profile")

    return (
        <div className="w-full bg-gray-100 dark:bg-gray-900 min-h-screen">
            <div className="container max-w-md mx-auto py-10 px-4 ">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="shadow-md dark:bg-gray-700 grid w-full grid-cols-3">
                        <TabsTrigger className="hover:bg-gray-200 data-[state=active]:bg-gray-100 dark:data-[state=active]:bg-gray-800 dark:hover:bg-gray-600 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300" value="profile">Profile</TabsTrigger>
                        <TabsTrigger className="hover:bg-gray-200 data-[state=active]:bg-gray-100 dark:data-[state=active]:bg-gray-800 dark:hover:bg-gray-600 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300" value="security">Security</TabsTrigger>
                        <TabsTrigger className="hover:bg-gray-200 data-[state=active]:bg-gray-100 dark:data-[state=active]:bg-gray-800 dark:hover:bg-gray-600 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300" value="notifications">Notifications</TabsTrigger>
                    </TabsList>
                    <TabsContent value="profile">
                        <ProfileForm />
                    </TabsContent>
                    <TabsContent value="security">
                        <div className="flex flex-col gap-4">
                            <SecuritySettings />
                            <ChangePasswordForm />
                        </div>
                    </TabsContent>
                    <TabsContent value="notifications">
                        <NotificationSettings />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}