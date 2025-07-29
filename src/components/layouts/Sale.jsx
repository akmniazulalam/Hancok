import React, { useEffect, useState } from "react";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import SaleItems from "../SaleItems";
import Image from "../Image"; // ✅ using custom Image component
import SaleOne from "/src/assets/sale1 1.png";
import SaleTwo from "/src/assets/sale3 1.png";
import SaleThree from "/src/assets/sale4 1.png";
import SaleFour from "/src/assets/sale5 1.png";

import Img1 from "/src/assets/category-4 1.png";
import Img2 from "/src/assets/category-2 1.png";
import Img3 from "/src/assets/category-3 1.png";
import Img4 from "/src/assets/category-5 1.png";
import Img5 from "/src/assets/category-1 1.png";

const Sale = () => {
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % 5); // 5 images total
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getPositionStyles = (index) => {
    const position = (index - active + 5) % 5;

    switch (position) {
      case 0:
        return "z-40 scale-110 translate-x-0";
      case 1:
        return "z-30 scale-90 translate-x-[70px]";
      case 4:
        return "z-30 scale-90 -translate-x-[70px]";
      case 2:
        return "z-20 scale-80 translate-x-[120px]";
      case 3:
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

            {/* ✅ Manually written Image tags for slider */}
            <div className="relative w-[426px] h-[370px] mx-auto flex items-center justify-center overflow-hidden">
              <Image
                src={Img1}
                alt="Slide 1"
                className={`absolute w-[258px] h-[370px] object-cover shadow-lg transition-all duration-300 ${getPositionStyles(0)}`}
              />
              <Image
                src={Img2}
                alt="Slide 2"
                className={`absolute w-[258px] h-[370px] object-cover shadow-lg transition-all duration-300 ${getPositionStyles(1)}`}
              />
              <Image
                src={Img3}
                alt="Slide 3"
                className={`absolute w-[258px] h-[370px] object-cover shadow-lg transition-all duration-300 ${getPositionStyles(2)}`}
              />
              <Image
                src={Img4}
                alt="Slide 4"
                className={`absolute w-[258px] h-[370px] object-cover shadow-lg transition-all duration-300 ${getPositionStyles(3)}`}
              />
              <Image
                src={Img5}
                alt="Slide 5"
                className={`absolute w-[258px] h-[370px] object-cover shadow-lg transition-all duration-300 ${getPositionStyles(4)}`}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Sale;
