import { useQuery } from "@tanstack/react-query";
import { Game } from "../Models/game";
import { GameQuery } from "../Models/gameQuery.ts";
import ApiClient from "../services/api-client.ts";

const apiClient = new ApiClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ["platforms", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  });

export default useGames;
