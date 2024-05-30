import { Routes, Route } from "react-router-dom";
import Book from "./Book";
import BookList from "./BookList";
import NewBook from "./NewBook";

import BooksLayout from "./BooksLayout";

export default function BooksRoute() {
  return (
    <>
      {/* <BooksLayout /> */}
      <Routes>
        <Route element={<BooksLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
      </Routes>
    </>
  );
}
