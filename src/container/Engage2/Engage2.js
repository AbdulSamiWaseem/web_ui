import React from 'react'
import './engage2.css'
import { BiSolidTachometer } from "react-icons/bi";
const Engage2 = () => {
  return (
    <div className='engage2'>
        <div className='engage2-head'><BiSolidTachometer size={20}/>Dramatically Engage</div>
        <div className='engage2-detail'>
            <div><div><p className='line-1'>100% Proactively Envisioned</p></div></div>
            <div><div><p className='line-2'>80% Objectively Innovated</p></div></div>
            <div><div><p className='line-3'>45% Portalled</p></div></div>
            <div><div><p className='line-4'>35% Done</p></div></div>
        </div>
      
    </div>
  )
}

export default Engage2
