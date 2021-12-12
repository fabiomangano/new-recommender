import React from 'react';
import Select from 'react-select';
import style from './SelectField.module.css';

const SelectField = ({ placeholder, options, field, form, label }) => (
  <div>
    <label htmlFor={label}>{label}</label>
    <Select
      name={field.name}
      className={style['react-select']}
      options={options}
      value={
        options ? options.find((option) => option.value === field.value) : ''
      }
      onChange={(option) => form.setFieldValue(field.name, option.value)}
      placeholder={placeholder}
      onBlur={field.onBlur}
    />
  </div>
);

export default SelectField;
