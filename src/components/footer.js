import React, { useState } from 'react'
import img from '../Images/Frame 121075512.svg'
import img2 from '../Images/Frame 121075517.svg'
import img3 from '../Images/Frame 121075519.svg'
import img4 from '../Images/players.svg'
import { Link } from 'react-router-dom';
export default function Footer() {
  const[imgs,setimgs]= useState(img);
  const func=()=>{
setimgs(img2);
  }
  return (
    <div className='flex w-full h-[10vh] bg-[black] justify-evenly '>
    
      <Link onClick={func} className='flex items-center' to="/"><img className='w-[18vw]' src={imgs}></img></Link>

      <Link className='flex items-center' to="/"><img className='w-[18vw]' src={img2}></img></Link>

      <Link className='flex items-center' to="/tournaments"><img className='w-[18vw]' src={img3}></img></Link>
      <Link className='flex items-center' to="/"><img className='w-[18vw]' src={img4}></img></Link>


    </div>
  )
}
