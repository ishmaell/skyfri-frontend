import React from 'react';

export const Radio = ({ name, options, label, register, error }) => {
  return (
    <div className='radio-group'>
      <p>{label}</p>
      <div className='radio-group-flex'>
        {options.map((elem, i) => {
          return (
            <React.Fragment key={i}>
              <label>
                <input {...register(name)} type="radio" name={name} value={elem.value} /><span>{elem.label}</span>
              </label>
            </React.Fragment>
          );
        })}

      </div>
      {error}
    </div>
  )
}