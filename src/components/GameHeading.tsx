import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../Models/gameQuery";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const heading = `${gameQuery.platform?.name ?? ""} ${
    gameQuery.genre?.name ?? ""
  } Games`;

  return (
    <Heading as="h1" fontSize="5xl" marginBottom={4}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
