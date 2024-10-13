import Genre from "./genre";
import Platform from "./platform";

interface Publisher {
  id: number;
  name: string;
}

export default interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  background_image: string;
  description_raw: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
