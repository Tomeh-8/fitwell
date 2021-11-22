import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-newsletter'>
        <p className='footer-newsletter-heading'>
          Join our newsletter
        </p>
        <p className='footer-newsletter-text'>
          Get weekly access to our health tips and best deals
        </p>
        <div className='input-field'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Email...'
            />
            <Button buttonStyle='btn--outline'>Join</Button>
          </form>
        </div>
      </div>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>Team</Link>
            <Link to='/'>Partners</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Tours</Link>
            <Link to='/'>Tutorials</Link>
            <Link to='/'>Testimonials</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
          </div>
        </div>
      </div>
      <div class='social'>
        <div class='social-wrapper'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              FitWell
              <i class='fa fa-diamond' />
            </Link>
          </div>
          <small class='copyrights'>FitWell © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fa fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fa fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fa fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fa fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fa fa-linkedin' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
