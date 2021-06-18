import './App.css';
import React from 'react';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Let's go, Estelle!</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
