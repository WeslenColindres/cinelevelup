import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './movie-list.scss';

import { SwiperSlide, Swiper } from 'swiper/react';

import tmdbApi, { category } from '../appRequests/axioRequests/tmdbApi/tmdbApi';

import MovieCard from '../movie-card/MovieCard';
import { Link } from 'react-router-dom';

const MovieList = props => {

    const [items, setItems] = useState([]);
    const itemsLimit = 6;
    
    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};
            if (props.type !== 'similar') {
                switch(props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type, {params});
                        break;
                    default:
                }
            } else {
                response = await tmdbApi.similar(props.category, props.id);
            }
            setItems(response.results);
        }
        getList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="movie-list">
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={"auto"}
            >
                {
                    items.map((item, i) => (
                        i < itemsLimit ? 
                        <SwiperSlide key={i}>
                            <MovieCard item={item} category={props.category}/>
                        </SwiperSlide> 
                        : 
                        i === itemsLimit &&
                        <SwiperSlide key={i}>
                            <Link to='/movie' className="See-Billboard">See Billboard</Link>
                        </SwiperSlide>
                        
                    ))
                }
            </Swiper>
        </div>
    );
}

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default MovieList;
