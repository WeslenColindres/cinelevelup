import React from 'react';
import { Link } from 'react-router-dom';


import { OutlineButton } from '../component/button/Button';
import HeroSlide from '../component/hero-slide/HeroSlide';
import MovieList from '../component/movie-list/MovieList';


import { category, movieType } from '../component/appRequests/axioRequests/tmdbApi/tmdbApi';


const Home = () => {
  return (
    <>
      <HeroSlide />
      <div className='container'>
        <div className='section mb-3'>
          <div className='section__header mb-2'>
            <h2 className='h-2'>Movies in Theaters</h2>
            <Link to='/movie' className='link-a'>
              <OutlineButton className="small">Query Billboard</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>
      </div>
    </>
  )
}

export default Home


