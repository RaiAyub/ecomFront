import React from 'react'
import logo from './images/logo.jpg'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';

function Header() {
    return (

        <nav className='header'>

            <Link to='/'>
                <img className='header_logo' src={logo} ></img>
            </Link>

            <div className='header_search'>
            <input type='text' className='header_searchInput' />
            <SearchIcon className='header_searchIcon' />
            </div>

            <div className='header_nav' >
                <Link to='/login' className='header_link'>
                    <div className='header_option'>
                        <span className='header_optionLineOne'>Hello</span>
                        <span className='header_optionLineTwo'>Sign In</span>
                    </div>
                </Link>

                <Link to='/orders' className='header_link'>
                    <div className='header_option'>
                        <span className='header_optionLineOne'>Returns</span>
                        <span className='header_optionLineTwo'>& Orders</span>
                    </div>
                </Link>

                <Link to='/account' className='header_link'>
                    <div className='header_option'>
                        <span className='header_optionLineOne'>Your</span>
                        <span className='header_optionLineTwo'>Prime</span>
                    </div>
                </Link>
                
                <Link to='/checkout' className='header_link'>
                    <div className='header_basketOption'>
                        <ShoppingBasket />
                        <span className='header_optionLineTwo basket_count '>0</span>
                    </div>
                </Link>

            </div>

        </nav>

        
    )
}

export default Header
