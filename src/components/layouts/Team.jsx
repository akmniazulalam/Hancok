import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Image from "../Image";
import TeamOne from "/src/assets/team-1 1.png";
import TeamTwo from "/src/assets/team-2 1.png";
import TeamThree from "/src/assets/team-3 1.png";
import TeamFour from "/src/assets/team-4 1.png";
import Flex from "../Flex";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
const Team = () => {
  return (
    <div className="bg-popularBg pt-24 pb-20">
      <Container>
        <div className="text-end">
          <Heading
            heading={"MEET OUR PROFESSIONAL ELITE TEAM"}
            as={"h3"}
            className={
              "text-end font-semibold !font-barlow text-[38px] w-[495px] inline-block relative after:absolute after:h-[3px] after:w-[105px] after:bg-iconC after:content-[''] after:bottom-3.5 after:right-[80px]"
            }
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-6 pt-10">
          <div className="relative group">
            <Image
              src={TeamOne}
              alt="team-1 1.png"
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-0 left-0 py-[23px] px-[31px] w-full bg-[#2524244A] group-hover:pt-8 group-hover:pb-8 transition-all duration-500 ease-in-out">
              <p className="font-barlow font-semibold text-[30px] text-white">
                Paladins
              </p>

              <div className="overflow-hidden max-h-0 opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-[500px] group-hover:opacity-100">
                <p className="font-oswald text-base text-white pt-1.5 pb-6 w-[300px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper
                </p>
              </div>
              <div className="overflow-hidden max-h-0 opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-[500px] group-hover:opacity-100">
                <Flex className="justify-between">
                  <button className="py-[9px] px-5 bg-iconC font-oswald text-base text-white">
                    Know more
                  </button>

                  <Flex className="gap-x-5 pr-5">
                    <div className="h-[35px] w-[35px] flex justify-center items-center bg-iconC rounded-full border border-black">
                      <FaFacebookF className="text-[20px] text-white" />
                    </div>
                    <div className="h-[35px] w-[35px] flex justify-center items-center bg-iconC rounded-full border border-black">
                      <FaLinkedinIn className="text-[20px] text-white" />
                    </div>
                    <div className="h-[35px] w-[35px] flex justify-center items-center bg-iconC rounded-full border border-black">
                      <FaTwitter className="text-[20px] text-white" />
                    </div>
                  </Flex>
                </Flex>
              </div>
            </div>
          </div>
          <div className="relative group">
            <Image
              src={TeamTwo}
              alt="team-2 1.png"
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-0 left-0 py-[23px] px-[31px] w-full bg-[#2524244A] group-hover:pt-8 group-hover:pb-8 transition-all duration-500 ease-in-out">
              <p className="font-barlow font-semibold text-[30px] text-white">
                CS:GO
              </p>

              <div className="overflow-hidden max-h-0 opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-[500px] group-hover:opacity-100">
                <p className="font-oswald text-base text-white pt-1.5 pb-6 w-[300px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper
                </p>
              </div>
              <div className="overflow-hidden max-h-0 opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-[500px] group-hover:opacity-100">
                <Flex className="justify-between">
                  <button className="py-[9px] px-5 bg-iconC font-oswald text-base text-white">
                    Know more
                  </button>

                  <Flex className="gap-x-5 pr-5">
                    <div className="h-[35px] w-[35px] flex justify-center items-center bg-iconC rounded-full border border-black">
                      <FaFacebookF className="text-[20px] text-white" />
                    </div>
                    <div className="h-[35px] w-[35px] flex justify-center items-center bg-iconC rounded-full border border-black">
                      <FaLinkedinIn className="text-[20px] text-white" />
                    </div>
                    <div className="h-[35px] w-[35px] flex justify-center items-center bg-iconC rounded-full border border-black">
                      <FaTwitter className="text-[20px] text-white" />
                    </div>
                  </Flex>
                </Flex>
              </div>
            </div>
          </div>
          <div className="relative group">
            <Image
              src={TeamThree}
              alt="team-3 1.png"
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-0 left-0 py-[23px] px-[31px] w-full bg-[#2524244A] group-hover:pt-8 group-hover:pb-8 transition-all duration-500 ease-in-out">
              <p className="font-barlow font-semibold text-[30px] text-white">
                DOTA 2
              </p>

              <div className="overflow-hidden max-h-0 opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-[500px] group-hover:opacity-100">
                <p className="font-oswald text-base text-white pt-1.5 pb-6 w-[300px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper
                </p>
              </div>
              <div className="overflow-hidden max-h-0 opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-[500px] group-hover:opacity-100">
                <Flex className="justify-between">
                  <button className="py-[9px] px-5 bg-iconC font-oswald text-base text-white">
                    Know more
                  </button>

                  <Flex className="gap-x-5 pr-5">
                    <div className="h-[35px] w-[35px] flex justify-center items-center bg-iconC rounded-full border border-black">
                      <FaFacebookF className="text-[20px] text-white" />
                    </div>
                    <div className="h-[35px] w-[35px] flex justify-center items-center bg-iconC rounded-full border border-black">
                      <FaLinkedinIn className="text-[20px] text-white" />
                    </div>
                    <div className="h-[35px] w-[35px] flex justify-center items-center bg-iconC rounded-full border border-black">
                      <FaTwitter className="text-[20px] text-white" />
                    </div>
                  </Flex>
                </Flex>
              </div>
            </div>
          </div>
          <div className="relative group">
            <Image
              src={TeamFour}
              alt="team-4 1.png"
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-0 left-0 py-[23px] px-[31px] w-full bg-[#2524244A] group-hover:pt-8 group-hover:pb-8 transition-all duration-500 ease-in-out">
              <p className="font-barlow font-semibold text-[30px] text-white">
                VALORANT
              </p>

              <div className="overflow-hidden max-h-0 opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-[500px] group-hover:opacity-100">
                <p className="font-oswald text-base text-white pt-1.5 pb-6 w-[300px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper
                </p>
              </div>
              <div className="overflow-hidden max-h-0 opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-[500px] group-hover:opacity-100">
                <Flex className="justify-between">
                  <button className="py-[9px] px-5 bg-iconC font-oswald text-base text-white">
                    Know more
                  </button>

                  <Flex className="gap-x-5 pr-5">
                    <div className="h-[35px] w-[35px] flex justify-center items-center bg-iconC rounded-full border border-black">
                      <FaFacebookF className="text-[20px] text-white" />
                    </div>
                    <div className="h-[35px] w-[35px] flex justify-center items-center bg-iconC rounded-full border border-black">
                      <FaLinkedinIn className="text-[20px] text-white" />
                    </div>
                    <div className="h-[35px] w-[35px] flex justify-center items-center bg-iconC rounded-full border border-black">
                      <FaTwitter className="text-[20px] text-white" />
                    </div>
                  </Flex>
                </Flex>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Team;
