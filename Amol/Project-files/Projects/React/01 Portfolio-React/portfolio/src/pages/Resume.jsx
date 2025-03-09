import React from "react";
import DownloadComponent from "../Resume_Comp/DownloadComponent";
import ResumeMain from "../Resume_Comp/ResumeMain";

const Resume = () => {
    return (
        <section className="h-full w-full flex flex-col items-center justify-center bg-black px-0 sm:px-12 py-8 sm:py-12">
            <div>

                <h2 className="text-5xl sm:text-[80px] md:text-[100px] sm:tracking-[4px]   font-bold text-gray-100 mb-4 text-center px-4 font-[anzo1]">
                    Online Resume
                </h2>

                <DownloadComponent />
            </div>


            <div className="w-full h-full">
                <ResumeMain />

            </div>

        </section>
    );
};

export default Resume;
