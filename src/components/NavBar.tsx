import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { SearchGames } from "./SearchGames";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} alt="logo" boxSize="60px" objectFit="cover" />
      </Link>
      <SearchGames />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
