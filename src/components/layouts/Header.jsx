import React, { useEffect, useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "/src/assets/logo.png";
import { Link } from "react-router-dom";
import Global from "../../assets/icons/Global";
import SignOut from "../../assets/icons/SignOut";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`fixed w-full top-0 left-0 py-7 z-50 transition-all duration-300 ${isScrolled ? "bg-headerBg translate-y-0 stickeyHeader" : "bg-transparent"}`}>
      <Container>
        <Flex className={""}>
          <Image src={Logo} alt={"logo.png"} />
          <Flex className={"ml-14"}>
            <ul className="flex gap-x-7">
              <Link to={"/"}>
                <li className="font-oswald text-base text-menu">Home</li>
              </Link>
              <Link to={"/"}>
                <li className="font-oswald text-base text-menu">About us</li>
              </Link>
              <Link to={"/"}>
                <li className="font-oswald text-base text-menu">Tornament</li>
              </Link>
              <Link to={"/"}>
                <li className="font-oswald text-base text-menu">Store</li>
              </Link>
              <Link to={"/"}>
                <li className="font-oswald text-base text-menu">Team</li>
              </Link>
              <Link to={"/"}>
                <li className="font-oswald text-base text-menu">FAQ</li>
              </Link>
              <Link to={"/"}>
                <li className="font-oswald text-base text-menu">Contact Us</li>
              </Link>
            </ul>
          </Flex>
          <div className="flex items-center ml-auto gap-x-4">
            <Global />
            <button className="flex items-center px-3.5 gap-x-2 font-oswald text-base text-white cursor-pointer">
              <SignOut />
              Sign In
            </button>
            <FaSearch className="text-white" />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
