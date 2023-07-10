import React from 'react';
import './styles.css';

const App = () => {
  const headerStyle = {
    background: 'linear-gradient(to left, black, purple)', // Updated gradient direction
    color: 'white',
    height: '100px', // Increase the height of the header
    lineHeight: '100px', // Vertically center the text within the header
  };

  const containerStyle = {
    background: 'linear-gradient(to left, black, purple)', // Apply the same gradient to the parent div
    color: 'white',
    height: '100vh', // Make the container fill the entire viewport height
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1>Crypto Tracker</h1>
      </header>
    </div>
  );
};

export default App;
