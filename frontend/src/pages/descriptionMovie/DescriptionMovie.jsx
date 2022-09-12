import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';

import ContextCinemaHallManager from '../../component/contextFuncion/contectCinemaHallManager/Manager';

import tmdbApi from '../../component/appRequests/axioRequests/tmdbApi/tmdbApi';
import apiConfig from '../../component/appRequests/apiConfig/tmdbApi/apiConfig';

import './DescriptionMovie.scss';
import CastList from './CastList';
import VideoList from './VideoList';
import { Link } from 'react-router-dom';



const DescriptionMovie = () => {

    const { setNameMovie } = useContext(ContextCinemaHallManager);


    const { category, id } = useParams();

    const [item, setItem] = useState(null);

    useEffect(() => {
        const getDetail = async () => {
            const response = await tmdbApi.detail(category, id, {params:{}});
            setItem(response);
            window.scrollTo(0,0);
        }
        getDetail();
        
    }, [category, id]);

    useEffect(() => {
        if(!item){
            return;
        }
        setNameMovie(item.title)
    }, [item]);
    return (
        <>
            {
                item && (
                    <>
                        <div className="banner" style={{backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`}}></div>
                        <div className="mb-3 movie-content container">
                            <div className="movie-content__poster">
                                <div className="movie-content__poster__img" style={{backgroundImage: `url(${apiConfig.originalImage(item.poster_path || item.backdrop_path)})`}}></div>
                            </div>
                            <div className="movie-content__info">
                                <h1 className="title">
                                    {item.title || item.name}
                                </h1>
                                <div className="genres">
                                    {
                                        item.genres && item.genres.slice(0, 5).map((genre, i) => (
                                            <span key={i} className="genres__item">{genre.name}</span>
                                        ))
                                    }
                                </div>
                                <p className="overview">{item.overview}</p>
                                <div className="cast">
                                    <div className="section__header">
                                        <h2>Casts</h2>
                                    </div>
                                    <CastList id={item.id}/>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="section mb-3">
                                <Link to='/campra'><h2>Horarios de pelicula</h2></Link>
                            </div>
                        </div>
                        <div className="container">
                            <div className="section mb-3">
                                <VideoList id={item.id}/>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
}

export default DescriptionMovie;
