import axios from "axios";

export function useAxios() {
  const instance = axios.create({
    baseURL: "https://gutendex.com/",
  });

  return instance;
}
