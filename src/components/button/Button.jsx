import React from 'react'
import './button.css'

const Button = ({ text, onClick, className, variant = 'primary-4' }) => {
  return (
    <button 
      className={`button button--${variant} ${className || ''}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button