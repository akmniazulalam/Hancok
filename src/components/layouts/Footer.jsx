import React, { useState } from "react";
import Container from "./../Container";
import Heading from "../Heading";
import Flex from "./../Flex";
import Image from "../Image";
import Logo from "/src/assets/logo.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import GalOne from "/src/assets/gal1 1.png";
import GalTwo from "/src/assets/gal2 1.png";
import GalThree from "/src/assets/gal3 1.png";
import GalFour from "/src/assets/gal4 1.png";
import GalFive from "/src/assets/gal5 1.png";
import GalSix from "/src/assets/gal6 1.png";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"; 

import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Download from "yet-another-react-lightbox/plugins/download";

const Footer = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = [
    { src: GalOne },
    { src: GalTwo },
    { src: GalThree },
    { src: GalFour },
    { src: GalFive },
    { src: GalSix },
  ];
  return (
    <div className="bg-popularBg pb-5 relative">
      <Container>
        <div className="absolute -top-[90px] w-[1320px] py-8 pl-7.5 pr-2.5 bg-iconC">
          <Flex className={"justify-between"}>
            <Heading
              heading={
                "subscribe us to get latest news in your inbox from hancok community"
              }
              as={"h4"}
              className={
                "!font-barlow font-semibold text-[40px] w-[725px] uppercase"
              }
            />
            <div className="relative">
              <input
                type="email"
                placeholder="Your Email"
                className="uppercase focus:outline-0 py-2.5 pl-5 bg-white rounded-full placeholder:font-barlow placeholder:font-medium placeholder:text-base placeholder:text-[#666666] w-[409px]"
              />
              <button className="font-barlow font-medium text-base text-white rounded-full bg-popularBg py-[10px] px-[26px] cursor-pointer absolute top-0 right-0">
                SUBSCRIBE
              </button>
            </div>
          </Flex>
        </div>
        <div className="pt-[120px] pb-[90px] grid grid-cols-[43%_16%_16%_25%] border-b border-[#666666]">
          <div className="">
            <Image src={Logo} alt={"logo.png"} />
            <p className="font-oswald text-base text-[#666666] w-[70%] pt-[25px] pb-[45px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero
              officiis rem consectetur sunt cupiditate eius obcaecati, culpa,
              aspernatur aperiam id.
            </p>
            <Flex className={"gap-x-4"}>
              <Link to={"https://www.facebook.com"}>
                <div className="h-[50px] w-[50px] flex justify-center items-center bg-[#212529] rounded-full hover:bg-iconC transition-all duration-300 cursor-pointer">
                  <FaFacebookF className="text-[28px] text-white" />
                </div>
              </Link>
              <Link to={"https://www.linkedin.com"}>
                <div className="h-[50px] w-[50px] flex justify-center items-center bg-[#212529] rounded-full hover:bg-iconC transition-all duration-300 cursor-pointer">
                  <FaLinkedinIn className="text-[28px] text-white" />
                </div>
              </Link>
              <Link to={"https://www.twitter.com"}>
                <div className="h-[50px] w-[50px] flex justify-center items-center bg-[#212529] rounded-full hover:bg-iconC transition-all duration-300 cursor-pointer">
                  <FaTwitter className="text-[28px] text-white" />
                </div>
              </Link>
              <Link to={"https://www.instagram.com"}>
                <div className="h-[50px] w-[50px] flex justify-center items-center bg-[#212529] rounded-full hover:bg-iconC transition-all duration-300 cursor-pointer">
                  <FaInstagram className="text-[28px] text-white" />
                </div>
              </Link>
            </Flex>
          </div>
          <div className="">
            <Heading
              heading={"LINKS"}
              as={"h6"}
              className={"!font-barlow font-semibold text-[25px]"}
            />
            <ul>
              <Link to={"/"}>
                <li className="w-fit font-oswald text-base text-[#666666] hover:text-iconC transition-all duration-300 mt-8">
                  Home
                </li>
              </Link>
              <Link to={"/"}>
                <li className="w-fit font-oswald text-base text-[#666666] hover:text-iconC transition-all duration-300 mt-8">
                  About
                </li>
              </Link>
              <Link to={"/"}>
                <li className="w-fit font-oswald text-base text-[#666666] hover:text-iconC transition-all duration-300 mt-8">
                  Tournament
                </li>
              </Link>
              <Link to={"/"}>
                <li className="w-fit font-oswald text-base text-[#666666] hover:text-iconC transition-all duration-300 mt-8">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div className="">
            <Heading
              heading={"TEAMS"}
              as={"h6"}
              className={"!font-barlow font-semibold text-[25px]"}
            />
            <ul>
              <Link to={"/"}>
                <li className="w-fit font-oswald text-base text-[#666666] hover:text-iconC transition-all duration-300 mt-8">
                  PALADINS
                </li>
              </Link>
              <Link to={"/"}>
                <li className="w-fit font-oswald text-base text-[#666666] hover:text-iconC transition-all duration-300 mt-8">
                  CS:GO
                </li>
              </Link>
              <Link to={"/"}>
                <li className="w-fit font-oswald text-base text-[#666666] hover:text-iconC transition-all duration-300 mt-8">
                  DOTA 2
                </li>
              </Link>
              <Link to={"/"}>
                <li className="w-fit font-oswald text-base text-[#666666] hover:text-iconC transition-all duration-300 mt-8">
                  VALORANT
                </li>
              </Link>
            </ul>
          </div>
          <div className="">
            <Heading
              heading={"GALLERY"}
              as={"h6"}
              className={"!font-barlow font-semibold text-[25px]"}
            />
            <div className="grid grid-cols-3 grid-rows-2 pt-7 gap-1">
              <Image
                src={GalOne}
                alt={"gal1 1.png"}
                className={"h-full w-full object-cover cursor-pointer"}
                onClick={() => {
                  setIndex(0);
                  setOpen(true);
                }}
              />
              <Image
                src={GalTwo}
                alt={"gal2 1.png"}
                className={"h-full w-full object-cover cursor-pointer"}
                onClick={() => {
                  setIndex(1);
                  setOpen(true);
                }}
              />
              <Image
                src={GalThree}
                alt={"gal3 1.png"}
                className={"h-full w-full object-cover cursor-pointer"}
                onClick={() => {
                  setIndex(2);
                  setOpen(true);
                }}
              />
              <Image
                src={GalFour}
                alt={"gal4 1.png"}
                className={"h-full w-full object-cover cursor-pointer"}
                onClick={() => {
                  setIndex(3);
                  setOpen(true);
                }}
              />
              <Image
                src={GalFive}
                alt={"gal5 1.png"}
                className={"h-full w-full object-cover cursor-pointer"}
                onClick={() => {
                  setIndex(4);
                  setOpen(true);
                }}
              />
              <Image
                src={GalSix}
                alt={"gal6 1.png"}
                className={"h-full w-full object-cover cursor-pointer"}
                onClick={() => {
                  setIndex(5);
                  setOpen(true);
                }}
              />
              <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                index={index}
                className="custom-lightbox"
                on={{ view: ({ index }) => setIndex(index) }}
                plugins={[Zoom, Fullscreen, Download]}
                zoom={{
                  maxZoomPixelRatio: 4,
                  scrollToZoom: true,
                }}
              />
            </div>
          </div>
        </div>
        <div className="text-center pt-5">
          <p className="font-barlow text-[20px] text-white">
            © 2025 All rights reserved by{" "}
            <span className="text-iconC">Themebea.</span>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
