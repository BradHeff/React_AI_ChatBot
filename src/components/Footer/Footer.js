import React from 'react';
import { Link } from 'react-router-dom';

import * as Scroll from "react-scroll";

import Logo from '../../assets/images/favicon.png';

const Links = Scroll.Link;

const Footer = (props) => {
  return (
      <div className='section section-ms footer-bg' id="footer">
        <div className='container-fluid px-4 px-md-5'>
          <div className='row align-items-stretch justify-content-between'>
            <div className='col-12 col-md-2 mb-4'>
              <img src={Logo} alt={Logo} style={{height: '60px', opacity: '0.7'}}/>
              <hr/>
              <p>Bringing professional and qualified technical support for you and your computers</p>
            </div>
            <div className='col-12 col-md-3 mb-4'>
              <h3 className='text-white'>Contact Us</h3>
              <hr/>
              <ul className='list-group'>
                <li className='list-group-item d-flex align-items-center border-0 bg-none text-white'>
                  <p><span className='text-bold me-3'><i className='lni lni-map me-2'></i>Address:</span>140 King William Street, Adelaide SA 5000</p>
                </li>
                <li className='list-group-item d-flex align-items-center border-0 bg-none text-white'>
                  <p><span className='text-bold me-3'><i className='lni lni-mobile me-2'></i>Phone:</span>+61 472 645 409</p>
                </li>
                <li className='list-group-item d-flex align-items-center border-0 bg-none text-white'>
                  <p><span className='text-bold me-3'><i className='lni lni-envelope me-2'></i>Email:</span><a href='mailto:brad.heffernan@doohancomputers.com.au' className='text-secondary'>brad.heffernan@doohancomputers.com.au</a></p>
                </li>
              </ul>
            </div>
            <div className='col-12 col-md-3'>
              <h3 className='text-white'>Navigation</h3>
              <hr/>
              <div className='navbar-nav'>
                {!document.location.href.includes('requests')?
                  <>
                    <Links to="home" className='nav-link' spy={true} smooth={true} offset={0} duration={500}>Home</Links>
                    <Links to="features" className='nav-link' spy={true} smooth={true} offset={0} duration={500}>Features</Links>
                    <Links to="pricing" className='nav-link' spy={true} smooth={true} offset={0} duration={500}>Pricing</Links>
                  </>
                :<Link className='nav-link' to='/'>Home</Link>}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Footer;