import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.util';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className = 'header'>
        <Link to = "/">
            <Logo className = 'logo' />
        </Link>
        <div className = 'options'>
            <Link className = 'options' to='/shop'>
                SHOP
            </Link>
            <Link className='options' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ? 
                <div className='option' onClick = {() => auth.signOut()}>Sign Out</div>
                :
                <Link className = 'option' to = '/signin'>Sign in</Link>

            }
        </div>
    </div>
)

export default Header;