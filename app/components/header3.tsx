"use client"

import { motion } from "framer-motion"

export default function Header3() {
    return (
        <div className="flex flex-col md:flex-row justify-between">
            <motion.div
                className=""
                initial={{ x: "-100%", opacity: 0 }}
                whileInView={{ x: "0%", opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
            >
                <div className="text-[#F74F12] font-semibold ml-5 md:ml-50 mt-10 md:mt-20 text-sm md:text-base">
      // Why Choose RoofClaim? //
                </div>
                <div className="text-[#0F1C49] font-semibold text-[36px] md:text-[70px] ml-5 md:ml-50 mt-1 leading-tight">
                    What Makes RoofClaim Stand Out
                </div>
                <div className="text-gray-600 ml-5 md:ml-50 mt-3 text-[15px] md:max-w-full max-w-sm md:text-[18px]">
                    RoofClaim has earned a reputation as a trusted leader in the roofing industry. Here's<br className="hidden md:block" /> what makes us different:
                </div>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mx-5 md:ml-45 md:mr-0 mt-6">
                    <div className="rounded-[24px] border border-gray-200/60 p-6 bg-white hover:shadow-md transition-all">
                        <div className="mb-4">
                            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
                                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                    stroke="#F74F12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7.75 12L10.58 14.83L16.25 9.17004"
                                    stroke="#F74F12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h3 className="text-md md:text-lg text-black font-semibold mb-2">BBB Accredited</h3>
                        <p className="md:text-sm text-xs text-gray-500">
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
                        <h3 className="md:text-lg text-md text-black font-semibold mb-2">4.9 - Google Star Rating</h3>
                        <p className="md:text-sm text-xs text-gray-500">
                            Don't just take our word for it. Our homeowners agree!
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
                        <h3 className="md:text-lg text-md text-black font-semibold mb-2">Affordable Residential Roofing Services</h3>
                        <p className="md:text-sm text-xs text-gray-500">
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
                        <h3 className="md:text-lg text-md text-black font-semibold mb-2">Million Dollar Guarantee</h3>
                        <p className="md:text-sm text-xs text-gray-500">
                            Our industry-leading guarantee ensures peace of mind for all our customers.
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="relative mx-5 mt-10 md:mt-0 md:mr-15"
                initial={{ x: "100%", opacity: 0 }}
                whileInView={{ x: "0%", opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
            >
                <img
                    src="/header3.jpg"
                    alt=""
                    className="w-full md:w-180 h-72 md:h-200 rounded-[30px] hidden md:block object-cover"
                />

                {/* Overlay card */}
                <div className="absolute bottom-5 left-4 bg-white rounded-[30px] items-center flex flex-col gap-3 md:gap-5 p-5 md:p-13 hidden md:block shadow-lg">
                    <svg
                        className="rounded-full bg-[#F74F12] p-4 md:p-7 w-16 h-16 md:w-30 md:h-30"
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

                    <div className="text-black font-semibold text-sm md:text-base">
                        20 Years<br /> Experience
                    </div>
                </div>
            </motion.div>
        </div>
    )
}