const testimonialData = [
    {
        name: "Sarah Johnson",
        role: "Marketing Director",
        company: "TechCorp",
        avatar: "SJ",
        testimonial: "QuickLink has revolutionized our marketing campaigns. The analytics are incredibly detailed and help us understand our audience better.",
        rating: 5
    },
    {
        name: "Mike Chen",
        role: "Content Creator",
        company: "CreativeStudio",
        avatar: "MC",
        testimonial: "The custom link feature is amazing! My branded links look professional and my click-through rates have increased by 40%.",
        rating: 5
    },
    {
        name: "Alex Rivera",
        role: "Small Business Owner",
        company: "LocalBiz",
        avatar: "AR",
        testimonial: "Simple, fast, and reliable. QuickLink handles all our link management needs without any complexity. Highly recommended!",
        rating: 5
    }
]

export default function TestimonialSection() {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space-grotesk">
                        Trusted by Thousands
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Join the community of professionals who trust QuickLink
                    </p>
                </div>

                {/* Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {testimonialData.map((testimonial, index) => (
                        <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 group hover:transform hover:scale-105">
                            {/* Stars */}
                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Testimonial */}
                            <p className="text-gray-300 mb-6 italic leading-relaxed">
                                "{testimonial.testimonial}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                                    <p className="text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}