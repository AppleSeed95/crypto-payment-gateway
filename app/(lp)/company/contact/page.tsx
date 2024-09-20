
import { Mail, MessageSquare, User, AtSign, HelpCircle } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
export default function ContactPage() {
    return (
        <div className="relative">
            <div className="bg-[#4574eb] pt-40 pb-32 text-white text-center"
                style={{
                    borderBottomLeftRadius: '100% 100%',
                    borderBottomRightRadius: '100% 100%'
                }}
            >
                <div className="text-3xl font-bold mb-10">Have any questions? Contact us</div>
                <div className="max-w-2xl mx-auto px-4">
                    We`re happy to answer any questions you may have! Just send us a message via live chat on the website.
                </div>
            </div>

            <div>
                <div className="container mx-auto px-4 py-12">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Left div */}
                        <div className="flex-1 bg-white p-8  flex flex-col items-center justify-center text-center">
                            <div className="bg-blue-100 p-4 rounded-full mb-6">
                                <Mail className="w-12 h-12 text-blue-500" />
                            </div>
                            <h2 className="text-2xl font-bold mb-2">Support</h2>
                            <a href="mailto:support@stellarpay.com" className="text-blue-500 hover:underline">
                                support@stellarpay.com
                            </a>
                        </div>

                        {/* Right div */}
                        <div className="flex-1 bg-white p-8 ">
                            <div className="flex items-center justify-center mb-6">
                                <div className="bg-blue-100 p-4 rounded-full">
                                    <MessageSquare className="w-12 h-12 text-blue-500" />
                                </div>
                            </div>
                            <h2 className="text-2xl font-bold mb-6 text-center">Ask Us</h2>
                            <form className="space-y-4">
                                <div className="relative">
                                    <User className="absolute top-2 left-2 text-gray-400" />
                                    <Input type="text" placeholder="Name" className="pl-10" />
                                </div>
                                <div className="relative">
                                    <AtSign className="absolute top-2 left-2 text-gray-400" />
                                    <Input type="email" placeholder="Email" className="pl-10" />
                                </div>
                                <div className="relative">
                                    <HelpCircle className="absolute top-2 left-2 text-gray-400" />
                                    <Textarea placeholder="What is your question?" className="pl-10 pt-2" rows={4} />
                                </div>
                                <div className='w-full flex justify-center'>
                                    <Button type="submit" className="w-full bg-blue-500 w-[200px] mx-auto py-6">
                                        Send Message
                                    </Button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}