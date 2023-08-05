import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "15edba10cef44c29864456913c9c0325",
  },
});
