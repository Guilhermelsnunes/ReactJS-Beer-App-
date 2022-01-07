import React from 'react'

const BeerSelector = ({beers, onBeerSelected}) => {

    const handleChange = function(event){
        const chosenBeer = beers[event.target.value]
        onBeerSelected(chosenBeer)
    }

    const beerOptions = beers.map((beer, index) => {
        return <option value={index} key={index}>{beer.name}</option>
    })


    return(
        <select defaultValue="" onChange={handleChange}>
            <option value="">Choose a Beer...</option>
            {beerOptions}
        </select>

    )
}

export default BeerSelector;