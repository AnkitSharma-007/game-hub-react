import { useQuery } from "@tanstack/react-query";
import { Genre } from "../Models/genre.ts";
import ApiClient from "../services/api-client.ts";

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

export default useGenres;
