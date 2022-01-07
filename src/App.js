import { useEffect, useState } from 'react';
import BeerContainer from './containers/BeerContainer';
import './App.css';

function App() {

  const [beers, setBeers] = useState([])
  const fetchBeers= () => {
    fetch("https://api.punkapi.com/v2/beers")
    .then(response => response.json())
    .then(beerData => setBeers(beerData))
  }
  useEffect(() => {
    fetchBeers()
  })
  return (
    <div className="App">
      <h1>Beer</h1>
     <BeerContainer />
    </div>
  );
}

export default App;
