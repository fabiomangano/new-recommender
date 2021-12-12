import React from 'react';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import style from './DatePicker.module.css';

const DatePicker = ({ label, field, form, placeholder }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <DateView
        {...field}
        selected={field.value}
        wrapperClassName={style['react-datepicker__input-container']}
        onChange={(val) => form.setFieldValue(field.name, val)}
        placeholderText={placeholder}
        dateFormat="dd/MM/yyyy h:mm aa"
        minDate={new Date()}
        showTimeInput
        autoComplete="off"
      />
    </div>
  );
};

export default DatePicker;
