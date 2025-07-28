import React from "react";
import Container from "../Container";
import Heading from "../Heading";


const Sale = () => {
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
      </Container>
    </div>
  );
};

export default Sale;
