import { useQuery } from "@tanstack/react-query";
import Trailer from "../Models/Trailer";
import ApiClient from "../services/api-client";

const useTrailers = (gameId: number) => {
  const apiClient = new ApiClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["games", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;
