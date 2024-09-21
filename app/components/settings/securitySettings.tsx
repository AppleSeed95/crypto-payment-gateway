'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

type SecurityOption = {
    id: string;
    label: string;
    checked: boolean;
}

export default function SecuritySettings() {
    const [options, setOptions] = useState<SecurityOption[]>([
        { id: 'email-auth', label: 'Login authorization via e-mail', checked: false },
        { id: '2fa-auth', label: 'Login authorization via 2FA', checked: false },
        { id: 'email-withdrawal', label: 'Send e-mail code on withdrawal', checked: false },
        { id: '2fa-withdrawal', label: 'Verify 2FA on withdrawal', checked: false },
    ])
    const [showModal, setShowModal] = useState(false)
    const [currentOption, setCurrentOption] = useState<SecurityOption | null>(null)
    const [confirmationCode, setConfirmationCode] = useState('')
    const [resendTimer, setResendTimer] = useState(0)

    useEffect(() => {
        let interval: NodeJS.Timeout
        if (resendTimer > 0) {
            interval = setInterval(() => {
                setResendTimer((prev) => prev - 1)
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [resendTimer])

    const handleCheckboxChange = (changedOption: SecurityOption) => {
        setCurrentOption(changedOption)
        setShowModal(true)
        setResendTimer(4)
    }

    const handleConfirm = () => {
        if (currentOption) {
            setOptions(options.map(option =>
                option.id === currentOption.id
                    ? { ...option, checked: !option.checked }
                    : option
            ))
            setShowModal(false)
            setConfirmationCode('')
            setCurrentOption(null)
        }
    }

    return (
        <Card className="w-full max-w-md shadow-lg border-none mx-auto bg-white dark:bg-gray-800">
            <CardHeader>
                <CardTitle>Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {options.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                        <Checkbox
                            id={option.id}
                            checked={option.checked}
                            onCheckedChange={() => handleCheckboxChange(option)}
                        />
                        <Label
                            htmlFor={option.id}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            {option.label}
                        </Label>
                    </div>
                ))}
            </CardContent>

            <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-700">
                    <DialogHeader>
                        <DialogTitle>Confirm action</DialogTitle>
                        <DialogDescription>
                            Please enter confirmation code below.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="confirmation-code" className="text-left">
                                Code from e-mail
                            </Label>
                            <Input
                                id="confirmation-code"
                                value={confirmationCode}
                                onChange={(e) => setConfirmationCode(e.target.value)}
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DialogFooter className="sm:justify-between">
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            Resend in {resendTimer} sec.
                        </div>
                        <Button onClick={handleConfirm}>Confirm</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </Card>
    )
}