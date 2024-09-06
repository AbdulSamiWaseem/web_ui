import React, { useState } from 'react'
import { TiWorld } from "react-icons/ti";
import { IoSearch } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import './navbar.css'
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [options, setOptions] = useState(false);
  return (
    <div className='navbar'>
      <div className='ui-navbar'>
        <div className='ui-navbar-links'>
          <p><TiWorld /> Logo</p>
          <div>
            <a className='ui-navbar-links-home'>Home</a>
            <a>About</a>
            <a>Product</a>
            <select>
              <option>Services</option>
              <option>Engage</option>
              <option>Pontificate</option>
              <option>Senergize</option>
            </select>
          </div>
        </div>
        <div className='ui-navbar-input'>
          <input/>
          <button><IoSearch /> Search</button>
        </div>
        <div className='menu'>
          {toggleMenu
            ? <div className='menu-line'><IoMenuOutline color='white' size='30' onClick={() => { setToggleMenu(false) }} /></div>
            : <div className='menu-line'><IoMenuOutline color='white' size='30' onClick={() => { setToggleMenu(true) }} /></div>
          }
        </div>
      </div>
      {toggleMenu &&
        (<div className='ui-menu'>
          <div className='ui-menu-links'>
            <a>Home</a>
            <a>About</a>
            <a>Product</a>
            <button onClick={() => { if(!options){setOptions(true)} else{setOptions(false)} }}>Services <MdArrowDropDown /></button>
            {options
              ? <div className='ui-menu-links-options'><a>Engage</a>
                <a>Pontificate</a>
                <a>Synergize</a>
              </div>
              : null
            }
          </div>
          <div className='ui-menu-input'>
            <input/>
            <button><IoSearch /> Search</button>
          </div>

        </div>
        )
      }
    </div>
  )
}

export default Navbar
