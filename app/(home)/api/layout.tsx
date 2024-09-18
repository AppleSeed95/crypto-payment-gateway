'use client'
import { Button } from "@/components/ui/button"
import { Plus, Settings } from "lucide-react";
import Link from "next/link";
export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="relative py-4 pt-10  w-full  bg-gray-100 dark:bg-gray-900">
                <div className="w-[40vw] gap-2 mx-auto flex justify-center">
                    <Link href={'/api/add'}>
                        <Button className="bg-blue-100 flex gap-2 dark:bg-blue-200 text-blue-600 hover:bg-blue-200 ">
                            <Plus />Create
                        </Button>
                    </Link>
                    <Link href={'/api/edit'}>
                        <Button className="bg-blue-100 flex gap-2 dark:bg-blue-200 text-blue-600 hover:bg-blue-200 ">
                            <Settings />Edit
                        </Button>
                    </Link>
                </div>
            </div>
            {children}
        </>
    );
}
