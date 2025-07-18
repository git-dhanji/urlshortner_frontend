import { useSelector } from "react-redux";
import { Badge } from "../Index";
import UrlForm from "../UrlForm";
import TrustSection from "./TrustSection";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import CTAButtons from "./CTAButtons";
import InputWithButton from "../box/InputWithButton";

export default function HeroSection() {
    const [typedText, setTypedText] = useState("");
    const { isAuthenticated } = useSelector((state) => state.auth);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const words = ["Instantly", "Securely", "Efficiently", "Professionally"];
    // Typing animation effect
    useEffect(() => {
        const currentWord = words[currentWordIndex];
        let charIndex = 0;
        let isDeleting = false;

        const typeInterval = setInterval(() => {
            if (!isDeleting && charIndex < currentWord.length) {
                setTypedText(currentWord.slice(0, charIndex + 1));
                charIndex++;
            } else if (isDeleting && charIndex > 0) {
                setTypedText(currentWord.slice(0, charIndex - 1));
                charIndex--;
            } else if (!isDeleting && charIndex === currentWord.length) {
                setTimeout(() => {
                    isDeleting = true;
                }, 2000);
            } else if (isDeleting && charIndex === 0) {
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
                isDeleting = false;
            }
        }, isDeleting ? 50 : 100);

        return () => clearInterval(typeInterval);
    }, [currentWordIndex]);

    return (
        <section className="relative min-h-screen  flex flex-col items-center justify-center px-4 text-center">
            <div className="max-w-7xl  flex flex-col items-center justify-center">
                {/* Badge */}
                <Badge className="mb-4" />
                {/* Main Heading */}
                <h1 className="text-5xl text-center md:text-7xl lg:text-8xl font-bold mb-4 font-space-grotesk">
                    <span className="block text-center text-white mb-4">Shorten URLs</span>
                    <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                        {typedText}
                        <span className="animate-pulse">|</span>
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed animate-slideUp">
                    Transform your long, messy URLs into clean, professional short links.

                    <span><Badge text="" child={<div><span className="text-red-300"><span className="text-emerald-100">From</span> : https:www.longurl.com/converany</span> <span className="text-green-500"><span className="text-emerald-100">To</span> : tny.com/abcd</span></div>} /></span>
                </p>

                {/* URL Shortener Form */}
                <div className="mb-16 animate-slideUp  w-full" style={{ animationDelay: '0.2s' }}>
                    {/* <UrlForm /> */}
                    <InputWithButton />
                </div>

                {/* Trust Indicators */}
                <div className="bg-transparent">
                    <TrustSection />
                </div>

                {/* CTA Buttons */}
                {!isAuthenticated && (
                    <CTAButtons />
                )}

                {/* Scroll Indicator */}
                <div className="animate-bounce">
                    <svg className="w-6 h-6 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </section>
    )
}