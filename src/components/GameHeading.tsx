import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../Models/gameQuery";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const genre = useGenre(gameQuery.genreId);

  const platform = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name ?? ""} ${genre?.name ?? ""} Games`;

  return (
    <Heading as="h1" fontSize="5xl" marginBottom={4}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
