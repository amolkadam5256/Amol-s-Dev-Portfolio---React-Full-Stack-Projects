import React from "react";

const WorkExperience = () => {
  return (
    <div className="max-w-6xl mx-auto p-2 sm:p-6">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Work Experience Section */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold border-l-4 border-green-500 pl-2 mb-4">
            WORK EXPERIENCE
          </h2>
          <div className="space-y-6">
            {["Senior Software Engineer - Google | 2019 - Present", "Lead Software Developer - Apple | 2016 - 2019", "Senior Software Developer - Dropbox | 2014 - 2016", "Senior Developer - Uber | 2013 - 2014", "Backend Developer - Amazon | 2014 - 2016", "Frontend Developer - Startup | 2013 - 2014"].map((job, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg">{job.split(" - ")[0]}</h3>
                <p className="text-gray-500 text-sm">{job.split(" - ")[1]}</p>
                <p className="text-gray-700 text-sm mt-2">
                  Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
            ))}
          </div>

          {/* Projects Section */}
          <h2 className="text-xl font-bold border-l-4 border-green-500 pl-2 mt-6 mb-4">
            PROJECTS
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg">DoctorDom App - Doctor Appointment Booking App</h3>
              <p className="text-gray-500 text-sm">React.js, VS-Code, MongoDB, Node.js, Express.js (In Progress)</p>
              <p className="text-gray-700 text-sm mt-2">
                Developed a full-stack Doctor Appointment Booking System using the MERN stack with JWT authentication for secure login and role-based access control. Designed a responsive, mobile-first UI with React.js, Tailwind CSS, and Bootstrap. Integrated RESTful APIs for appointment management and medical records, optimizing app performance with code splitting, lazy loading, and React Context API.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Full Stack Developer Portfolio</h3>
              <p className="text-gray-500 text-sm">React.js, Node.js, Tailwind CSS (In Progress)</p>
              <p className="text-gray-700 text-sm mt-2">
                Built with HTML5, CSS3, and Tailwind CSS for a mobile-first, responsive design. Utilized React.js for dynamic rendering and GSAP for smooth animations. Leveraged Vite for fast builds, npm for efficient package management, and applied techniques like code splitting, lazy loading, and image optimization.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">A-RIA Freightways - Logistics Transportation</h3>
              <p className="text-gray-500 text-sm">HTML, CSS, JavaScript, React.js (May 2023)</p>
              <p className="text-gray-700 text-sm mt-2">
                Designed and implemented a responsive UI with dynamic navigation using React.js. Created visually appealing service sections with modern CSS and Tailwind CSS. Integrated advanced JavaScript features to optimize user experience.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Section */}
        <div>
          {/* Skills Section */}
          <h2 className="text-xl font-bold border-l-4 border-green-500 pl-2 mb-4">SKILLS</h2>
          <div>
            <h3 className="font-semibold">Technical</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              {["JavaScript/Angular/React/Vue", "Python/Ruby/PHP", "Node.js/ASP.NET", "PostgreSQL/MySQL", "Object-oriented design", "Database structures", "Complex software systems"].map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          
          {/* Professional Section */}
          <h3 className="font-semibold mt-4">Professional</h3>
          <ul className="list-disc list-inside text-gray-700 text-sm">
            {["Effective communication", "Team player", "Strong problem solver", "Good time management"].map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          
          {/* Education Section */}
          <h2 className="text-xl font-bold border-l-4 border-green-500 pl-2 mt-6 mb-4">EDUCATION</h2>
          <p className="text-gray-700 text-sm">MSc in Computer Science - University College London (2010 - 2011)</p>
          <p className="text-gray-700 text-sm">BSc Maths and Physics - Imperial College London (2007 - 2010)</p>
          
          {/* Awards Section */}
          <h2 className="text-xl font-bold border-l-4 border-green-500 pl-2 mt-6 mb-4">AWARDS</h2>
          <p className="text-gray-700 text-sm">Award Lorem Ipsum - Microsoft lorem ipsum (2019)</p>
          <p className="text-gray-700 text-sm">Award Donec Sodales - Oracle Aenean (2017)</p>
          
          {/* Languages Section */}
          <h2 className="text-xl font-bold border-l-4 border-green-500 pl-2 mt-6 mb-4">LANGUAGES</h2>
          <p className="text-gray-700 text-sm">English (Native)</p>
          <p className="text-gray-700 text-sm">Spanish (Professional)</p>
          
          {/* Interests Section */}
          <h2 className="text-xl font-bold border-l-4 border-green-500 pl-2 mt-6 mb-4">INTERESTS</h2>
          <p className="text-gray-700 text-sm">Climbing, Snowboarding, Photography, Travelling</p>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
