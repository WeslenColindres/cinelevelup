import React, { useRef, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

import './header.scss';

import Cookis from 'universal-cookie';

import UserMenu from './userMenu/UserMenu';



const headerNav = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Cartelera',
        path: '/movie'
    },
    {
        display: 'Login',
        path: '/Login'
    }
];

const Header = () => {
    const cookis = new Cookis();
    const { pathname } = useLocation();
    const headerRef = useRef(null);

    const active = headerNav.findIndex(e => e.path === pathname);

    const login = cookis.get('email');
    console.log(login);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">

                    <Link to="/">CinesGuatemala</Link>
                </div>
                <ul className="header__nav">

                    {/* // headerNav.map((e, i) => ( */}
                    <li className={`${0 === active ? 'active' : ''}`}>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li className={`${1 === active ? 'active' : ''}`}>
                        <Link to='/movie'>
                            Cartelera
                        </Link>
                    </li>
                    {!login ?
                        <li className={`${2 === active ? 'active' : ''}`}>
                            <Link to='/Login'>
                                Login
                            </Link>
                        </li> 
                        :
                        <li className={`${2 === active ? 'active' : ''} logout` } >
                            <div>
                            <UserMenu />
                            </div>
                               
                       
                        </li>
                    }

                    {/* // )) */}

                </ul>
            </div>
        </div>
    );
}

export default Header;
