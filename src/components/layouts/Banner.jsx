import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import {
  FaAngleDoubleRight,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Flex from "../Flex";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className={
        "pt-[300px] pb-[103px] bg-[url('/src/assets/banner.png')] bg-no-repeat bg-center bg-cover"
      }>
      <Container>
        <Heading heading={"LIFE TIME"} as={"h4"} className={"text-[27px]"} />
        <Heading
          heading={"GAMING EXPERIENCE"}
          as={"h1"}
          className={
            "text-6xl font-semibold py-[18px] inline-block relative after:absolute after:h-1 after:w-[90px] after:bg-white after:content-[''] after:bottom-[21px] after:-right-[115px]"
          }
        />
        <p className="w-[521px] text-base text-white font-oswald">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          alias voluptas optio. Veritatis recusandae pariatur qui dignissimos
          dolore similique ad adipisci eum. Quos aliquid fugiat magni illum
          eius?
        </p>
        <button className="flex items-end gap-x-2 font-oswald text-base text-textC bg-white py-[15px] px-[25px] mt-14">
          View More <FaAngleDoubleRight className="text-[21px]" />
        </button>
        <Flex className={"pt-[250px] gap-x-6"}>
          <Link to={"/"}>
            <div className="h-[35px] w-[35px] flex justify-center items-center bg-white rounded-full">
              <FaFacebookF className="text-[20px]" />
            </div>
          </Link>
          <Link to={"/"}>
            <div className="h-[35px] w-[35px] flex justify-center items-center bg-white rounded-full">
              <FaLinkedinIn className="text-[20px]" />
            </div>
          </Link>
          <Link to={"/"}>
            <div className="h-[35px] w-[35px] flex justify-center items-center bg-white rounded-full">
              <FaTwitter className="text-[20px]" />
            </div>
          </Link>
          <Link to={"/"}>
            <div className="h-[35px] w-[35px] flex justify-center items-center bg-white rounded-full">
              <FaInstagram className="text-[20px]" />
            </div>
          </Link>
        </Flex>
      </Container>
    </div>
  );
};

export default Banner;
