import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import '../styles/header.css'
import { useStateValue } from './stateProvider';

function Header() {
    const [logoImage, setLogoImage] = useState('');
    const [userImage, setUserImage] = useState('');
    const [{ cart }, dispatch] = useStateValue()

    useEffect(() => {
        setLogoImage('https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png');
        setUserImage('https://www.gstatic.com/tv/thumb/persons/487130/487130_v9_ba.jpg');
    }, []);

    return (
        <div className="header">
            <div className="logo_wrapper">
                <Link to="/">
                    <img src={logoImage} className="header__logo" />
                </Link>
            </div>
            <div className="search__wrapper">
                <input type="text" className="header__search" />
                <SearchIcon className="header__search__icon" />
            </div>

            <div className="right__wrapper">
                <div className="header__option">
                    <span className="option__one">Hello, Guest</span>
                    <span className="option__two">Sign In</span>
                </div>
                <div className="header__option">
                    <span className="option__one">Returns</span>
                    <span className="option__two">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="option__one">Your</span>
                    <span className="option__two">Prime</span>
                </div>
                <div className="header__option">
                    <Link to="/checkout">
                        <Badge badgeContent={cart?.length} color="secondary">
                            <ShoppingCartIcon className="header__shoppingCart__icon" />
                        </Badge>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Header
