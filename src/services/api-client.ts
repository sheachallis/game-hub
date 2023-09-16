import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3cd1e709853c4046a59fd8dcb23aacea",
  },
});
