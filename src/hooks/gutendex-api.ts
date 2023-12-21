import { useState } from "react";
import { useAxios } from "./axios";

export function useGutendexApi() {
  const axiosService = useAxios();
  const [books, setBooks] = useState([]);

  async function getBooks() {
    const response = await axiosService("books/");
    setBooks(response.data.results);
    console.log(response.data.results);
  }

  return {
    actions: {
      getBooks,
    },
    states: {
      books,
    },
  };
}
