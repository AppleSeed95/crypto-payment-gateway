'use client'
import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Camera, X } from "lucide-react"

export default function ApiForm() {
    const [image, setImage] = useState<string | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]
            const reader = new FileReader()
            reader.onload = (e) => {
                setImage(e.target?.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleImageClick = () => {
        fileInputRef.current?.click()
    }

    const handleRemoveImage = (e: React.MouseEvent) => {
        e.stopPropagation() // Prevent triggering handleImageClick
        setImage(null)
        if (fileInputRef.current) {
            fileInputRef.current.value = ''
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted')
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg px-10">
            <div className="space-y-2">
                <div
                    className="relative w-32 h-32 mx-auto rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer overflow-hidden group"
                    onClick={handleImageClick}
                >
                    {image ? (
                        <>
                            <img src={image} alt="Profile" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <X className="w-8 h-8 text-white" onClick={handleRemoveImage} />
                            </div>
                        </>
                    ) : (
                        <Camera className="w-12 h-12 text-gray-400" />
                    )}
                </div>
                <Input
                    id="image"
                    type="file"
                    accept=".jpg,.gif,.png"
                    onChange={handleImageChange}
                    className="hidden"
                    ref={fileInputRef}
                />
                <p className="text-sm text-muted-foreground text-center">
                    Click to upload. You can upload your site's profile picture in .jpg, .gif, .png.
                </p>
            </div>

            <div className="space-y-2">
                <Label htmlFor="name" className='text-gray-700 dark:text-gray-300'>Name</Label>
                <Input id="name" type="text" placeholder="Enter your name" className='border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300' />
            </div>

            <div className="space-y-2">
                <Label htmlFor="url" className='text-gray-700 dark:text-gray-300'>URL</Label>
                <Input id="url" type="url" placeholder="Enter your URL" className='border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300' />
            </div>

            <Button type="submit" className="w-full">
                Save Changes
            </Button>
        </form>
    )
}