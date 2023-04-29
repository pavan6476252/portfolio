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
                                    <h3 className="qualification__title">Web disgn</h3>
                                    <span className="qualification__calender">spain Insistute</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2021 - Present
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
                                    <h3 className="qualification__title">Flutter</h3>
                                    <span className="qualification__calender">spain Insistute</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2021 - Present
                                    </div>
                                </div>
                            </div>

                            {/* content 3 */}
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Web disgn</h3>
                                    <span className="qualification__calender">spain Insistute</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2021 - Present
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
                                    <h3 className="qualification__title">Flutter</h3>
                                    <span className="qualification__calender">spain Insistute</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2021 - Present
                                    </div>
                                </div>
                            </div>


                        </div>

                        :


                        <div
                            className={toggleState === 2 ?
                                "qualification__content qualification__content-active" : "qualificatoin__content"}
                        >
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">kkk</h3>
                                    <span className="qualification__calender">spain Insistute</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2021 - Present
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
                                    <h3 className="qualification__title">kkk</h3>
                                    <span className="qualification__calender">spain Insistute</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2021 - Present
                                    </div>
                                </div>
                            </div>

                            {/* content 3 */}
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">kkk</h3>
                                    <span className="qualification__calender">spain Insistute</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2021 - Present
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
                                    <h3 className="qualification__title">Flutter</h3>
                                    <span className="qualification__calender">spain Insistute</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2021 - Present
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