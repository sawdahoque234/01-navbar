import React, { useState} from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  
  
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
            <h3>Sawda HoQ</h3>
          <button className='nav-toggle' onClick={()=> setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>
                <div className={`${showLinks? 'links-container show-container':'links-container'}`} >
          <ul className='links'>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                   <li key={id}>
                  <a href={url}>{text}</a>
                </li>
               
              );
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                 
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;