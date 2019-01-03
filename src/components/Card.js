import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
<<<<<<< HEAD
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
=======
      <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
>>>>>>> 3db63cd4556d26b5451f3e5c4501ca1d9716443c
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;