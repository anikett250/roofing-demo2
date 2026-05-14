"use client"
import { useState } from "react";
import { motion } from "framer-motion";

const items = [
    "Interior Roof Inspection for leaks and Water Damage",
    "Exterior Roof Inspection for Debris and Gutter Functionality",
    "Flashing and Moisture Control",
    "Algae, Moss, and Growth Inspection",
    "Safety Compliance and Roof Repair Documentation",
];

type ArrowIconProps = {
    active: boolean;
};

const ArrowIcon = ({ active }: ArrowIconProps) => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M2.5 6H9.5M6.5 3L9.5 6L6.5 9"
            stroke={active ? "#D85A30" : "#888780"}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default function Learnmore() {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <motion.div className=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
        >
            <div className="text-[#0F1C49] text-[36px] md:text-[60px] font-semibold text-center">
                Learn More
            </div>
            <div className="flex flex-col gap-2 p-3 mx-4 md:mx-100">
                {items.map((item, i) => {
                    const isActive = i === 0;
                    return (
                        <div
                            key={i}
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(null)}
                            className={`
                        flex items-center justify-between
                        rounded-xl px-5 py-4 cursor-pointer
                        border transition-colors duration-150
                        ${isActive
                                    ? "bg-orange-50 border-orange-200"
                                    : hovered === i
                                        ? "bg-gray-50 border-gray-200"
                                        : "bg-white border-gray-200"
                                }
                    `}
                        >
                            <span
                                className={`text-[14px] md:text-[15px] font-normal leading-snug ${isActive ? "text-orange-600" : "text-gray-900"
                                    }`}
                            >
                                {item}
                            </span>
                            <div
                                className={`
                            flex-shrink-0 ml-3 w-7 h-7 rounded-full
                            flex items-center justify-center border
                            ${isActive ? "border-orange-300" : "border-gray-300"}
                        `}
                            >
                                <ArrowIcon active={isActive} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    )
}