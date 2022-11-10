import React from 'react';
import { FormGroup } from './FormGroup';

export const Input = ({ label, name, type, inputClasses }) => {
  return (
    <FormGroup>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        className={inputClasses}
        type={type}
        autoComplete="on"
      />
    </FormGroup>
  )
}