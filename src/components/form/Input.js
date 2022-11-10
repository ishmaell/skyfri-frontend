import React from 'react';
import { FormGroup } from './FormGroup';

export const Input = ({ label, name, type, inputClasses, register, error }) => {
  return (
    <FormGroup>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        {...register(name)}
        className={inputClasses}
        type={type}
        autoComplete="on"
      />
      {error}
    </FormGroup>
  )
}