import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { SearchGames } from "./SearchGames";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} alt="logo" boxSize="60px" />
      <SearchGames />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
