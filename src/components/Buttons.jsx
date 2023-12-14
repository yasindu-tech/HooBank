import React from 'react'

const Buttons = ({styles}) => {
  return (
    <button type="button" className={`font-medium rounded-[8px]  text-primary px-5 py-4 bg-blue-gradient font-poppins text-[18px] outline-none ${styles}`} >
      Get Started
    </button>
  )
}

export default Buttons