import React, { useState, useEffect } from 'react';
import assets from '../assets/images/assets';
import { FaWindowClose } from "react-icons/fa";
import { MdOutlineZoomOutMap } from "react-icons/md";
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

// Data array to hold the image sources, titles, descriptions, and other data
const images = [
    { src: assets.Certificate_1, alt: "Certificate 1", title: "Certified Java Developer", description: "This is a description of Certificate 1." },
    { src: assets.Certificate_2, alt: "Certificate 2", title: "Front-End Web Development with React", description: "This is a description of Certificate 2." },
    { src: assets.Certificate_3, alt: "Certificate 3", title: "Front-End Web Development", description: "This is a description of Certificate 3." },
    { src: assets.Certificate_1, alt: "Certificate 1", title: "Full Stack Development", description: "This is a description of Certificate 1." },
    { src: assets.Certificate_2, alt: "Certificate 2", title: "Certificate 2 Title", description: "This is a description of Certificate 2." },
    { src: assets.Certificate_3, alt: "Certificate 3", title: "Certificate 3 Title", description: "This is a description of Certificate 3." },
];

const CertificationContent = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [zoomedIndex, setZoomedIndex] = useState(null);  // Track zoomed image index
    const [isModalOpen, setIsModalOpen] = useState(false);  // Control modal visibility
    const [modalImage, setModalImage] = useState(null);  // Track the image for the modal

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,      // Animation triggers multiple times on scroll
            easing: 'ease-in-out',
        }); // Initialize AOS with animation duration
    }, []);

    // Handle single click to zoom in
    const handleClick = (index) => {
        setZoomedIndex(index);  // Set the clicked image index as zoomed
        setModalImage(images[index].src);  // Set the image for the modal
        setIsModalOpen(true);  // Open the modal
    };

    // Handle double-click to reset zoom
    const handleDoubleClick = () => {
        setZoomedIndex(null);  // Reset zoom on double-click
    };

    // Close the modal
    const closeModal = () => {
        setIsModalOpen(false);
        setModalImage(null);
    };

    return (
        <div className='pb-10'>
            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-12 gap-10 md:mx-20 mx-10 py-10">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative inline-block cursor-pointer"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => handleClick(index)}  // Single click to zoom
                        onDoubleClick={handleDoubleClick}   // Double click to reset zoom
                        data-aos="fade-up" // AOS animation for fade-in effect
                        data-aos-delay={`${index * 100}`} // Stagger animations
                    >
                        <div className="inline-flex justify-center items-center overflow-hidden">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className={`w-full h-auto object-cover transition-transform duration-700 transform ${zoomedIndex === index ? 'scale-110' : 'scale-100'} sm:hover:scale-125 md:hover:scale-125`}  // Conditional zoom
                            />
                        </div>

                        {hoveredIndex === index && (
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent border-2 border-black p-2 z-10">
                                <p className="flex justify-center items-center">
                                    <MdOutlineZoomOutMap className="text-black block text-2xl" />
                                </p>
                            </div>
                        )}

                        {/* Title and Description */}
                        <div className="text-white mt-4 text-center">
                            <h2 className="text-xl font-semibold">{image.title}</h2>
                            <p className="text-sm mt-2">{image.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for the clicked image */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-40"
                    onClick={closeModal}  // Close the modal when clicking outside the image
                >
                    <div
                        className="relative max-w-full max-h-full mx-auto p-10"
                        onClick={(e) => e.stopPropagation()}  // Prevent closing the modal when clicking the image itself
                    >
                        <img
                            src={modalImage}
                            alt="Zoomed Image"
                            className="max-h-screen max-w-screen object-contain"
                        />
                        <button
                            className="absolute top-0 right-0 text-white bg-transparent rounded-full p-4"
                            onClick={closeModal}  // Close button for the modal
                        >
                            <FaWindowClose className="text-3xl" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CertificationContent;
