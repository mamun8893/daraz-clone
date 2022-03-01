import React from 'react';
import logo from '../../../assets/images/logo.png';
import appLogo from '../../../assets/images/app-logo.png';
import { Container } from 'react-bootstrap';
import { HiOutlineSearch,HiOutlineShoppingCart } from "react-icons/hi";

const Header = () => {
    return (
        <header>
            <Container>
                <div className="ic-header-warper">
                    <div className="logo">
                        <img src={logo} className="img-fluid" alt="logo" />
                    </div>
                    <div className="header-right">
                      <div className="header-search">
                        <form className='search-form'>
                            <div className="searc-box">
                                <input type="search" className='form-control' placeholder='Search in Daraz' />  
                            </div>
                            <div className="search-btn">
                                <button type="submit"><HiOutlineSearch/></button>  
                            </div>   
                        </form>
                         </div>
                        <div className="cart-icon">
                            <HiOutlineShoppingCart/>
                        </div>
                        <div className="apps-logo">
                            <img src={appLogo} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;