import React from 'react';
import './footer.scss'

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__context container'>
                <div className='footer__context__logo'>
                    <div className='logo'>

                    </div>
                </div>
                <div className='footer__context__menus'>
                    <div className='footer__context__menu'>
                        <Link to='/'> Home </Link>
                        <Link to='/'> Contact us </Link>
                        <Link to='/'> Term of services </Link>
                        <Link to='/'> About us </Link>
                    </div>
                    <div className='footer__context__menu'>
                        <Link to='/'> Live </Link>
                        <Link to='/'> FAQ </Link>
                        <Link to='/'> Premium </Link>
                        <Link to='/'> Pravacy policy </Link>
                    </div>
                    <div className='footer__context__menu'>
                        <Link to='/'> you must watch </Link>
                        <Link to='/'> Recent release </Link>
                        <Link to='/'> Top ImDB </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer