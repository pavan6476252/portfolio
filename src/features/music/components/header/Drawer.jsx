import React, { useState } from 'react';
import './drawer.css';

const Drawer = () => {
  const [collapsed, setCollapsed] = useState(false);

 

  if (false) {
    return (
      <div className="sidebar">
        <div className="sidebar__title" onClick={() => setCollapsed(!collapsed)}>

          <h2 ><i className='bx bx-menu menu__icon'></i></h2>
        </div>
        <div className="sidebar__navs">
          <ul className="sidebar_links">
            <li className="sidebar__link">
              <i className="bx bx-home"></i>
            </li>
            <li className="sidebar__link">

              <i class='bx bxs-collection'></i>

            </li>
            <li className="sidebar__link">
              <i class='bx bx-album'></i>

            </li>
            <li className="sidebar__link">
              <i class='bx bxs-face'></i>

            </li>
            <li className="sidebar__link">
              <i className="bx bx-video"></i>

            </li>
          </ul>

          <ul className="sidebar__links">
            <h2 className="sidebar__link">ME</h2>

            <li className="sidebar__link">  <i className="bx bx-alarm"></i></li>
            <li className="sidebar__link">
              <i className="bx bx-folder"></i>
            </li>
          </ul>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="sidebar">
        <div className="sidebar__title">
          <h2>Music Hub</h2>
          {/* <h2 onClick={() => setCollapsed(!collapsed)}><i class='bx bx-menu menu__icon'></i></h2> */}
        </div>
        <div className="sidebar__navs">
          <ul className="sidebar_links">
            <li className="sidebar__link acitve__navlink">
              <i className="bx bx-home"></i>
              <a>
                Home
              </a></li>
            <li className="sidebar__link">

              <i class='bx bxs-collection'></i>
              <a>
                Browse
              </a>
            </li>
            <li className="sidebar__link">
              <i className='bx bx-album'></i>
              <a>
                Album
              </a>
            </li>
            <li className="sidebar__link">
              <i className='bx bxs-face'></i>
              <a>
                Artists
              </a>
            </li>
            <li className="sidebar__link">
              <i className="bx bx-video"></i>
              <a>
                Videos
              </a>
            </li>
          </ul>

          <ul className="sidebar__links">
            <h2 className="sidebar__title">My Music</h2>

            <li className="sidebar__link">  <i className="bx bx-alarm"></i> <a  >Recently Played</a></li>
            <li className="sidebar__link">
              <i className="bx bx-folder"></i>
              <a  >Local Files</a></li>
          </ul>
        </div>
      </div>
    );
  }
};

export default Drawer;
