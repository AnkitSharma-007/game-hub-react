import { useInfiniteQuery } from "@tanstack/react-query";
import { FetchResponse } from "../Models/fetchResponse.ts";
import { Game } from "../Models/game";
import { GameQuery } from "../Models/gameQuery.ts";
import ApiClient from "../services/api-client.ts";

const apiClient = new ApiClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

export default useGames;
