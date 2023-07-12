import React from 'react';

const App = () => {
  const headerStyle = {
    background: 'linear-gradient(to right, black, purple)',
    color: 'white',
    height: '80px',
    lineHeight: '80px',
 } 

  return (
    <div>
      <header style={headerStyle}>
        <h1>Crypto Tracker</h1>
      </header>

    </div>
  );
};

export default App;
