import React, { FC, ReactNode, InputHTMLAttributes } from "react";
import './styles.scss'; 

type InputTextProps = {
  icon?: ReactNode;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputText: FC<InputTextProps> = ({ icon, error = '', ...inputProps }) => {
  return (
    <div className="container">
      <div className={`input-container ${error ? 'error' : ''}`}>
        {icon && <span className="icon">{icon}</span>}
        <input className="input" {...inputProps} />
      </div>
      {error && <p className="error">{error}</p>}
    </div> 
  );
};
