import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { Trailer } from "../Models/Trailer";

const useTrailers = (gameId: number) => {
  const apiClient = new ApiClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["games", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;
