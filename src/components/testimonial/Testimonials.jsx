import React from 'react'
import {Data} from "./Data";
import "./testimonial.css";


function Testimonials() {
  return (
   <section className="testimonial container section">
    <h2 className="section__title">My Projects</h2>
    <span className="section__subtitle">Testimonial</span>
    <div className="testimonial__container">
      {Data.map(({id,image,title,description})=>
      <div className="testimonial__card" key={id}>
        <img src={image} alt="" srcSet="" className='testimonial__img' />
        <h3 className="testimonial__name">{title}</h3>
        <p className="testimonial__description">{description}</p>
      </div>
        
      )}
    </div>
   </section>
  )
}

export default Testimonials