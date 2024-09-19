"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProfileForm from "@/app/components/settings/profile"
import NotificationSettings from "@/app/components/settings/notifications"

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState("profile")

    return (
        <div className="container w-[30vw] mx-auto py-10">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="profile">Profile</TabsTrigger>
                    <TabsTrigger value="security">Security</TabsTrigger>
                    <TabsTrigger value="notifications">Notifications</TabsTrigger>
                </TabsList>
                <TabsContent value="profile">
                    <ProfileForm />
                </TabsContent>
                <TabsContent value="security">
                    <Card>
                        <CardHeader>
                            <CardTitle>Security</CardTitle>
                            <CardDescription>Manage your account security settings.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="current-password">Current Password</Label>
                                <Input id="current-password" type="password" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="new-password">New Password</Label>
                                <Input id="new-password" type="password" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="confirm-password">Confirm New Password</Label>
                                <Input id="confirm-password" type="password" />
                            </div>
                            <div className="flex items-center space-x-2">
                                <Switch id="2fa" />
                                <Label htmlFor="2fa">Enable Two-Factor Authentication</Label>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Update Security Settings</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="notifications">
                    <Card>
                        <CardHeader>
                            <CardTitle>Notifications</CardTitle>
                            <CardDescription>Manage your notification preferences.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <Switch id="email-notifications" />
                                <Label htmlFor="email-notifications">Email Notifications</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Switch id="push-notifications" />
                                <Label htmlFor="push-notifications">Push Notifications</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Switch id="sms-notifications" />
                                <Label htmlFor="sms-notifications">SMS Notifications</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Switch id="marketing-emails" />
                                <Label htmlFor="marketing-emails">Marketing Emails</Label>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save Notification Preferences</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}