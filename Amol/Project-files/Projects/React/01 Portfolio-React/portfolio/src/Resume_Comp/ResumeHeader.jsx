import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import assets from "../assets/images/assets";

export default function ResumeHeader() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <header className=" text-black p-2 sm:p-6  border-b-2 pb-5 sm:pb-10 ">
            <motion.div
                className="flex flex-col sm:flex-row items-center justify-between gap-5"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Profile Details */}
                <div className="text-center sm:text-left flex-1">
                    <h1
                        className="text-4xl font-[anzo4] font-bold text-blue-600"
                        whileHover={{ scale: 1.05 }}
                    >
                        Amol Kadam
                    </h1>
                    <p className="text-2xl font-[anzo4] text-gray-600">Full Stack Developer</p>

                </div>

                {/* Contact Links & Social Media */}
                <motion.div
                    className="flex flex-wrap justify-center sm:justify-end items-center gap-5 flex-1 text-gray-600"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <a href="tel:01234567890" className="contact-link flex items-center hover:text-blue-600">
                        <i className="ri-phone-line mr-2"></i> 0123 4567 890
                    </a>
                    <a href="mailto:amolkadam1274@gmail.com" className="contact-link flex items-center hover:text-blue-600">
                        <i className="ri-mail-line mr-2"></i> amolkadam1274@gmail.com
                    </a>
                    <a href="https://www.yourwebsite.com" target="_blank" className="contact-link flex items-center  hover:text-blue-600">
                        <i className="ri-global-line mr-2"></i> www.yourwebsite.com
                    </a>
                    <a href="https://www.linkedin.com/in/amolkadam" target="_blank" className="contact-link flex items-center hover:text-blue-600">
                        <i className="ri-linkedin-box-line mr-2"></i> LinkedIn
                    </a>
                    <a href="https://twitter.com/amolkadam" target="_blank" className="contact-link flex items-center  hover:text-blue-600">
                        <i className="ri-twitter-line mr-2"></i> Twitter
                    </a>
                    <a href="https://www.google.com/maps?q=Akshay+Palace,Warje,Pune+411052,Maharashtra" target="_blank" rel="noopener noreferrer" className="contact-link text-gray-700 flex items-center justify-center sm:justify-start">
                        <i className="ri-map-pin-line mr-2 text-blue-500"></i>
                        Akshay Palace, Warje, Pune - 411052, Maharashtra
                    </a>

                </motion.div>
            </motion.div>
        </header>
    );
}

