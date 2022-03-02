import React, { FC } from 'react';
// import './Button.css';
import style from './Button.module.css';

interface ButtonProps {
  label?: string;
  disabled?: boolean;
  onButtonClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  label = 'label',
  disabled,
  onButtonClick,
}) => {
  return (
    <button
      onClick={onButtonClick}
      disabled={disabled}
      // style={{ backgroundColor: 'green' }}
      className={style.button}
      // className="button"
    >
      {label}
    </button>
  );
};
