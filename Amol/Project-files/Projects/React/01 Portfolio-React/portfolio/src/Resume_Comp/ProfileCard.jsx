import React from "react";
import assets from "../assets/images/assets";

const ProfileCard = () => {
  return (
      <div className="w-full  mx-auto  my-4 p-2 sm:p-6">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Profile Image */}
        <img
          src={assets.picofme || "https://via.placeholder.com/300"}
          alt="Profile"
          className=" md:w-40 h-40  rounded-full   object-center m-auto justify-center"
        />

        {/* Profile Details */}
        <div className="p-6 text-center md:text-left flex-1">
          <p className="text-gray-600 mt-2 pl-0 sm:pl-10 ">
                      Full Stack Developer and Computer Science graduate with a strong foundation in modern web development. Skilled in HTML, CSS, JavaScript, React.js, and frameworks like Tailwind CSS, Bootstrap, and Sass. Experienced in building responsive web applications, enhancing UI/UX, and optimizing performance. Proficient in Git/GitHub for version control and state management using Redux and Context API. Strong backend development skills in Java, Spring Boot, and MySQL, delivering scalable and efficient software solutions. Passionate about creating user-friendly applications that drive meaningful results.
          </p>


        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
