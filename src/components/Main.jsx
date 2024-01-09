import React from 'react'
import Navbar from './Navbar'
import Payout from './Payout'
import Payout2 from './Payout2'

function Main() {
  return (
    <div className='h-screen overflow-scroll'>
      <Navbar />
      <div className='px-3'>
        <Payout />
        <Payout2 />
      </div>
    </div>
  )
}

export default Main
