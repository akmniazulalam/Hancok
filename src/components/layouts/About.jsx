import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import Image from "../Image";
import AboutImage from "/src/assets/aboutImg.png";
import { FaAngleDoubleRight } from "react-icons/fa";

import { FaCheck } from "react-icons/fa";
import CountUp from "react-countup";

const About = () => {
  return (
    <div className="pt-12 pb-20 bg-textC">
      <Container>
        <Heading
          heading={"ABOUT THE BIGGEST HANCOK COMMUNITY"}
          as={"h3"}
          className={
            "font-semibold text-[38px] w-[518px] inline-block relative after:absolute after:h-[3px] after:w-[120px] after:bg-iconC after:content-[''] after:bottom-3 after:right-[200px]"
          }
        />
        <Flex className={"py-14 px-5 gap-x-10"}>
          <Image
            src={AboutImage}
            alt={"aboutImg.png"}
            className={"h-full w-full object-cover"}
          />
          <div className="">
            <Heading
              heading={"MOST POPULAR GAMING PLATFORM."}
              as={"h3"}
              className={"font-semibold text-[27px] pt-1.5"}
            />
            <div className="pt-[8px] pb-[10px]">
              <Flex className={"gap-x-3 pb-2.5"}>
                <FaCheck className="text-iconC" />
                <p className="font-barlow text-[18px] text-white">
                  World Bigghest Community & Gaming Server
                </p>
              </Flex>
              <Flex className={"gap-x-3 pb-2.5"}>
                <FaCheck className="text-iconC" />
                <p className="font-barlow text-[18px] text-white">
                  Friendly Clan & Mates
                </p>
              </Flex>
              <Flex className={"gap-x-3 pb-2.5"}>
                <FaCheck className="text-iconC" />
                <p className="font-barlow text-[18px] text-white">
                  We Provide Gaming Accesories
                </p>
              </Flex>
              <Flex className={"gap-x-3 pb-2.5"}>
                <FaCheck className="text-iconC" />
                <p className="font-barlow text-[18px] text-white">
                  Largest Online Gaming Community & Shop
                </p>
              </Flex>
              <Flex className={"gap-x-3 pb-2.5"}>
                <FaCheck className="text-iconC" />
                <p className="font-barlow text-[18px] text-white">
                  Hancok reaches more than 150 million monthly users
                </p>
              </Flex>
              <Flex className={"gap-x-3"}>
                <FaCheck className="text-iconC" />
                <p className="font-barlow text-[18px] text-white">
                  We are leading global media brand for games
                </p>
              </Flex>
            </div>
            <p className="font-oswald text-[18px] w-[501px] text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illo
              sed odio temporibus magni quia eveniet odit placeat repellat quod
              ipsum modi necessitatibus, dolorum officia!
            </p>
            <button className="flex items-end gap-x-2 font-oswald text-base text-white bg-[#212121] py-[12px] px-[25px] mt-6">
              View More <FaAngleDoubleRight className="text-[21px]" />
            </button>
          </div>
        </Flex>
        <div className="grid grid-cols-4 gap-x-5">
          <div className="w-full py-[38px] px-[95px] bg-[#212121] rounded-tr-[50px] rounded-bl-[50px] text-center">
            <span className="font-barlow font-semibold text-6xl text-white relative after:absolute after:bottom-1.5 after:-right-5 after:bg-iconC after:rounded-full after:content-[''] after:h-3 after:w-3 inline-block">
              <CountUp
                start={0}
                end={112}
                duration={1.5}
                enableScrollSpy
                suffix={"K"}
              />
            </span>
            <p className="font-oswald font-light text-[18px] text-white pt-[23px]">
              Community Earning
            </p>
          </div>
          <div className="w-full py-[38px] px-[95px] bg-[#212121] rounded-tr-[50px] rounded-bl-[50px] text-center">
            <span className="font-barlow font-semibold text-6xl text-white relative after:absolute after:bottom-1.5 after:-right-5 after:bg-iconC after:rounded-full after:content-[''] after:h-3 after:w-3 inline-block">
              <CountUp
                start={0}
                end={12}
                duration={1.5}
                enableScrollSpy
                suffix={"M"}
              />
            </span>
            <p className="font-oswald font-light text-[18px] text-white pt-[23px]">
              Total Member
            </p>
          </div>
          <div className="w-full py-[38px] px-[95px] bg-[#212121] rounded-tr-[50px] rounded-bl-[50px] text-center">
            <span className="font-barlow font-semibold text-6xl text-white relative after:absolute after:bottom-1.5 after:-right-5 after:bg-iconC after:rounded-full after:content-[''] after:h-3 after:w-3 inline-block">
              <CountUp
                start={0}
                end={100}
                duration={1.5}
                enableScrollSpy
                suffix={"K"}
              />
            </span>
            <p className="font-oswald font-light text-[18px] text-white pt-[23px]">
              Streams Complete
            </p>
          </div>
          <div className="w-full py-[38px] px-[95px] bg-[#212121] rounded-tr-[50px] rounded-bl-[50px] text-center">
            <span className="font-barlow font-semibold text-6xl text-white relative after:absolute after:bottom-1.5 after:-right-5 after:bg-iconC after:rounded-full after:content-[''] after:h-3 after:w-3 inline-block">
              <CountUp start={0} end={844} duration={1.5} enableScrollSpy />
            </span>
            <p className="font-oswald font-light text-[18px] text-white pt-[23px]">
              Total Sponsers
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
