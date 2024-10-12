import { useInfiniteQuery } from "@tanstack/react-query";
import { Game } from "../Models/game";
import { GameQuery } from "../Models/gameQuery.ts";
import ApiClient from "../services/api-client.ts";
import { FetchResponse } from "../Models/fetchResponse.ts";

const apiClient = new ApiClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

export default useGames;
