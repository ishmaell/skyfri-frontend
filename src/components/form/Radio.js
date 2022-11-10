import React from 'react';

export const Radio = ({ name, options, label }) => {
  return (
    <div className='radio-group'>
      <p>{label}</p>
      <div className='radio-group-flex'>
        {options.map((elem, i) => {
          return <React.Fragment key={i}><label><input type="radio" name={name} /><span>{elem.label}</span></label></React.Fragment>
        })}
      </div>
    </div>
  )
}