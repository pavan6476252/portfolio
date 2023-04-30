import React, { useState } from 'react'
import './qualifications.css'

function Qualifications() {
    const [toggleState, setToggleState] = useState(1);
    return (
        <section className="qualification__container section">
            <h2 className="section__title">Qualifications</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification__container container">

                <div className="qualification__tabs">
                    <div className={
                        toggleState === 1 ? "qualification__button qualification__active button--flex"
                            : "qualification__button  button--flex"}

                        onClick={() => setToggleState(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div className={
                        toggleState === 2 ? "qualification__button qualification__active button--flex"
                            : "qualification__button  button--flex"}

                        onClick={() => setToggleState(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience

                    </div>
                </div>

                <div className="qualification__sections">

                    {toggleState === 1 ?
                        <div className={toggleState === 1 ?
                            "qualification__content qualification__content-active" : "qualificatoin__content"}>

                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">10th Class</h3>
                                    <span className="qualification__calender">Ap model School</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                       2018
                                    </div>
                                </div>

                                <div>
                                    <spain className="qualification__rounder"></spain>
                                    <spain className="qualification__line"></spain>
                                </div>

                            </div>

                            {/* content 2 */}

                            <div className="qualification__data">

                                <div></div>
                                <div>
                                    <spain className="qualification__rounder"></spain>
                                    <spain className="qualification__line"></spain>
                                </div>

                                <div>
                                    <h3 className="qualification__title"> Diploma CSE</h3>
                                    <span className="qualification__calender">Balajee polytechnic</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2022
                                    </div>
                                </div>
                            </div>

                            {/* content 3 */}
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Engineering-CSE</h3>
                                    <span className="qualification__calender">Vignan institute of information technology</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2022 - Present
                                    </div>
                                </div>

                                <div>
                                    <spain className="qualification__rounder"></spain>
                                    <spain className="qualification__line"></spain>
                                </div>

                            </div>

                            {/* content 2 */}

                            {/* <div className="qualification__data">

                                <div></div>
                                <div>
                                    <spain className="qualification__rounder"></spain>
                                    <spain className="qualification__line"></spain>
                                </div>

                                <div>
                                    <h3 className="qualification__title">Flutter</h3>
                                    <span className="qualification__calender">spain Insistute</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2021 - Present
                                    </div>
                                </div>
                            </div> */}


                        </div>

                        :


                        <div
                            className={toggleState === 2 ?
                                "qualification__content qualification__content-active" : "qualificatoin__content"}
                        >
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Flutter</h3>
                                    <span className="qualification__calender">Self Learning</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2020 - Present
                                    </div>
                                </div>

                                <div>
                                    <spain className="qualification__rounder"></spain>
                                    <spain className="qualification__line"></spain>
                                </div>

                            </div>

                            {/* content 2 */}

                            <div className="qualification__data">

                                <div></div>
                                <div>
                                    <spain className="qualification__rounder"></spain>
                                    <spain className="qualification__line"></spain>
                                </div>

                                <div>
                                    <h3 className="qualification__title">MERN Stack</h3>
                                    <span className="qualification__calender">Self Learning</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2020 - Present
                                    </div>
                                </div>
                            </div>

                            {/* content 3 */}
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">DevOps</h3>
                                    <span className="qualification__calender">Self Learnig</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2023 - Present
                                    </div>
                                </div>

                                <div>
                                    <spain className="qualification__rounder"></spain>
                                    <spain className="qualification__line"></spain>
                                </div>

                            </div>

                            {/* content 2 */}

                            <div className="qualification__data">

                                <div></div>
                                <div>
                                    <spain className="qualification__rounder"></spain>
                                    <spain className="qualification__line"></spain>
                                </div>

                                <div>
                                    <h3 className="qualification__title">Machine Learning</h3>
                                    <span className="qualification__calender">Self Learning</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2023 - Present
                                    </div>
                                </div>
                            </div>


                        </div>

                    }


                </div>

            </div>
        </section >
    )
}

export default Qualifications