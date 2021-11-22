import { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const displayButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    displayButton();
  }, []);

  window.addEventListener('resize', displayButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            FitWell
            <i class="fa fa-diamond"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/'
               className='nav-links' 
               onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to='/register'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Register
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>REGISTER</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
