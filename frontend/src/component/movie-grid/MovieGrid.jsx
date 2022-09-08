import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import './movie-grid.scss';

import MovieCard from '../movie-card/MovieCard';


import tmdbApi, { category, movieType } from '../appRequests/axioRequests/tmdbApi/tmdbApi';

const MovieGrid = props => {

    const [items, setItems] = useState([]);

    const itemsLimit = 8;

    const { keyword } = useParams();

    useEffect(() => {
        const getList = async () => {
            let response = null;
            if (keyword === undefined) {
                const params = {};
                switch(props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(movieType.popular, {params});
                        break;
                    default:
                        
                }
            } else {
                const params = {
                    query: keyword
                }
                response = await tmdbApi.search(props.category, {params});
            }
            setItems(response.results);
        }
        getList();
    }, [props.category, keyword]);


    return (
        <>
            <div className="movie-grid">
                {
                    items.map((item, i) => 
                    i < itemsLimit &&
                    <MovieCard category={props.category} item={item} key={i}/>
                    )
                }
            </div>
           
        </>
    );
}


export default MovieGrid;
