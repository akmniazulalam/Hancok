import React from "react";
import Container from "../Container";
import Image from "../Image";
import Slider from "react-slick";
import Violant from "/src/assets/violant.png";
import ViolantOne from "/src/assets/violant (1).png";
import TrendGames from "/src/assets/trend-games.png";
import Flex from "../Flex";
import Heading from "../Heading";
import PrevArrow from "../PrevArrow";
import NextArrow from "../NextArrow";

const Popular = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    prevArrow: <PrevArrow/>,
    nextArrow: <NextArrow/>,
  };
  return (
    <div className="pt-[114px] pb-[90px] bg-popularBg">
      <Container>
        <div className={"grid grid-cols-2 gap-x-6 "}>
          <Image
            src={Violant}
            alt={"violant.png"}
            // className={"h-full w-full object-cover"}
          />
          <div className="text-end">
            <Heading
              heading={"POPULAR GAMES AROUND THE WORLD"}
              as={"h3"}
              className={
                "text-end font-semibold !font-barlow text-[38px] w-[454px] inline-block relative after:absolute after:h-[3px] after:w-[105px] after:bg-iconC after:content-[''] after:bottom-3 after:right-[110px]"
              }
            />
            <div className="pt-[58px] relative sliderPart">
              <Slider {...settings}>
                <div className="focus:outline-none focus:ring-0">
                  <Image
                    src={ViolantOne}
                    alt={"violant (1).png"}
                    className={"w-[633px] object-cover ml-auto"}
                  />
                </div>
                <div className="focus:outline-none focus:ring-0">
                  <Image
                    src={TrendGames}
                    alt={"trend-games.png"}
                    className={"w-[638px] object-cover ml-auto"}
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Popular;
