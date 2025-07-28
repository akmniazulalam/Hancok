import React, { useState } from "react";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import StoreItem from "../StoreItem";
import GamingOne from "/src/assets/gaming-product5 1.png";
import GamingTwo from "/src/assets/gaming-product2 1.png";
import GamingThree from "/src/assets/gaming-product4 1.png";
import Slider from "react-slick";
import StorePrev from "../StorePrev";
import StoreNext from "../StoreNext";

const Store = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    prevArrow: <StorePrev/>,
    nextArrow: <StoreNext/>,
  };
  return (
    <div className="pt-[85px] pb-[87px] bg-textC">
      <Container>
        <Heading
          heading={"WE PROVIDE ALL GAMING ACCESORIES"}
          as={"h3"}
          className={
            "font-semibold text-[38px] w-[446px] inline-block relative after:absolute after:h-[3px] after:w-[120px] after:bg-iconC after:content-[''] after:bottom-3 after:right-[120px]"
          }
        />
        <div className={"mt-[103px] -mx-2 relative"}>
          <Slider {...settings}>
            <div className="px-2">
              <StoreItem
                src={GamingOne}
                alt={"gaming-product5 1.png"}
                className={"pt-3 pb-10"}
                heading={"Gaming Controller"}
              />
            </div>
            <div className="px-2">
              <StoreItem
                src={GamingTwo}
                alt={"gaming-product2 1.png"}
                className={"pt-3 pb-10"}
                heading={"Gaming Keyboard"}
              />
            </div>
            <div className="px-2">
              <StoreItem
                src={GamingThree}
                alt={"gaming-product4 1.png"}
                className={"pt-3 pb-10"}
                heading={"Gaming Monitor"}
              />
            </div>
            <div className="px-2">
              <StoreItem
                src={GamingOne}
                alt={"gaming-product5 1.png"}
                className={"pt-3 pb-10"}
                heading={"Gaming Controller"}
              />
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Store;
