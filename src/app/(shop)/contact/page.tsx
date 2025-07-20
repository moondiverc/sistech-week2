import { Phone, Mail, MessageCircle, MapPin } from 'react-feather';

export default function Contact() {
    return (
        <main className="flex justify-center py-5">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg text-center p-8 shadow-lg max-w-2xl  mx-4">
                <div className="font-bold text-3xl text-gray-800 mb-2">Contact Us!</div>
                <div className="text-lg text-gray-600 mb-8">We'd love to hear from you. Get in touch with us!</div>

                <div className="grid md:grid-cols-2 gap-6 mb-4">
                    {/* WhatsApp */}
                    <div className="bg-white/60 rounded-lg p-6 hover:bg-white/80 transition-colors shadow-sm">
                        <div className="flex items-center justify-center mb-3">
                            <MessageCircle className="text-green-500" size={32} />
                        </div>
                        <div className="font-semibold text-gray-800 mb-2">WhatsApp</div>
                        <div className="text-gray-600">08123456789</div>
                    </div>

                    {/* email */}
                    <div className="bg-white/60 rounded-lg p-6 hover:bg-white/80 transition-colors shadow-sm">
                        <div className="flex items-center justify-center mb-3">
                            <Mail className="text-blue-500" size={32} />
                        </div>
                        <div className="font-semibold text-gray-800 mb-2">Email</div>
                        <div className="text-gray-600">HappyMart@example.com</div>
                    </div>

                    {/* phone */}
                    <div className="bg-white/60 rounded-lg p-6 hover:bg-white/80 transition-colors shadow-sm">
                        <div className="flex items-center justify-center mb-3">
                            <Phone className="text-purple-500" size={32} />
                        </div>
                        <div className="font-semibold text-gray-800 mb-2">Phone Call</div>
                        <div className="text-gray-600">08123456789</div>
                    </div>

                    {/* address */}
                    <div className="bg-white/60 rounded-lg p-6 hover:bg-white/80 transition-colors shadow-sm">
                        <div className="flex items-center justify-center mb-3">
                            <MapPin className="text-red-500" size={32} />
                        </div>
                        <div className="font-semibold text-gray-800 mb-2">Address</div>
                        <div className="text-gray-600">Jl. Labub No. 123<br />Jakarta, Indonesia</div>
                    </div>
                </div>
            </div>
        </main>
    )
}