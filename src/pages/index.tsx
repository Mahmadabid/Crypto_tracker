import React from 'react';

const App = () => {
  const headerStyle: CSSProperties = {
    background: 'linear-gradient(to right, black, purple)',
    color: 'white',
    height: '100px',
    lineHeight: '100px',
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
