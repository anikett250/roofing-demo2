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
        <div className={`flex overflow-x-hidden justify-between ${poppins.className}`}>
            <motion.div className=""
            initial = {{ x: "-100%", opacity:0 }}
            animate = {{ x: "0%", opacity:1 }}
            transition = {{ duration: 1.2 }}
            >
                <div className="text-[#F74F12] font-semibold ml-50 mt-50 ">// How ROOFCLAIM WORKS //</div>
                <div className="text-[#0F1C49] font-semibold text-[70px] ml-50 mt-1 ">Elevate Your Roof<br /> Care Experience</div>
                <div className="text-gray-600 ml-50 mt-3 text-[18px] ">RoofClaim is your go-to for all residential roofing needs, from small repairs<br /> to full replacements and storm damage fixes. Our customer-first approach<br /> guarantees a durable roof that protects your home.</div>
                <motion.div className="bg-[#F74F12] rounded-full w-57 px-7 py-4 ml-50 mt-10 "
                initial = {{ scale: 1 }}
            transition = {{ type: "spring", damping:10, stiffness:100, mass:0.2  }}
            whileHover= {{ scale: 1.05 }}
            whileTap= {{ scale: 0.95 }}
                >
                    Get a Roof Inspection
                </motion.div>
            </motion.div>
            <motion.div className=""
            initial = {{ x: "100%", opacity:0 }}
            animate = {{ x: "0%", opacity:1 }}
            transition = {{ duration: 1.2 }}
            >
                <img
                    src="/header.png"
                    alt=""
                    className="rounded-l-[30px] mt-10 "
                />
            </motion.div>
        </div>
    )
}