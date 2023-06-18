import React from 'react';
import backgroundImage from './tim-mossholder-imlD5dbcLM4-unsplash.png';
import SpinWheel from './SpinWheel';


const App = () => {
  const appStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh', // Set the height to fill the viewport vertically
  };

  return (
    <div className="App" style={appStyle}>
      
    <h1 style={{ color: 'white',textAlign:'center'}}>Joke Spinner</h1>
      <SpinWheel />
    </div>
  );
};

export default App;
