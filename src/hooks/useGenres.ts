import { Genre } from "../Models/genre.ts";
import useData from "./useData.ts";

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
