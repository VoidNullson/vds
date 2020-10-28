import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <React.Fragment>
      <nav className='navbar'>
        <div className='navbar-container'>
          <img className='logo' src='./Vegadesign.svg' height='50px' width ='50px' alt=''/>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Vega Design Studio

          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
      {/*      <li className='nav-item'>
              <Link
                to='/web-products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Web Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/marketing'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Marketing
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/the-team'
                className='nav-links'
                onClick={closeMobileMenu}>
                The Team
              </Link>
            </li>*/}
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Contact Us</Button>}
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
