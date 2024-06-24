// src/components/App.jsx

import { BookList } from "./Booklist";

const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
];

function App () {
  return (
    <>
			<h1>Books of the week</h1>
      <BookList books={favouriteBooks} />
    </>
  );
};

export default App;