import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3e791703c51d49da914526840956273b",
  },
});
