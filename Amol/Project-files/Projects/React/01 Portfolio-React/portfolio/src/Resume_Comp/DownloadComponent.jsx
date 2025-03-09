import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa6";

const DownloadButton = () => {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setProgress(0);
    setShowMessage(false);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setDownloading(false);
          setShowMessage(true);
          setTimeout(() => setShowMessage(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    const link = document.createElement("a");
    link.href = "/path-to-your-file.pdf"; // Change to actual file path
    link.download = "sample.pdf"; // Change to desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center justify-center p-5 bg-black text-white">
      <motion.button
        className="relative flex items-center justify-center gap-2 px-6 py-3 text-sm md:text-lg lg:text-xl font-semibold text-black bg-white rounded-lg shadow-lg overflow-hidden border border-gray-700"
        onClick={handleDownload}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        disabled={downloading}
      >
        {downloading ? (
          <motion.div
            className="absolute inset-0 bg-gray-300"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        ) : null}
        <FaFilePdf className="relative z-10 text-black text-2xl" />
        <motion.span
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {downloading ? `Downloading... ${progress}%` : "Download PDF Version"}
        </motion.span>
      </motion.button>

      {showMessage && (
        <motion.div
          className="mt-4 px-6 py-3 bg-white text-black text-xs md:text-sm lg:text-base rounded-lg shadow-lg border border-gray-700"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          Download Complete!
        </motion.div>
      )}
    </div>
  );
};

export default DownloadButton;
  