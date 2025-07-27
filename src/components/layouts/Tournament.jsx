import React, { useState } from "react";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import Image from "../Image";
import TourOne from "/src/assets/tour-1 1.png";
import TourTwo from "/src/assets/tour-2 1.png";
import TourThree from "/src/assets/tour-3 1.png";
import { FaPlay } from "react-icons/fa";

const Tournament = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isPlay, setIsPlay] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="py-[87px] bg-textC">
      <Container>
        <Heading
          heading={"LIVE STREAMIN VIDEO BY HANCOK"}
          as={"h3"}
          className={
            "font-semibold text-[38px] w-[446px] inline-block relative after:absolute after:h-[3px] after:w-[120px] after:bg-iconC after:content-[''] after:bottom-3 after:right-[190px]"
          }
        />
        <Flex className={"pt-[69px] pb-[65px] gap-x-5"}>
          <div className="relative cursor-pointer">
            {!isPlay ? (
              <div className="relative" onClick={() => setIsPlay(true)}>
                <Image
                  src={TourOne}
                  alt={"tour-1 1.png"}
                  className={
                    "hover:mix-blend-normal hover:scale-y-105 hover:scale-x-[102%] object-cover  mix-blend-luminosity transition-all duration-500 cursor-pointer"
                  }
                />
                <div className="w-full">
                  <div className="absolute top-1/2 left-1/2 -translate-1/2 h-[70px] w-[70px] rounded-full border border-white flex justify-center items-center cursor-pointer pointer-events-none">
                    <FaPlay className="text-white text-[20px]" />
                  </div>
                  <div className="absolute bottom-5 left-5 w-[98%] pointer-events-none">
                    <div className="flex justify-between">
                      <div className="">
                        <p className="font-barlow font-semibold text-[22px] text-white pb-1">
                          HORIZON ZERO | DAWN
                        </p>
                        <p className="font-oswald font-light text-[16px] text-white">
                          Guerrilla Games
                        </p>
                      </div>
                      <p className="font-oswald text-base text-white relative inline-block after:absolute after:h-[5px] after:w-[5px] after:bg-iconC after:rounded-full after:content-[''] after:bottom-0 after:-left-3 h-[19px] w-[54px] mt-[38px]">
                        LIVE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <iframe
                  className="w-[440px] h-[300px]"
                  src="https://www.youtube.com/embed/cp_QCPXNZTU?autoplay=1&mute=1&rel=0&showinfo=0"
                  title="YouTube video"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen></iframe>
                <button
                  onClick={() => setIsPlay(false)}
                  className="absolute top-2 right-2 bg-black bg-opacity-60 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-80 transition">
                  ✕
                </button>
              </>
            )}
          </div>
          <div className="relative cursor-pointer">
            {!isPlaying ? (
              <div className="relative" onClick={() => setIsPlaying(true)}>
                <Image
                  src={TourTwo}
                  alt={"tour-2 1.png"}
                  className={
                    "hover:mix-blend-normal hover:scale-y-105 hover:scale-x-[102%] object-cover  mix-blend-luminosity transition-all duration-500 cursor-pointer"
                  }
                />
                <div className="w-full">
                  <div className="absolute top-1/2 left-1/2 -translate-1/2 h-[70px] w-[70px] rounded-full border border-white flex justify-center items-center cursor-pointer pointer-events-none">
                    <FaPlay className="text-white text-[20px]" />
                  </div>
                  <div className="absolute bottom-5 left-5 w-[98%] pointer-events-none">
                    <div className="flex justify-between">
                      <div className="">
                        <p className="font-barlow font-semibold text-[22px] text-white pb-1">
                          LEAGUE OF | LEGENDS
                        </p>
                        <p className="font-oswald font-light text-[16px] text-white">
                          Riot Games
                        </p>
                      </div>
                      <p className="font-oswald text-base text-white relative inline-block after:absolute after:h-[5px] after:w-[5px] after:bg-iconC after:rounded-full after:content-[''] after:bottom-0 after:-left-3 h-[19px] w-[54px] mt-[38px]">
                        LIVE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <iframe
                  className="w-[440px] h-[300px]"
                  src="https://www.youtube.com/embed/cp_QCPXNZTU?autoplay=1&mute=1&rel=0&showinfo=0"
                  title="YouTube video"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen></iframe>
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-2 right-2 bg-black bg-opacity-60 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-80 transition">
                  ✕
                </button>
              </>
            )}
          </div>
          <div className="relative cursor-pointer">
            {!isOpen ? (
              <div className="relative" onClick={() => setIsOpen(true)}>
                <Image
                  src={TourThree}
                  alt={"tour-3 1.png"}
                  className={
                    "hover:mix-blend-normal hover:scale-y-105 hover:scale-x-[102%] object-cover  mix-blend-luminosity transition-all duration-500 cursor-pointer"
                  }
                />
                <div className="w-full">
                  <div className="absolute top-1/2 left-1/2 -translate-1/2 h-[70px] w-[70px] rounded-full border border-white flex justify-center items-center cursor-pointer pointer-events-none">
                    <FaPlay className="text-white text-[20px]" />
                  </div>
                  <div className="absolute bottom-5 left-5 w-[98%] pointer-events-none">
                    <div className="flex justify-between">
                      <div className="">
                        <p className="font-barlow font-semibold text-[22px] text-white pb-1">
                          PALADINS
                        </p>
                        <p className="font-oswald font-light text-[16px] text-white">
                          Hi Rez Studios
                        </p>
                      </div>
                      <p className="font-oswald text-base text-white relative inline-block after:absolute after:h-[5px] after:w-[5px] after:bg-iconC after:rounded-full after:content-[''] after:bottom-0 after:-left-3 h-[19px] w-[54px] mt-[38px]">
                        LIVE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <iframe
                  className="w-[440px] h-[300px]"
                  src="https://www.youtube.com/embed/cp_QCPXNZTU?autoplay=1&mute=1&rel=0&showinfo=0"
                  title="YouTube video"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen></iframe>
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-2 right-2 bg-black bg-opacity-60 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-80 transition">
                  ✕
                </button>
              </>
            )}
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Tournament;
