import React from 'react'
import { MyContext } from '../Provider/Provider';

const Favourite = () => {
    const { value, setValue } = useContext(MyContext);
  return (
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
  )
}

export default Favourite