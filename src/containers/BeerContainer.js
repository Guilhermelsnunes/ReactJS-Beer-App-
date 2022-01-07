import React, {useState, useEffect} from 'react';
import BeerDetail from '../components/BeerDetails';
import BeerSelector from '../components/BeerSelector';
import FavouriteBeers from '../components/FavouriteBeers';

const BeerContainer = () => {
    const [beers, setBeers] = useState([]);
    const [selectedBeer, setSelectedBeer] = useState(null);
    const [favouriteBeers, setFavouriteBeers] = useState([]);

    useEffect(() => {
        getBeers();
    }, [])

    const getBeers = function(){
        fetch("https://api.punkapi.com/v2/beers")
        .then(res => res.json())
        .then(beers => setBeers(beers))
    }
    const onBeerClick = function(beer){
        setSelectedBeer(beer)
    }

    const onBeerSelected = function(beer){
        setSelectedBeer(beer)
    }

    const amendFavouriteBeer = (beer) => {
        const beerInFavourites = favouriteBeers.includes(beer);
        return beerInFavourites ? null : setFavouriteBeers([...favouriteBeers, beer])
    }

    const removeFavouriteBeer = (id) => {
        const index = favouriteBeers.findIndex((item) => item.id == id)
        favouriteBeers = favouriteBeers.splice(index,1)
    }    

    return (
        <div className="main-container">
            <BeerSelector beers={beers} onBeerSelected={onBeerSelected}/>
            {selectedBeer ? <BeerDetail beer={selectedBeer} amendFavouriteBeer={amendFavouriteBeer} /> : null }

            <br /><hr />

            {favouriteBeers.length > 0 ? <h1>Favourite Beers:</h1>: null }
            {favouriteBeers.length > 0 ? <FavouriteBeers favouriteBeers={favouriteBeers} removeFavouriteBeer={removeFavouriteBeer}/> : null}
        </div>
    )
}

export default BeerContainer; 