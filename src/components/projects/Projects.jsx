import React from 'react'
import { Data } from "./Data";
import "./projects.css";


function Projects() {
  return (
    <section className="testimonial container section">
      <h2 className="section__title">My Projects</h2>
      <span className="section__subtitle">let's go</span>
      <div className="testimonial__container"
      
      >
        {Data.map(({ id, image, title, description, url }) =>
          <div className="testimonial__card" key={id} >
            <img src={image} alt="" srcSet="" className='testimonial__img' />
    <div className='project__content'>
            <div>
              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </div>
            <div>

              <a href={url} className="contact__button">Visit Project
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
          </div>

        )}
      </div>
    </section>
  )
}

export default Projects