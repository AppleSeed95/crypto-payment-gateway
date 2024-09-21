import { Mail, MessageSquare, User, AtSign, HelpCircle } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
    return (
        <div className="relative">
            <div className="bg-[#4574eb] pt-20 md:pt-40 pb-16 md:pb-32 text-white text-center px-4"
                style={{
                    borderBottomLeftRadius: '100% 100%',
                    borderBottomRightRadius: '100% 100%'
                }}
            >
                <div className="text-2xl md:text-3xl font-bold mb-6 md:mb-10">Have any questions? Contact us</div>
                <div className="max-w-2xl px-10 mx-auto text-sm md:text-base">
                    We`re happy to answer any questions you may have! Just send us a message via live chat on the website.
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Left div */}
                    <div className="flex-1 bg-white p-6 md:p-8 flex flex-col items-center justify-center text-center  rounded-lg">
                        <div className="bg-blue-100 p-4 rounded-full mb-4 md:mb-6">
                            <Mail className="w-8 h-8 md:w-12 md:h-12 text-blue-500" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold mb-2">Support</h2>
                        <a href="mailto:support@stellarpay.com" className="text-blue-500 hover:underline text-sm md:text-base">
                            support@stellarpay.com
                        </a>
                    </div>

                    {/* Right div */}
                    <div className="flex-1 bg-white p-6 md:p-8  rounded-lg">
                        <div className="flex items-center justify-center mb-4 md:mb-6">
                            <div className="bg-blue-100 p-4 rounded-full">
                                <MessageSquare className="w-8 h-8 md:w-12 md:h-12 text-blue-500" />
                            </div>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">Ask Us</h2>
                        <form className="space-y-4">
                            <div className="relative">
                                <User className="absolute top-3 left-3 text-gray-400 w-5 h-5" />
                                <Input type="text" placeholder="Name" className="pl-10 py-2" />
                            </div>
                            <div className="relative">
                                <AtSign className="absolute top-3 left-3 text-gray-400 w-5 h-5" />
                                <Input type="email" placeholder="Email" className="pl-10 py-2" />
                            </div>
                            <div className="relative">
                                <HelpCircle className="absolute top-3 left-3 text-gray-400 w-5 h-5" />
                                <Textarea placeholder="What is your question?" className="pl-10 pt-2" rows={4} />
                            </div>
                            <div className='w-full flex justify-center'>
                                <Button type="submit" className="w-full md:w-[200px] bg-blue-500 py-2 md:py-6 text-sm md:text-base">
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}