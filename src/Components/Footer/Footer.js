import React from 'react';
import { FaFacebook, FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer-top">
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-4">

                                <h4 className='text-info'>About us</h4>
                                <p>We continually accept new challenges and we believe in continuous growth. Working with us means becoming part of a multicultural team, where dialogue between people is always imbued with respect, transparency and trust.  </p>

                            </div>

                            <div className="col-md-4">
                                <h4 className='text-info'>Information</h4>
                                <ul className="address1">

                                    <li><i className="fa fa-envelope"></i><a href="mailto:#">learnap@gmail.edu</a></li>
                                    <li><i className="fa fa-mobile" aria-hidden="true"></i> <a href="tel:12 34 56 78 90">+99-1234567890</a></li>
                                </ul>
                            </div>

                            <div className="col-md-4 ">
                                <h4 className='text-info'>Follow us</h4>

                                <FaFacebook className='fs-2 p-1' />
                                <FaInstagram className='fs-2 p-1' />
                                <FaWhatsapp className='fs-2 p-1' />
                                <FaTelegram className='fs-2 p-1' />

                            </div>

                        </div>
                    </div>
                </div>

            </footer >
        </div >
    );
};

export default Footer;