import React from 'react'

export const Button = ({ classes, children, onClick, disabled, isRequesting }) => {
  return (
    <button onClick={onClick} className={classes} disabled={disabled}>{children}</button>
  )
}