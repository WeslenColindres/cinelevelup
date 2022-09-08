import React from 'react';

import { useParams } from 'react-router';

import PageHeader from '../component/page-header/PageHeader';


import MovieGrid from '../component/movie-grid/MovieGrid';

const Billboard = () => {

    const { category } = useParams();


    return (
        <>
            <PageHeader>
                 Billborad
            </PageHeader>
            <div className="container">
                <div className="section mb-3">
                    <MovieGrid category={category}/>
                </div>
            </div>
        </>
    );
}

export default Billboard;
