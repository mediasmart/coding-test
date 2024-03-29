import React from 'react';
import fetch from 'isomorphic-fetch';

async function onClick () {
  const data = await fetch('http://localhost:5000/api/hello');
  alert((await data.json()).message);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo" alt="logo">#</div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={onClick}>Click me</button>
      </header>
    </div>
  );
}

export default App;
