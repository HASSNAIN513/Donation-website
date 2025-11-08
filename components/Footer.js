import React from 'react'

const Footer = () => {
  let date= new Date()
  
  
  return (
    <footer className='flex justify-center items-center h-13 text-sm bg-[#101826] text-white'>
      <div>Copyright © {date.getFullYear()} GetMeaCHai - All Rights Reserved!</div>
    </footer>
  )
}

export default Footer
