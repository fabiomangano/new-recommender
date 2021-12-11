import React from 'react';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = ({ field, form }) => {
  return (
    <div>
      <DateView
        {...field}
        selected={field.value}
        onChange={(val) => form.setFieldValue(field.name, val)}
      />
    </div>
  );
};

export default DatePicker;
