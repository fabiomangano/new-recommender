import React from 'react';
import style from './Slot.module.css';

const Slot = ({ onClick }) => {
  return (
    <div className={style.container} onClick={onClick}>
      <div>
        <img />
        <div></div>
      </div>
    </div>
  );
};

export default Slot;
