// eslint-disable-next-line no-unused-vars
import React from 'react'
import assets from '..//assets/images/assets'

const Hobbiesimg = () => {


    const hobbies = [
        `
    🎵 Tum Hi Ho 🎵 
    (Singer: Arijit Singh)

    💔 Hum tere bin ab reh nahi sakte 💔
    💫 Tere bina kya wajood mera 💫

    🎶 Tujhse juda agar ho jaayenge 🎶
    💔 Toh khud se hi ho jaayenge juda 💔

  `
    ];

    return (
        <div className="flex justify-evenly relative items-center  flex-col md:flex-row py-10">
            {/* Image Section */}
            <div className="flex justify-center md:order-1 order-2">
                <img src={assets.headphone} alt="headphone" className="max-w-xs md:max-w-sm drop-shadow-custom-music " />
            </div>

            {/* Text Section */}
            <div className="relative text-center md:order-2 order-1 z-10">
                <h2 className="text-3xl md:text-5xl font-[anzo5] py-5">Listening Music</h2>

                {hobbies.map((hobby, index) => (
                    <p key={index} className="text-center whitespace-pre-line pt-10">
                        {hobby}
                    </p>
                ))}

                <div className="flex absolute -right-[60px] md:-right-[130px] -top-[180px] md:-top-[150px] z-0">
                    <img src={assets.headphone2} alt="headphone" className=" max-w-xs md:max-w-sm drop-shadow-custom-music w-48" />
                </div>
                <div className="flex absolute -right-[60px] md:-right-[130px] -top-[180px] md:-top-[150px] -z-10">
                    <img src={assets.headphone_wave} alt="headphone" className=" max-w-xs md:max-w-sm drop-shadow-music-wave w-32 rotate-[-20deg]" />
                </div>
            </div>
        </div>
    )
}

export default Hobbiesimg;
