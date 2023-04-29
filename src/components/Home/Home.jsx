import React from 'react'
import Social from './Social'
import Data from './Data'
import './home.css'
import ScrollDown from './ScrollDown'

function Home() {
  return (
    <section className="home section" id="home">
      <div style={{ rowGap: "6.7em" }} className="  container grid home__container">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <Data />
        </div>
        <ScrollDown />
      </div>

    </section>
  )
}

export default Home