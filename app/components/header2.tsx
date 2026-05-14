"use client"
import { motion } from "framer-motion"

export default function Header2() {
    return (
        <div className="overflow-x-hidden">
            <div className="flex flex-col-reverse md:flex-row mt-10 gap-10 md:gap-5 ">
                <motion.div
                    className="ml-50 mb-10"
                    initial={{ x: "-100%", opacity: 0 }}
                    whileInView={{ x: "0%", opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                >
                    <img
                        src="/header2.png"
                        alt=""
                        className="rounded-tr-[70px] md:w-150 w-190 h-110 md:h-210 -mx-50 object-cover object-top  md:mx-0 max-w-[90vw] md:max-w-none"
                    />
                </motion.div>

                <motion.div
                    className="px-4 md:px-0"
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: "0%", opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                >
                    <div className="text-[#F74F12] font-semibold text-xs md:text-sm ml-4 md:ml-50 mt-8 md:mt-50">
      // EXPLORE OUR ROOFING SOLUTIONS //
                    </div>
                    <div className="text-[#0F1C49] font-semibold text-[32px] md:text-[50px] lg:text-[70px] ml-4 md:ml-50 mt-3 md:mt-1 leading-tight md:leading-normal">
                        Tell Us What Your<br /> Roof Needs
                    </div>
                    <div className="text-gray-600 ml-4 md:ml-50 mt-4 md:mt-3 text-sm md:text-base lg:text-[18px] leading-relaxed">
                        RoofClaim is here for all your roofing needs, from roof repairs to full roof replacements. We begin with a free roof inspection to check your roof's condition, helping you understand the cost of your roof replacement or repair.
                    </div>
                    <div className="text-gray-600 ml-4 md:ml-50 mt-4 md:mt-3 text-sm md:text-base lg:text-[18px] leading-relaxed">
                        With a focus on quality and efficiency, RoofClaim ensures a seamless roofing experience from initial assessment to the final inspection and warranty. This way, you can trust the durability and safety of your roof for many years.
                    </div>
                </motion.div>
            </div>
            <motion.div className="flex flex-col md:flex-row mb-10 justify-between gap-10 ml-7 max-w-sm md:max-w-full md:px-50 "
                initial={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="flex flex-col gap-7">
                    <div className="flex items-center gap-7 ">
                        <div className=" md:w-30 md:h-30 w-20 h-20 border-r-4 border-b-4 border-[#F74F12] md:p-8 p-5 ">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M7 1C6.44772 1 6 1.44772 6 2V3H5C3.34315 3 2 4.34315 2 6V20C2 21.6569 3.34315 23 5 23H13.101C12.5151 22.4259 12.0297 21.7496 11.6736 21H5C4.44772 21 4 20.5523 4 20V11H20V11.2899C20.7224 11.5049 21.396 11.8334 22 12.2547V6C22 4.34315 20.6569 3 19 3H18V2C18 1.44772 17.5523 1 17 1C16.4477 1 16 1.44772 16 2V3H8V2C8 1.44772 7.55228 1 7 1ZM16 6V5H8V6C8 6.55228 7.55228 7 7 7C6.44772 7 6 6.55228 6 6V5H5C4.44772 5 4 5.44772 4 6V9H20V6C20 5.44772 19.5523 5 19 5H18V6C18 6.55228 17.5523 7 17 7C16.4477 7 16 6.55228 16 6Z" fill="#F74F12"></path> <path d="M17 16C17 15.4477 17.4477 15 18 15C18.5523 15 19 15.4477 19 16V17.703L19.8801 18.583C20.2706 18.9736 20.2706 19.6067 19.8801 19.9973C19.4896 20.3878 18.8564 20.3878 18.4659 19.9973L17.2929 18.8243C17.0828 18.6142 16.9857 18.3338 17.0017 18.0588C17.0006 18.0393 17 18.0197 17 18V16Z" fill="#F74F12"></path> <path fillRule="evenodd" clipRule="evenodd" d="M24 18C24 21.3137 21.3137 24 18 24C14.6863 24 12 21.3137 12 18C12 14.6863 14.6863 12 18 12C21.3137 12 24 14.6863 24 18ZM13.9819 18C13.9819 20.2191 15.7809 22.0181 18 22.0181C20.2191 22.0181 22.0181 20.2191 22.0181 18C22.0181 15.7809 20.2191 13.9819 18 13.9819C15.7809 13.9819 13.9819 15.7809 13.9819 18Z" fill="#F74F12"></path> </g></svg>
                        </div>
                        <div className="text-black md:text-[23px] text-md font-semibold ">Accurate Estimates</div>
                    </div>
                    <div className="text-gray-700  md:text-lg text-sm ">Whether you're curious about the cost of roof repairs or replacements, we provide a transparent roof estimate after a thorough inspection, helping you make informed decisions about you roofing needs</div>
                </div>
                <div className="flex flex-col gap-7">
                    <div className="flex items-center gap-7 ">
                        <div className=" md:w-30 md:h-30 md:p-8 w-20 h-20 p-5 bg-[#F74F12] ">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 4V10L5.20285 16.8531C4.27496 18.1786 5.22327 20 6.84131 20H17.1587C18.7767 20 19.725 18.1786 18.7972 16.8531L14 10V4M10 4H14M10 4H8M14 4H16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </div>
                        <div className="text-black md:text-[23px] text-md font-semibold ">Accurate Estimates</div>
                    </div>
                    <div className="text-gray-700 md:text-lg text-sm ">Different roof types required different solutions. Our experts evaluate your roof's condition to determine whether you need minor fixes or a full replacement, offering customized<br /> services to suit your specific situation</div>
                </div>
                <div className="flex flex-col gap-7">
                    <div className="flex items-center gap-7 ">
                        <div className=" md:w-30 md:h-30 w-20 h-20 border-r-4 border-b-4 border-[#F74F12] md:p-8 p-5">
                            <svg viewBox="0 -1 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M2 11C1.08049 11 0.648384 9.86349 1.33564 9.25259L10.3356 1.25259C10.7145 0.915803 11.2855 0.915803 11.6644 1.25259L20.6644 9.25259C21.3516 9.86349 20.9195 11 20 11H19V18C19 18.5523 18.5523 19 18 19H4C3.44772 19 3 18.5523 3 18V11H2ZM8 17V12C8 11.4477 8.44772 11 9 11H13C13.5523 11 14 11.4477 14 12V17H17V10C17 9.62477 17.2067 9.29781 17.5124 9.12674L11 3.33795L4.48762 9.12674C4.79334 9.29781 5 9.62477 5 10V17H8ZM10 17V13H12V17H10Z" fill="#F74F12"></path> </g></svg>
                        </div>
                        <div className="text-black md:text-[23px] text-md font-semibold ">Accurate Estimates</div>
                    </div>
                    <div className="text-gray-700 md:text-lg text-sm ">From shingles and flashing gutters and ventilation, we address every component of you roof system. This ensures long-lasting durability and optimal performance for your home.</div>
                </div>
            </motion.div>
        </div>
    )
}