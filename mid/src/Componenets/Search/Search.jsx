import React, { useContext, useState } from 'react';
import { MyContext } from '../Provider/Provider';

const Search = () => {
  const { value, setValue } = useContext(MyContext);
  const [ans, setAns] = useState([]);
  
  const movies = [
    {
      title: "Movie 1",
      description: "This is a description for Movie 1.",
      img: "https://example.com/movie1.jpg",
      type: "action"
    },
    {
      title: "Movie 2",
      description: "This is a description for Movie 2.",
      img: "https://example.com/movie2.jpg",
      type: "action"
    },
    {
      title: "Movie 1",
      description: "This is a description for Movie 1.",
      img: "https://example.com/movie1.jpg",
      type: "comedy"
    },
    {
      title: "Movie 2",
      description: "This is a description for Movie 2.",
      img: "https://example.com/movie2.jpg",
      type: "comedy"
    },
    {
      title: "Movie 1",
      description: "This is a description for Movie 1.",
      img: "https://example.com/movie1.jpg",
      type: "romantic"
    },
    {
      title: "Movie 2",
      description: "This is a description for Movie 2.",
      img: "https://example.com/movie2.jpg",
      type: "romantic"
    },
    {
      title: "Movie 1",
      description: "This is a description for Movie 1.",
      img: "https://example.com/movie1.jpg",
      type: "cricket"
    },
    {
      title: "Movie 2",
      description: "This is a description for Movie 2.",
      img: "https://example.com/movie2.jpg",
      type: "cricket"
    },
    {
      title: "Movie 1",
      description: "This is a description for Movie 1.",
      img: "https://example.com/movie1.jpg",
      type: "horror"
    },
    {
      title: "Movie 2",
      description: "This is a description for Movie 2.",
      img: "https://example.com/movie2.jpg",
      type: "horror"
    },
  ];


  const handleSearch = (event) => {
    event.preventDefault();
    let searchTerm = event.target.search.value;
    let filteredMovies = movies.filter(movie => movie.type === searchTerm);
    setAns(filteredMovies);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center">
        <span>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="search"
              placeholder="Search for a movie"
              className="border border-black rounded-3xl p-2 w-96"
            />
            <button
              type="submit"
              className="border border-black p-2 m-3 rounded-3xl hover:text-white hover:bg-black"
            >
              Search
            </button>
          </form>

          {ans.length > 0 && ans.map((movie, index) => (
            <div key={index}>
              <div>{movie.title}</div>
              <div>{movie.type}</div>
              <div>{movie.description}</div>
              <button
                onClick={() => {
                  const newValue = [...value, movie];  // Add movie to context
                  setValue(newValue);
                  console.log(newValue);
                }}
              >
                Add Favourite
              </button>
            </div>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Search;
