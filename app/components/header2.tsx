"use client"
import { motion } from "framer-motion"

export default function Header2() {
    return (
        <div className="overflow-x-hidden">
            <div className="flex mt-30 gap-60 ">
                <motion.div className="ml-50 mb-10 "
                    initial={{ x: "-100%", opacity: 0 }}
                    whileInView={{ x: "0%", opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                >
                    <img
                        src="/header2.png"
                        alt=""
                        className="rounded-tr-[130px] w-150 h-210 object-cover object-top "
                    />
                </motion.div>
                <motion.div className=""
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: "0%", opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                >
                    <div className="text-[#F74F12] font-semibold mt-50 ">// EXPLORE OUR ROOFING SOLUTIONS //</div>
                    <div className="text-[#0F1C49] font-semibold text-[70px] mt-1 ">Tell Us What Your<br /> Roof Needs</div>
                    <div className="text-gray-600 mt-3 text-[18px] ">RoofClaim is here for all your roofing needs, from roof repairs to full roof<br /> replacements. We begin with a free roof inspection to check your roof’s<br /> condition, helping you understand the cost of your roof replacement or repair.</div>
                    <div className="text-gray-600 mt-5 text-[18px] ">With a focus on quality and efficiency, RoofClaim ensures a seamless roofing<br /> experience from initial assessment to the final inspection and warranty. This way,<br /> you can trust the durability and safety of your roof for many years.</div>
                </motion.div>
            </div>
            <motion.div className="flex mb-20 justify-between px-50"
                initial={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="flex flex-col gap-7">
                    <div className="flex items-center gap-7 ">
                        <div className=" w-30 h-30 border-r-4 border-b-4 border-[#F74F12] p-8 ">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M7 1C6.44772 1 6 1.44772 6 2V3H5C3.34315 3 2 4.34315 2 6V20C2 21.6569 3.34315 23 5 23H13.101C12.5151 22.4259 12.0297 21.7496 11.6736 21H5C4.44772 21 4 20.5523 4 20V11H20V11.2899C20.7224 11.5049 21.396 11.8334 22 12.2547V6C22 4.34315 20.6569 3 19 3H18V2C18 1.44772 17.5523 1 17 1C16.4477 1 16 1.44772 16 2V3H8V2C8 1.44772 7.55228 1 7 1ZM16 6V5H8V6C8 6.55228 7.55228 7 7 7C6.44772 7 6 6.55228 6 6V5H5C4.44772 5 4 5.44772 4 6V9H20V6C20 5.44772 19.5523 5 19 5H18V6C18 6.55228 17.5523 7 17 7C16.4477 7 16 6.55228 16 6Z" fill="#F74F12"></path> <path d="M17 16C17 15.4477 17.4477 15 18 15C18.5523 15 19 15.4477 19 16V17.703L19.8801 18.583C20.2706 18.9736 20.2706 19.6067 19.8801 19.9973C19.4896 20.3878 18.8564 20.3878 18.4659 19.9973L17.2929 18.8243C17.0828 18.6142 16.9857 18.3338 17.0017 18.0588C17.0006 18.0393 17 18.0197 17 18V16Z" fill="#F74F12"></path> <path fillRule="evenodd" clipRule="evenodd" d="M24 18C24 21.3137 21.3137 24 18 24C14.6863 24 12 21.3137 12 18C12 14.6863 14.6863 12 18 12C21.3137 12 24 14.6863 24 18ZM13.9819 18C13.9819 20.2191 15.7809 22.0181 18 22.0181C20.2191 22.0181 22.0181 20.2191 22.0181 18C22.0181 15.7809 20.2191 13.9819 18 13.9819C15.7809 13.9819 13.9819 15.7809 13.9819 18Z" fill="#F74F12"></path> </g></svg>
                        </div>
                        <div className="text-black text-[23px] font-semibold ">Accurate Estimates</div>
                    </div>
                    <div className="text-gray-700 ">Whether you're curious about the cost of roof repairs or<br /> replacements, we provide a transparent roof estimate<br /> after a thorough inspection, helping you make informed<br /> decisions about you roofing needs</div>
                </div>
                <div className="flex flex-col gap-7">
                    <div className="flex items-center gap-7 ">
                        <div className=" w-30 h-30 p-8 bg-[#F74F12] ">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 4V10L5.20285 16.8531C4.27496 18.1786 5.22327 20 6.84131 20H17.1587C18.7767 20 19.725 18.1786 18.7972 16.8531L14 10V4M10 4H14M10 4H8M14 4H16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </div>
                        <div className="text-black text-[23px] font-semibold ">Accurate Estimates</div>
                    </div>
                    <div className="text-gray-700">Different roof types required different solutions. Our experts<br /> evaluate your roof's condition to determine whether you<br /> need minor fixes or a full replacement, offering customized<br /> services to suit your specific situation</div>
                </div>
                <div className="flex flex-col gap-7">
                    <div className="flex items-center gap-7 ">
                        <div className=" w-30 h-30 border-r-4 border-b-4 border-[#F74F12] p-8">
                            <svg viewBox="0 -1 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M2 11C1.08049 11 0.648384 9.86349 1.33564 9.25259L10.3356 1.25259C10.7145 0.915803 11.2855 0.915803 11.6644 1.25259L20.6644 9.25259C21.3516 9.86349 20.9195 11 20 11H19V18C19 18.5523 18.5523 19 18 19H4C3.44772 19 3 18.5523 3 18V11H2ZM8 17V12C8 11.4477 8.44772 11 9 11H13C13.5523 11 14 11.4477 14 12V17H17V10C17 9.62477 17.2067 9.29781 17.5124 9.12674L11 3.33795L4.48762 9.12674C4.79334 9.29781 5 9.62477 5 10V17H8ZM10 17V13H12V17H10Z" fill="#F74F12"></path> </g></svg>
                        </div>
                        <div className="text-black text-[23px] font-semibold ">Accurate Estimates</div>
                    </div>
                    <div className="text-gray-700">From shingles and flashing gutters and ventilation, we<br /> address every component of you roof system. This<br /> ensures long-lasting durability and optimal<br /> performance for your home.</div>
                </div>
            </motion.div>
            <div className="flex justify-between mb-50 ">
                <motion.div className=""
                    initial={{ x: "-100%", opacity: 0 }}
                    whileInView={{ x: "0%", opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                >
                    <div className="text-[#F74F12] font-semibold ml-50 mt-20 ">// Why Choose RoofClaim? //</div>
                    <div className="text-[#0F1C49] font-semibold text-[70px] ml-50 mt-1 ">What Makes RoofClaim<br /> Stand Out</div>
                    <div className="text-gray-600 ml-50 mt-3 text-[18px] ">RoofClaim has earned a reputation as a trusted leader in the roofing industry. Here's<br /> what makes us different:</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-45 ">
                        <div className="rounded-[24px] border border-gray-200/60 p-6 bg-white hover:shadow-md transition-all">
                            <div className="mb-4">
                                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
                                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                        stroke="#F74F12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.75 12L10.58 14.83L16.25 9.17004"
                                        stroke="#F74F12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3 className="text-lg text-black font-semibold mb-2">BBB Accredited</h3>
                            <p className="text-sm text-gray-500">
                                Acknowledged for our dedication to trust, openness, and ethical practices.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="rounded-[24px] border border-gray-200/60 p-6 bg-white hover:shadow-md transition-all">
                            <div className="mb-4">
                                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
                                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                        stroke="#F74F12" strokeWidth="1.5" />
                                    <path d="M7.75 12L10.58 14.83L16.25 9.17004"
                                        stroke="#F74F12" strokeWidth="1.5" />
                                </svg>
                            </div>
                            <h3 className="text-lg text-black font-semibold mb-2">4.9 - Google Star Rating</h3>
                            <p className="text-sm text-gray-500">
                                Don’t just take our word for it. Our homeowners agree!
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="rounded-[24px] border border-gray-200/60 p-6 bg-white hover:shadow-md transition-all">
                            <div className="mb-4">
                                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
                                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                        stroke="#F74F12" strokeWidth="1.5" />
                                    <path d="M7.75 12L10.58 14.83L16.25 9.17004"
                                        stroke="#F74F12" strokeWidth="1.5" />
                                </svg>
                            </div>
                            <h3 className="text-lg text-black font-semibold mb-2">Affordable Residential Roofing Services</h3>
                            <p className="text-sm text-gray-500">
                                Get your roofing estimate with a single click for ultimate convenience.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="rounded-[24px] border border-gray-200/60 p-6 bg-white hover:shadow-md transition-all">
                            <div className="mb-4">
                                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
                                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                        stroke="#F74F12" strokeWidth="1.5" />
                                    <path d="M7.75 12L10.58 14.83L16.25 9.17004"
                                        stroke="#F74F12" strokeWidth="1.5" />
                                </svg>
                            </div>
                            <h3 className="text-lg text-black font-semibold mb-2">Million Dollar Guarantee</h3>
                            <p className="text-sm text-gray-500">
                                Our industry-leading guarantee ensures peace of mind for all our customers.
                            </p>
                        </div>

                    </div>
                </motion.div>
                <motion.div className="relative mr-15 "
                    initial={{ x: "100%", opacity: 0 }}
                    whileInView={{ x: "0%", opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                >
                    <img
                        src="/header3.jpg"
                        alt=""
                        className="w-180 h-200 rounded-[30px]"
                    />

                    {/* Overlay card */}
                    <div className="absolute bottom-5 left-4 bg-white rounded-[30px] items-center flex flex-col gap-5 p-13 shadow-lg">
                        <svg
                            className="rounded-full bg-[#F74F12] p-7 w-30 h-30 "
                            height="200px"
                            width="200px"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 512 512"
                            xmlSpace="preserve"
                            fill="#ffffff"
                        >
                            <g>
                                <path d="M435.95,287.525c32.51,0,58.87-26.343,58.87-58.853c0-32.51-26.361-58.871-58.87-58.871c-32.502,0-58.863,26.361-58.863,58.871C377.088,261.182,403.448,287.525,435.95,287.525z" />
                                <path d="M511.327,344.251c-2.623-15.762-15.652-37.822-25.514-47.677c-1.299-1.306-7.105-1.608-8.673-0.636c-11.99,7.374-26.074,11.714-41.19,11.714c-15.099,0-29.184-4.34-41.175-11.714c-1.575-0.972-7.373-0.67-8.672,0.636c-2.757,2.757-5.765,6.427-8.698,10.683c7.935,14.94,14.228,30.81,16.499,44.476c2.27,13.7,1.533,26.67-2.138,38.494c13.038,4.717,28.673,6.787,44.183,6.787C476.404,397.014,517.804,382.987,511.327,344.251z" />
                                <path d="M254.487,262.691c52.687,0,95.403-42.716,95.403-95.402c0-52.67-42.716-95.386-95.403-95.386c-52.678,0-95.378,42.716-95.378,95.386C159.109,219.975,201.808,262.691,254.487,262.691z" />
                                <path d="M335.269,277.303c-2.07-2.061-11.471-2.588-14.027-1.006c-19.448,11.966-42.271,18.971-66.755,18.971c-24.466,0-47.3-7.005-66.738-18.971c-2.555-1.583-11.956-1.055-14.026,1.006c-16.021,16.004-37.136,51.782-41.384,77.288c-10.474,62.826,56.634,85.508,122.148,85.508c65.532,0,132.639-22.682,122.165-85.508C372.404,329.085,351.289,293.307,335.269,277.303z" />
                                <path d="M76.049,287.525c32.502,0,58.862-26.343,58.862-58.853c0-32.51-26.36-58.871-58.862-58.871c-32.511,0-58.871,26.361-58.871,58.871C17.178,261.182,43.538,287.525,76.049,287.525z" />
                                <path d="M115.094,351.733c2.414-14.353,9.225-31.253,17.764-46.88c-2.38-3.251-4.759-6.083-6.955-8.279c-1.299-1.306-7.097-1.608-8.672-0.636c-11.991,7.374-26.076,11.714-41.182,11.714c-15.108,0-29.202-4.34-41.183-11.714c-1.568-0.972-7.382-0.67-8.681,0.636c-9.887,9.854-22.882,31.915-25.514,47.677c-6.468,38.736,34.924,52.762,75.378,52.762c14.437,0,29.016-1.777,41.459-5.84C113.587,379.108,112.757,365.835,115.094,351.733z" />
                            </g>
                        </svg>

                        <div className="text-black font-semibold">
                            20 Years<br /> Experience
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}