import React from "react";
import ResumeHeader from "./ResumeHeader";
import ProfileCard from "./ProfileCard";
import WorkExperience from "./WorkExperience";
import SocialLinks from "./SocialLinks";

const ResumeMain = () => {
  return (
    <div className="flex items-center justify-center md:m-10 m-2 bg-black">
      <div className="w-full h-full bg-white shadow-2xl p-5">

              <ResumeHeader />
              <ProfileCard />
              <WorkExperience />
              <SocialLinks/>

      </div>
    </div>
  );
};

export default ResumeMain;
