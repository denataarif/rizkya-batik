import React from 'react'

const Button = (props) => {
  
  const {
    children,
    onClick,
    className,
    type
  } = props
  
    return (
    <>
        <button type={type} onClick={onClick} className={`${className} rounded-md bg-isActive text-white`}>
            {children}
        </button>
    </>
  )
}

export default Button