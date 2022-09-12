import React from 'react'
import './menuLogin.scss'

import { RiInboxFill, RiContactsLine, RiLogoutBoxLine, RiMenuLine, RiCloseCircleFill  } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const MenuLogin = () => {
    return (
        <div className='container-login' >
            <div className='btn-mas'>
                    <label 
                    htmlFor='btn'
                    className='icon-mas2'
                    >datos</label>

                </div>
            <input type='checkbox' id='btn' />
                <div className='redes'>
                    <a><Link to='/' ><RiInboxFill /></Link></a>
                    <a><Link to='/' ><RiContactsLine /></Link></a>
                    <a><Link to='/' ><RiLogoutBoxLine /></Link></a>
                    <a><Link to='/' ><RiMenuLine /></Link></a>
                    <a><Link to='/' ><RiCloseCircleFill size='20' /></Link></a>
                </div>
                
            
        </div>
    )
}

export default MenuLogin