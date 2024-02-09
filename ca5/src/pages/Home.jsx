import axios from 'axios';
import { useState, useEffect } from 'react';
import './Home.css'; 

function Home() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", { headers: { 'Authorization': 'whatever-you-want' } })
      .then(res => {
        setData(res.data.books);
        setFilteredData(res.data.books);
      })
      .catch(err => {
        console.log("Status Code: " + err.response.status);
        if (err.response.status === 404) {
          console.log("Website not found");
        } else {
          console.log(err);
        }
      });
  }, []);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseDetails = () => {
    setSelectedBook(null);
  };

  const handleSearch = () => {
    const filteredBooks = data.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredBooks);
  };

  return (
    <div className="flex-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {filteredData.map((item) => (
        <div key={item.id} className="book-container" onClick={() => handleBookClick(item)}>
          <h4>{item.title}</h4>
          <img src={item.imageLinks.smallThumbnail} alt="" />
          <p>Free</p>
        </div>
      ))}

      {selectedBook && (
        <div className="modal">
          <div className="modal-content">
            <h4>{selectedBook.title}</h4>
            <div className='flex'>
              <img src={selectedBook.imageLinks.smallThumbnail} alt="" />
              <p>{selectedBook.description}</p>
            </div>
            {selectedBook.authors.map((author, index) => (
              <span key={index}>{author}</span>
            ))}
            <p>Price: Free</p>
            <hr />
            <button onClick={handleCloseDetails}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
