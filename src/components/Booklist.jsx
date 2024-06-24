
 

export const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => {
        return <li>{book.name}</li>;
      })}
    </ul>
  );
};

 