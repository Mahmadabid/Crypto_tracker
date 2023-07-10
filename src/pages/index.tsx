import React, { CSSProperties } from 'react';

const App = () => {
  const headerStyle: CSSProperties = {
    background: 'linear-gradient(to right, black, purple)',
    color: 'white',
    height: '100px',
    lineHeight: '100px',
  };

  const containerStyle: CSSProperties = {
    background: 'linear-gradient(to right, black, purple)',
    color: 'white',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Update alignItems to flex-start
    justifyContent: 'center',
    outline: 'none', // Remove the outline
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
