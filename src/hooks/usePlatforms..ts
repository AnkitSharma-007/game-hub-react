import { useQuery } from "@tanstack/react-query";
import Platform from "../Models/platform.ts";
import ApiClient from "../services/api-client.ts";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

export default usePlatforms;
