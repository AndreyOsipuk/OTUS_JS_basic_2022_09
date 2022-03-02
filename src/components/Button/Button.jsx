import React from 'react';
// import style from './Button.css';
// import './Button.css';
import style from './Button.module.css';

export const Button = ({ label = "label", disabled, onButtonClick }) => {
  return (
    <>
      <button
        onClick={onButtonClick}
        disabled={disabled}
        // style={{ backgroundColor: 'green' }}
        className={style.button}
        // className="button"
      >
        {label}
      </button>
    </>
  )
}