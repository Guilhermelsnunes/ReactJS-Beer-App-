const FavouriteBeers = ({favouriteBeers,removeFavouriteBeer}) => {

    const handleClick = (event) => {
        removeFavouriteBeer(event.target.value);
    }

    const beerList = favouriteBeers.map((beer) => {

        return (
            <>
            <li>{beer.name} <button value={beer.id} onClick={handleClick}>Remove from favorities</button></li>
            </>
        )
    })

    return(
        <ul>
            {beerList}
        </ul>
    );

}

export default FavouriteBeers;