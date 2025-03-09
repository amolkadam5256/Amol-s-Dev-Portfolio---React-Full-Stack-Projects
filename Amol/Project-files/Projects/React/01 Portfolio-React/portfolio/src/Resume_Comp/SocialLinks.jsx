import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaExternalLinkAlt } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="flex flex-col items-center space-y-4 my-5">
      <div className="flex space-x-4">
        <a
          href="https://github.com/username"
          target="_blank"
          rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-black hover:text-gray-600"
        >
          <FaGithub className="text-xl" />
          <span className="text-sm">GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/username"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-black hover:text-blue-700 "
        >
          <FaLinkedin className="text-xl" />
                  <span className="text-sm">LinkedIn</span>
        </a>
        <a
          href="https://twitter.com/twittername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-black hover:text-blue-500 "
        >
          <FaTwitter className="text-xl" />
          <span className="text-sm">Twitter</span>
        </a>
        <a
          href="https://otherplatform.com/username"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-black hover:text-purple-600 "
        >
          <FaExternalLinkAlt className="text-xl" />
          <span className="text-sm">Other</span>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
