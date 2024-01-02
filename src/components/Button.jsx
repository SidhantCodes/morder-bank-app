import React from 'react'
import styles from '../style'
const Button = () => {
  return (
    <div type='button' className={`px-4 py-2 bg-blue-gradient text-primary font-poppins font-medium text-[16px] rounded-md mt-3 cursor-pointer hover:text-white ${styles}`}>
      Get Started
    </div>
  )
}

export default Button
