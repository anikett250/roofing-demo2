"use client"
import { motion } from "framer-motion"
import { Poppins } from "next/font/google"

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-poppins",
});

export default function Header() {
    return (
        <div className={`flex flex-col md:flex-row overflow-x-hidden justify-between gap-6 md:gap-0 ${poppins.className}`}>
            {/* Text Content */}
            <motion.div className="w-full md:w-1/2 px-4 md:px-0"
            initial = {{ x: "-100%", opacity:0 }}
            animate = {{ x: "0%", opacity:1 }}
            transition = {{ duration: 1.2 }}
            >
                <div className="text-[#F74F12] font-semibold text-xs md:text-sm ml-4 md:ml-50 mt-8 md:mt-50">// How ROOFCLAIM WORKS //</div>
                <div className="text-[#0F1C49] font-semibold text-[32px] md:text-[50px] lg:text-[70px] ml-4 md:ml-50 mt-3 md:mt-1 leading-tight md:leading-normal">Elevate Your Roof<br /> Care Experience</div>
                <div className="text-gray-600 ml-4 md:ml-50 mt-4 md:mt-3 text-sm md:text-base lg:text-[18px] leading-relaxed">RoofClaim is your go-to for all residential roofing needs, from small repairs<br className="hidden md:block" /> to full replacements and storm damage fixes. Our customer-first approach<br className="hidden md:block" /> guarantees a durable roof that protects your home.</div>
                <motion.button className="bg-[#F74F12] rounded-full px-5 md:px-7 py-3 md:py-4 ml-4 md:ml-50 mt-8 md:mt-10 text-white font-semibold text-sm md:text-base w-fit"
                initial = {{ scale: 1 }}
            transition = {{ type: "spring", damping:10, stiffness:100, mass:0.2  }}
            whileHover= {{ scale: 1.05 }}
            whileTap= {{ scale: 0.95 }}
            onClick={() => {
                        document.getElementById("contact")?.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                >
                    Get a Roof Inspection
                </motion.button>
            </motion.div>
            {/* Image */}
            <motion.div className="w-full md:w-1/2"
            initial = {{ x: "100%", opacity:0 }}
            animate = {{ x: "0%", opacity:1 }}
            transition = {{ duration: 1.2 }}
            >
                <img
                    src="/header.png"
                    alt="Roof inspection"
                    className="rounded-l-[70px] mt-6 md:mt-10 w-full h-auto object-cover mx-[15px] md:mx-0"
                />
            </motion.div>
        </div>
    )
}