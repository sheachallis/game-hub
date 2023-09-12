import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1ae7d3efce13495596d1fe16d91b836b",
  },
});
