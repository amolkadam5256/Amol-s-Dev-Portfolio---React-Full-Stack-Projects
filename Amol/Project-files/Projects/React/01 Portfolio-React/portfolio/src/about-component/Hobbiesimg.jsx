import React, { useEffect } from 'react';
import assets from '..//assets/images/assets';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Hobbiesimg = () => {
  useEffect(() => {
    // Initialize AOS on component mount
    AOS.init({ duration: 1000, once: false, easing: 'ease-in-out' });
  }, []);

  const hobbies = [
    `
  🎵 Tum Hi Ho 🎵 
  (Singer: Arijit Singh)

  💔 Hum tere bin ab reh nahi sakte 💔
  💫 Tere bina kya wajood mera 💫

  🎶 Tujhse juda agar ho jaayenge 🎶
  💔 Toh khud se hi ho jaayenge juda 💔
  `,
  ];

  return (
    <div className="flex justify-evenly relative items-center flex-col md:flex-row py-10">
      {/* Image Section */}
      <div className="flex justify-center md:order-1 order-2" data-aos="fade-right" data-aos-duration="1500">
        <img src={assets.headphone} alt="headphone" className="max-w-xs md:max-w-sm drop-shadow-custom-music" />
      </div>

      {/* Text Section */}
      <div className="relative text-center md:order-2 order-1 z-10" data-aos="fade-left" data-aos-duration="1500">
        <h2 className="text-3xl md:text-5xl font-[anzo5] py-5">Listening Music</h2>

        {hobbies.map((hobby, index) => (
          <p key={index} className="text-center whitespace-pre-line pt-10">
            {hobby}
          </p>
        ))}

        {/* Additional decorative elements with animations */}
        <div className="flex absolute -right-[60px] md:-right-[130px] -top-[180px] md:-top-[150px] z-0" data-aos="zoom-in" data-aos-duration="1500">
          <img src={assets.headphone2} alt="headphone" className="max-w-xs md:max-w-sm drop-shadow-custom-music w-48" />
        </div>
        <div className="flex absolute -right-[60px] md:-right-[130px] -top-[180px] md:-top-[150px] -z-10" data-aos="zoom-in" data-aos-duration="1500">
          <img src={assets.headphone_wave} alt="headphone" className="max-w-xs md:max-w-sm drop-shadow-music-wave w-32 rotate-[-20deg]" />
        </div>
      </div>
    </div>
  );
};

export default Hobbiesimg;
