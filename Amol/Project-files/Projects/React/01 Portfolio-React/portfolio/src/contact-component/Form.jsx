// eslint-disable-next-line no-unused-vars
import React from 'react';

const Form = () => {
  const handleSend = () => {
    console.log("Message sent!");
  };

  const handleReset = () => {
    document.getElementById("name").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("message").value = "";
  };

  return (
    <>

      <div className='bg-black w-full h-screen mb-1'>





        <div className='md:flex block relative justify-center pt-24'>


          <div className="md:w-1/2 w-full">
            <model-viewer
              className=''
              alt="laptop"
              src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/b5f434ae4d45d10fe1664d5606ad28e4d9c739af/images/laptop.glb"
              shadow-intensity="1"
              camera-controls
              touch-action="pan-y"
              environment-image="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/b5f434ae4d45d10fe1664d5606ad28e4d9c739af/images/dancing_hall_2k.hdr"
              exposure="1.5"
              disable-zoom
              disable-tap
              camera-orbit="-45deg 60deg 9m"
              autoplay
            ></model-viewer>
          </div>


          <div>

            <h1 className="text-3xl md:text-5xl text-white font-bold font-[anzo5] text-start pl-20">Get in touch</h1>
            <div className="md:w-full  w-full p-20  bg-transparent">
              <input
                type="text"
                id="name"
                placeholder="Name"
                autoFocus
                className="w-full bg-[#ffffff] text-[#000000] p-4 mb-4 font-bold outline-none border-l-2 transition-all focus:border-l-8 border-[#FF7A01]"
              />
              <input
                type="email"
                id="mail"
                placeholder="Email"
                className="w-full bg-[#ffffff] text-[#000000] p-4 mb-4 font-bold outline-none border-l-2 transition-all focus:border-l-8 border-[#FF7A01]"
              />
              <textarea
                id="message"
                placeholder="Say Hello"
                rows="4"
                className="w-full bg-[#ffffff] text-[#000000] p-4 mb-4 font-bold outline-none border-l-2 transition-all focus:border-l-8 border-[#FF7A01]"
              ></textarea>
              <div className="flex gap-2">
                <button
                  onClick={handleSend}
                  className="flex-1 bg-[#FF7A01] text-[#001925] p-4 font-bold text-center transition-all hover:bg-transparent hover:text-[#FF7A01] hover:border hover:border-[#FF7A01]"
                >
                  Send
                </button>
                <div className="reset-button-container flex-shrink-0 basis-1/4 bg-orange-500 inline-flex pb-[1px] pr-[1px] reset-button">
                  <button
                    onClick={handleReset}
                    className="reset-button w-full relative text-center py-2 px-4 font-bold transition-all ease-in-out duration-200 text-orange-500 bg-gray-800 hover:bg-orange-500 hover:text-gray-800">
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>



        </div>



      </div>
    </>
  );
};

export default Form;
