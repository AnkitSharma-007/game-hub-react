import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { SearchGames } from "./SearchGames";

interface SearchGamesProps {
  onSearch: (searchTeaxt: string) => void;
}

const NavBar = ({ onSearch }: SearchGamesProps) => {
  return (
    <HStack padding="10px">
      <Image src={logo} alt="logo" boxSize="60px" />
      <SearchGames onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
