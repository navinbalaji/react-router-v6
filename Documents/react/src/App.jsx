import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Page404 from "./404";
import BooksRoute from "./BooksRoute";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/*" element={<BooksRoute />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
