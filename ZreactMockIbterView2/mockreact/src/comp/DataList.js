import React from 'react'
import ApiDataListFavs from './ApiDataListFavs'

export default function DataList(apiDataListProps){

    let apiDataListPropsFavoritesListed = apiDataListProps.favorites.map(items => {
        return (
            <ApiDataListFavs 
                {...items}            
            />
        )
    })

    return(
        <div>
            <h1>{apiDataListProps.name}</h1>
            <ul>
                {apiDataListPropsFavoritesListed}
            </ul>
        </div>
    )
}
