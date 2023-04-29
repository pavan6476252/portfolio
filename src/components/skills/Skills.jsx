import React from 'react'
import './skills.css';
import Frontend from './Frontend';
import Backend from './Backend';
import MobileApps from './MobileApps';
import UiUx from './UiUx'

function Skills() {
  return (
    <div className="skill section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical level</span>
        <div className="skills__container container grid">
            <Frontend/>
            <Backend/>
            <MobileApps/>
            <UiUx/>
        </div>
    </div>
  )
}

export default Skills