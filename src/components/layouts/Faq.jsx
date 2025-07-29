import React from "react";
import Container from "../Container";
import Heading from "../Heading";

const Faq = () => {
  return (
    <div className="pt-12 pb-20 bg-textC">
      <Container>
        <Heading
          heading={"FREQUENTLY ASKED QUESTION “QUESTION & ANSWER”"}
          as={"h3"}
          className={
            "font-semibold !font-barlow text-[38px] w-[493px] inline-block relative after:absolute after:h-[3px] after:w-[120px] after:bg-iconC after:content-[''] after:bottom-3 after:right-[70px]"
          }
        />
        <div className="my-[92px] grid grid-cols-2 grid-rows-2 gap-[150px] relative after:absolute after:w-full after:h-[1px] after:bg-[#666666] after:content-[''] after:top-1/2 after:right-0 after:left-0 after:-translate-y-1/2 before:absolute before:h-full before:w-[1px] before:bg-[#666666] before:content-[''] before:top-0 before:bottom-0 before:left-1/2 before:-translate-x-1/2">
          <div className="flex gap-x-8">
            <div className="mt-2 h-[70px] w-[70px] bg-iconC flex justify-center items-center font-barlow font-semibold text-[38px] text-white">
              1
            </div>
            <div className="">
              <Heading
                heading={"HOW TO DOWNLOAD THE GAME ?"}
                className={
                  "!font-barlow font-semibold text-[22px] text-white cursor-pointer hover:text-iconC transition-all duration-300 pb-3"
                }
                as={"h5"}
              />
              <p className="font-oswald text-base text-[#666666] w-[427px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, iste, sed error at adipisci repellat rem maiores
                provident voluptatem ipsum autem fugiat.
              </p>
            </div>
          </div>
          <div className="flex gap-x-8">
            <div className="mt-2 h-[70px] w-[70px] bg-iconC flex justify-center items-center font-barlow font-semibold text-[38px] text-white">
              2
            </div>
            <div className="">
              <Heading
                heading={"IS THERE ANY AGE RESTRICTIONS ?"}
                className={
                  "!font-barlow font-semibold text-[22px] text-white cursor-pointer hover:text-iconC transition-all duration-300 pb-3"
                }
                as={"h5"}
              />
              <p className="font-oswald text-base text-[#666666] w-[427px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, iste, sed error at adipisci repellat rem maiores
                provident voluptatem ipsum autem fugiat.
              </p>
            </div>
          </div>
          <div className="flex gap-x-8">
            <div className="mt-2 h-[70px] w-[70px] bg-iconC flex justify-center items-center font-barlow font-semibold text-[38px] text-white">
              3
            </div>
            <div className="">
              <Heading
                heading={"HOW TO BECOME A TEAM MEMBER ?"}
                className={
                  "!font-barlow font-semibold text-[22px] text-white cursor-pointer hover:text-iconC transition-all duration-300 pb-3"
                }
                as={"h5"}
              />
              <p className="font-oswald text-base text-[#666666] w-[427px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, iste, sed error at adipisci repellat rem maiores
                provident voluptatem ipsum autem fugiat.
              </p>
            </div>
          </div>
          <div className="flex gap-x-8">
            <div className="mt-2 h-[70px] w-[70px] bg-iconC flex justify-center items-center font-barlow font-semibold text-[38px] text-white">
              4
            </div>
            <div className="">
              <Heading
                heading={"IS THERE ANY REWARD FOR WINNERS ?"}
                className={
                  "!font-barlow font-semibold text-[22px] text-white cursor-pointer hover:text-iconC transition-all duration-300 pb-3"
                }
                as={"h5"}
              />
              <p className="font-oswald text-base text-[#666666] w-[427px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, iste, sed error at adipisci repellat rem maiores
                provident voluptatem ipsum autem fugiat.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
