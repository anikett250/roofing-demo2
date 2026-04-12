"use client"
import { useState, type ChangeEvent } from "react";
import { Poppins } from "next/font/google"
import { motion } from "framer-motion";

const US_STATES = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
    "Wisconsin", "Wyoming",
];
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-poppins",
});
export default function Contact() {
    const [form, setForm] = useState({
        firstName: "", lastName: "", email: "", phone: "",
        street: "", city: "", state: "", zip: "", smsConsent: false,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : false;
        setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    };

    const handleSubmit = () => {
        alert("Form submitted!");
    };

    const inputClass =
        "w-full rounded-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition";


    return (
        <div className={`mb-50 overflow-x-hidden ${poppins.className}`}>
            <div className="flex gap-30 mx-40 ">
                <motion.div className="relative rounded-[30px] w-170 h-200 overflow-hidden"
                    initial={{ x: "-100%", opacity: 0 }}
                    whileInView={{ x: "0%", opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                >
                    <img
                        src="/contact.jpg"
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 flex items-center justify-center p-6">
                        <div className="w-full max-w-md rounded-2xl bg-white/95 backdrop-blur-sm px-8 py-10 shadow-2xl">

                            <h1 className="mb-7 text-center text-2xl font-semibold leading-tight text-gray-900">
                                Get A Professional<br />Roof Inspection!
                            </h1>

                            <div className="space-y-3">

                                <div className="grid grid-cols-2 gap-3">
                                    <input name="firstName" value={form.firstName} onChange={handleChange}
                                        placeholder="First Name" className={inputClass} />
                                    <input name="lastName" value={form.lastName} onChange={handleChange}
                                        placeholder="Last Name" className={inputClass} />
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <input name="email" type="email" value={form.email} onChange={handleChange}
                                        placeholder="Email Address" className={inputClass} />
                                    <input name="phone" type="tel" value={form.phone} onChange={handleChange}
                                        placeholder="Phone" className={inputClass} />
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <input name="street" value={form.street} onChange={handleChange}
                                        placeholder="Street" className={inputClass} />
                                    <input name="city" value={form.city} onChange={handleChange}
                                        placeholder="City" className={inputClass} />
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div className="relative">
                                        <select
                                            name="state" value={form.state} onChange={handleChange}
                                            className={`${inputClass} appearance-none pr-8 ${form.state === "" ? "text-gray-400" : "text-gray-700"
                                                }`}
                                        >
                                            <option value="" disabled hidden>Select State</option>
                                            {US_STATES.map((s) => (
                                                <option key={s} value={s}>{s}</option>
                                            ))}
                                        </select>
                                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs">
                                            ▾
                                        </span>
                                    </div>
                                    <input name="zip" value={form.zip} onChange={handleChange}
                                        placeholder="Zip/Postal Code" className={inputClass} />
                                </div>

                                <label className="flex items-start gap-2 cursor-pointer pt-1">
                                    <input
                                        type="checkbox" name="smsConsent" checked={form.smsConsent}
                                        onChange={handleChange}
                                        className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-gray-300 accent-orange-500"
                                    />
                                    <span className="text-xs text-gray-500 leading-snug">
                                        I agree to receive texts about my inquiry. Msg &amp; data rates may
                                        apply. Reply <strong>STOP</strong> to opt out.
                                    </span>
                                </label>
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="mt-6 w-full rounded-full bg-orange-500 py-4 text-sm font-semibold text-white shadow-md hover:bg-orange-600 active:scale-95 transition-all duration-150"
                            >
                                Get A Free Roof Inspection
                            </button>

                        </div>
                    </div>
                </motion.div>
                <motion.div className="mt-20"
                    initial={{ x: "100%", opacity: 0 }}
                    whileInView={{ x: "0%", opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                >
                    <div className="text-[#0F1C49] font-semibold text-[70px] ">Contact RoofClaim<br /> Today</div>
                    <div className="text-gray-700 text-[20px] ">Your roof is your home's first line of defense against the elements. Don't<br /> let small issues turn into costly repairs. Whether you need to address roof<br /> leaks, storm damage, or want to explore a complete replacement.<br /> RoofClaim is here to help.</div>
                    <div className="flex mt-7 gap-2">
                        <div className="w-7 mt-[1px] ">
                            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#4B577E" d="M8 3a5 5 0 100 10A5 5 0 008 3z"></path></g></svg>
                        </div>
                        <div className="text-[#4B577E] text-[20px] ">Call us today for you free roof inspection and discover how we can<br /> simplify you next roofing project.</div>
                    </div>
                    <div className="text-black text-[45px] mt-5 ">The RoofClaim Difference</div>
                    <div className="text-gray-700 text-[20px] ">Choosing RoofClaim means choosing a partner dedicated to protecting<br /> your home. From start to finish, we handle you project with care, ensuring<br /> the best results.</div>
                </motion.div>
            </div>
        </div>
    )
}