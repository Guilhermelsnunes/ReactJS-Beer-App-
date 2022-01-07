import React from 'react'

const BeerDetail = ({beer, amendFavouriteBeer}) => {

    const handleClick = () => {
        amendFavouriteBeer(beer);
    }

    return(
        <>
            <h2>{beer.name}</h2>
            <div>
                <div>
                    <img className="BeerImage" src={beer.image_url} />
                </div>
                <div >
                    <p>{beer.tagline}</p>
                    <p>{beer.description}</p>                    
                </div>
            </div>
            <button onClick={handleClick}>Add to favorities</button>


        </>

    )
}

export default BeerDetail;