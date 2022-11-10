import React from 'react';
import { FormGroup } from './FormGroup';

export const Select = ({ label, name, type, inputClasses, options, placeholder }) => {
  return (
    <FormGroup>
      {label && <label htmlFor={name}>{label}</label>}
      <select
        className={inputClasses}
        type={type}
        autoComplete="on"
      >
        <option disabled hidden selected>
          {placeholder}
        </option>
        {options.map((elem, i) => (
          <option key={i} value={elem.value}>
            {elem.label}
          </option>
        ))}
      </select>
    </FormGroup>
  )
}