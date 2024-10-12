import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client.ts";
import { FetchResponse } from "../Models/fetchResponse.ts";
import { Genre } from "../Models/genre.ts";

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

export default useGenres;
