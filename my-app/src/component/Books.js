import React, { useEffect, useState } from "react";
import BookSelect from "./BookSelect";

function Books() {
  const [allBook, setAllBook] = useState([]);
  const [booksSelect, setBooksSelecet] = useState("PRISON");

  async function getBooks() {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${booksSelect} `
    );

    const data = await response.json();
    setAllBook(data.items);
    console.log(data.items);
  }

  useEffect(() => {
    getBooks();
  }, [booksSelect]);

  return (
    <div>
      <div className="BookSelect-title">
        <div>
          <BookSelect islem1={booksSelect} islem2={setBooksSelecet} />
        </div>

        <div className="BookSelect-totaly-number">
          Book List ( {allBook.length} )
        </div>
      </div>
      <div className="container-allbook">
        {allBook?.map((item) => (
          <div className="img-allbook-div" key={item.id}>
            {
              <img
                className="img-allbook-img"
                src={item.volumeInfo?.imageLinks?.thumbnail}
              />
            }
            <h4> {item.volumeInfo.title} </h4>
            <p>
              {" "}
              <b>Author(S): </b> {item.volumeInfo.authors}{" "}
            </p>
            <p>
              {" "}
              <b>Categories:</b> {item.volumeInfo.categories}{" "}
            </p>
            <p>
              {" "}
              <b> Published:</b> {item.volumeInfo.publishedDate}{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Books;
