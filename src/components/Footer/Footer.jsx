import React from 'react'
import './footer.css'
function Footer() {
    return (
        <footer className="footer">

            <div className="footer__container container">
                <h1 className="footer__title">Pavan Kumar</h1>
                <ul className='footer__list'>
                    <li>
                        <a href="#about" className='footer__link'>About</a>
                    </li>
                    <li>
                        <a href="#about" className='footer__link'>Projects</a>
                    </li>
                    
                </ul>

                <div className="footer__social">
                    <a 
                    className='footer__social-link'
                    href="http://instagram.com/pavan_kumar_bluetick">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a 
                      className='footer__social-link'
                    href="http://twitter.com/pavan_kumar_tg">
                        <i className="bx bxl-twitter"></i>
                    </a>
                    <a 
                      className='footer__social-link'
                    href="https://github.com/pavan6476252">
                        <i className="bx bxl-github"></i>
                    </a>
                    <a 
                      className='footer__social-link'
                    href="https://www.linkedin.com/in/meesala-pavan-kumar-015472230/">
                          <i className="bx bxl-linkedin"></i>
                    </a>

                </div>
                <span className='footer__copy'>All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer