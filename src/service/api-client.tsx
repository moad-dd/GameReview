/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b6fc7ce01e93492aab008fdc814a79b5",
  },
});

export default apiClient;
