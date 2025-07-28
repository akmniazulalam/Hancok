import React, { useEffect, useState } from "react";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import SaleItems from "../SaleItems";
import SaleOne from "/src/assets/sale1 1.png";
import SaleTwo from "/src/assets/sale3 1.png";
import SaleThree from "/src/assets/sale4 1.png";
import SaleFour from "/src/assets/sale5 1.png";
import CategoryOne from "/src/assets/category-4 1.png";
import CategoryTwo from "/src/assets/category-2 1.png";
import CategoryThree from "/src/assets/category-1 1.png";
import CategoryFour from "/src/assets/category-3 1.png";
import CategoryFive from "/src/assets/category-5 1.png";

const Sale = () => {
  const images = [
    "/src/assets/category-4 1.png",
    "/src/assets/category-2 1.png",
    "/src/assets/category-3 1.png",
    "/src/assets/category-5 1.png",
    "/src/assets/category-1 1.png",
  ];

  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 2000); // 3 sec per slide
    return () => clearInterval(interval);
  }, [images.length]);

  // Helper: position calculation
  const getPositionStyles = (index) => {
    const position = (index - active + images.length) % images.length;

    switch (position) {
      case 0: // Center big image
        return "z-40 scale-110 translate-x-0";
      case 1: // Right side
        return "z-30 scale-90 translate-x-[70px]";
      case 4: // Left side
        return "z-30 scale-90 -translate-x-[70px]";
      case 2: // Far right (behind)
        return "z-20 scale-80 translate-x-[120px]";
      case 3: // Far left (behind)
        return "z-20 scale-80 -translate-x-[120px]";
      default:
        return "";
    }
  };
  return (
    <div className="bg-popularBg pt-24 pb-20">
      <Container>
        <div className="text-end">
          <Heading
            heading={"TOP GAMES ON BLACK FRIDAY SALE"}
            as={"h3"}
            className={
              "text-end font-semibold !font-barlow text-[38px] w-[449px] inline-block relative after:absolute after:h-[3px] after:w-[105px] after:bg-iconC after:content-[''] after:bottom-3.5 after:right-[80px]"
            }
          />
        </div>
        <Flex className={"gap-x-4 pt-12 pb-13"}>
          <SaleItems
            src={SaleOne}
            alt={"sale1 1.png"}
            heading={"Horizon Zero Dawn™ Complet..."}
            pText={"Guerrilla Games"}
          />
          <SaleItems
            src={SaleTwo}
            alt={"sale3 1.png"}
            heading={"Disciples: Liberation"}
            pText={"Frima Studio"}
          />
          <SaleItems
            src={SaleThree}
            alt={"sale4 1.png"}
            heading={"Horizon Zero Dawn™ Complet..."}
            pText={"Guerrilla Games"}
          />
          <SaleItems
            src={SaleFour}
            alt={"sale5 1.png"}
            heading={"Industries of Titan"}
            pText={"Brace Yourself Games"}
          />
        </Flex>
        <div className="">
          <p className="font-barlow font-medium text-[20px] text-white pb-7">
            Hancok Games Catalog
          </p>
          <div className="py-[42px] pl-[44px] pr-[108px] bg-poly grid grid-cols-[65%_35%]">
            <div className="w-[80%]">
              <p className="font-oswald font-medium text-base text-iconC">
                Choose Your Favourite Game
              </p>
              <Heading
                heading={"Explore hancok catalog for your next favorite game!"}
                as={"h3"}
                className={
                  "!font-barlow text-[38px] font-semibold py-3 uppercase"
                }
              />
              <p className="font-oswald text-base font-semibold text-[#666666] pb-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Delectus culpa ratione enim maiores nisi cupiditate non nesciunt
                officia labore aut? Et, vero!
              </p>
              <button className="font-oswald text-base text-white font-medium py-[13px] px-[31px] bg-textC cursor-pointer">
                Browse All
              </button>
            </div>
            <div className="relative w-[426px] h-[370px] mx-auto flex items-center justify-center overflow-hidden">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${index}`}
                  className={`absolute w-[258px] h-[370px] object-cover shadow-lg transition-all duration-300 ${getPositionStyles(
                    index
                  )}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Sale;
