import React, { useState } from 'react';
import axios from 'axios';

const ChuckNorrisJoke = () => {
  const [joke, setJoke] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);

  const getRandomJoke = async () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setJoke('');

    const jokeAPIs = [
      // { url: 'https://api.chucknorris.io/jokes/random', source: 'Chuck Norris' },
      { url: 'https://official-joke-api.appspot.com/random_joke', source: 'Official Joke API' }
    ];

    try {
      const jokePromises = jokeAPIs.map(async (api) => {
        const response = await axios.get(api.url);
        if (api.source === 'Chuck Norris') {
          return response.data.value;
        } else {
          return response.data.setup + ' ' + response.data.punchline;
        }
      });

      const jokes = await Promise.all(jokePromises);

      setJoke(jokes[Math.floor(Math.random() * jokes.length)]);
      setIsSpinning(false);
    } catch (error) {
      console.error(error);
      setJoke('Failed to fetch joke');
      setIsSpinning(false);
    }
  };

  return (
    <div>
      <h2>Joke Spinner</h2>
      <div className={`spinner ${isSpinning ? 'spin' : ''}`}></div>
      <button onClick={getRandomJoke} disabled={isSpinning}>
        {isSpinning ? 'Spinning...' : 'Spin'}
      </button>
      {joke && <p>{joke}</p>}
    </div>
  );
};

export default ChuckNorrisJoke;
