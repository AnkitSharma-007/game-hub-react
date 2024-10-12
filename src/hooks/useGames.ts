import { useQuery } from "@tanstack/react-query";
import { Game } from "../Models/game";
import { GameQuery } from "../Models/gameQuery.ts";
import apiClient from "../services/api-client.ts";
import { FetchResponse } from "../Models/fetchResponse.ts";

const useGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ["platforms", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

export default useGames;
