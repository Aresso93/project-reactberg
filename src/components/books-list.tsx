import React from "react";
import { Book } from "../model/book";
import { BookSimpleCard } from "./book-simple-card";

interface BooksListProps {
  books: Book[];
}

export function BookList(props: BooksListProps) {
  return (
    <>
      {props.books.map((book) => (
        <React.Fragment key={book.id}>
          <BookSimpleCard
            title={book.title}
            image={book.formats["image/jpeg"]}
            authors={book.authors.map((author) => {
              <p>{author.name}</p>;
            })}
          />
        </React.Fragment>
      ))}
    </>
  );
}
