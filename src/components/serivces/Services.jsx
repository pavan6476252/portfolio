import React, { useState } from 'react'
import './services.css'

function Services() {
    const [activeTab,setActiveTab] = useState(0);
    return (
        <section className="services section" id="services">

            <h2 className="section__title">Services</h2>
            <span className='section__subtitle'>What i offer</span>
            <div className="services__container container grid">
                <div className="services__content"><div><i className="uil uil-web-grid services_icon services__icon"></i>
                    <h3 className="services__title">Web developement</h3>
                </div>
                    <span className="services__button" onClick={()=>setActiveTab(1)}>View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className="services__modal ">
                        <div className={ activeTab ==1 ?"services__modal-content active-modal" :"services__modal-content"}>
                            <i className="uil uil-times services__modal-close" onClick={()=>setActiveTab(0)}></i>
                            <h3 className="services__modal-title"></h3>
                            <p className="services__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fugit hic maiores, qui omnis animi perferendis voluptas enim odio non.</p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-dervices">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet consectetur .</p>
                                </li>
                                <li className="services__modal-dervices">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web page developement .</p>
                                </li>
                                <li className="services__modal-dervices">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">App development.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* //secons  */}
                <div className="services__content"><div><i className="uil uil-android services_icon services__icon"></i>
                    <h3 className="services__title">Mobile Application</h3>
                </div>
                    <span className="services__button">View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className="services__modal">
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title"></h3>
                            <p className="services__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fugit hic maiores, qui omnis animi perferendis voluptas enim odio non.</p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-dervices">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet consectetur .</p>
                                </li>
                                <li className="services__modal-dervices">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web page developement .</p>
                                </li>
                                <li className="services__modal-dervices">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">App development.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


  {/* //secons  */}
  <div className="services__content"><div><i className="bx bx-wrench services_icon services__icon"></i>
                    <h3 className="services__title">Project Development</h3>
                </div>
                    <span className="services__button">View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className="services__modal">
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title"></h3>
                            <p className="services__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fugit hic maiores, qui omnis animi perferendis voluptas enim odio non.</p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-dervices">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet consectetur .</p>
                                </li>
                                <li className="services__modal-dervices">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web page developement .</p>
                                </li>
                                <li className="services__modal-dervices">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">App development.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Services