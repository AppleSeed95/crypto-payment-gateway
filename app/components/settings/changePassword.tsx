'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

export default function ChangePasswordForm() {
    const [showModal, setShowModal] = useState(false)
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordStrength, setPasswordStrength] = useState(0)

    const calculatePasswordStrength = (password: string) => {
        let strength = 0
        if (password.length >= 8) strength += 20
        if (password.match(/[A-Z]/)) strength += 20
        if (password.match(/[a-z]/)) strength += 20
        if (password.match(/[0-9]/)) strength += 20
        if (password.match(/[^A-Za-z0-9]/)) strength += 20
        setPasswordStrength(strength)
    }

    const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPass = e.target.value
        setNewPassword(newPass)
        calculatePasswordStrength(newPass)
    }

    const handleSaveChanges = () => {
        // Here you would typically send the password change request to your backend
        console.log('Password change requested')
        setShowModal(false)
        // Reset form fields
        setOldPassword('')
        setNewPassword('')
        setConfirmPassword('')
        setPasswordStrength(0)
    }

    return (
        <Card className="w-full w-[30vw] border-none shadow-lg mx-auto bg-white dark:bg-gray-800">
            <CardHeader>
                <CardTitle>Change password</CardTitle>
                <CardDescription>We recommend doing that every 6 months for your safety.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button onClick={() => setShowModal(true)}>Change</Button>
            </CardContent>

            <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogContent className="sm:max-w-[425px]  bg-white dark:bg-gray-800 dark:text-gray-200 p-14">
                    <DialogHeader>
                        <DialogTitle>Change Password</DialogTitle>
                        <DialogDescription>
                            Enter your current password and choose a new one.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="old-password" className="text-right">
                                Old password
                            </Label>
                            <Input
                                id="old-password"
                                type="password"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                                className="col-span-3 flex-grow border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="new-password" className="text-right">
                                New password
                            </Label>
                            <Input
                                id="new-password"
                                type="password"
                                value={newPassword}
                                onChange={handleNewPasswordChange}
                                className="col-span-3 flex-grow border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"

                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="confirm-password" className="text-right">
                                Confirm password
                            </Label>
                            <Input
                                id="confirm-password"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="col-span-3 flex-grow border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label className="text-right">Password strength</Label>
                            <div className="col-span-3">
                                <Progress value={passwordStrength} className="w-full" />
                                <p className="text-sm text-gray-500 mt-1">
                                    {passwordStrength < 60 && "Weak"}
                                    {passwordStrength >= 60 && passwordStrength < 80 && "Medium"}
                                    {passwordStrength >= 80 && "Strong"}
                                </p>
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button onClick={handleSaveChanges}>Save Changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </Card>
    )
}