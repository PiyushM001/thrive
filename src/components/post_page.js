import React from 'react'
import Footer from './footer'
import Header from './header'

export default function Postpage() {
  return (
    <div className='flex flex-col h-[100vh] w-full'>
      <Header/>
      <div className='flex w-full h-[90vh] justify-center bg-black text-[#4a4a4a]'> Cannot Post Now </div>
      <Footer/>
    </div>
  )
}
