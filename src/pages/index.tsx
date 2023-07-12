import React from 'react';

const App = ({ serverData }) => {
  const { coin } = serverData

  export async function getServerData() {
  const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
  const data = await res.json()

  return {
    props: {
      coin: data,
    },
  }
  } 
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
      <p>{coin} </p>
    </div>
  );
};

export default App;
