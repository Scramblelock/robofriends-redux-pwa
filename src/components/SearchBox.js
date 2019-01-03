import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
<<<<<<< HEAD
        aria-label='Search Robots'
=======
>>>>>>> 3db63cd4556d26b5451f3e5c4501ca1d9716443c
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;