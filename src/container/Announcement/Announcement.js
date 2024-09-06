import React from 'react'
import './announcement.css'
import { GrAnnounce } from "react-icons/gr";
const Announcement = () => {
  return (
    <div className='announcement'>
      <div className='announcement-head'><GrAnnounce/> Active Predomination</div>
      <div>
        <p>Proactively envisioned multimedia based expertise and cross-media growth strategies.</p>
      </div>
      <div className='announcement-links'>
        <a className='announcement-links-1'>Resource</a>
        <a>Envision</a>
        <a className='announcement-links-3'>Niche</a>
      </div>
    </div>
  )
}

export default Announcement
