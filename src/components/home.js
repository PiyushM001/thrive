import React from 'react'
import Footer from './footer'
import Header from './header'

export default function Home() {
  return (
    <div className='flex flex-col h-[100vh] w-full'>
      <Header/>
      <div className='flex w-full h-[90vh] items-end'></div>
      <Footer/>
    </div>
  )
}
