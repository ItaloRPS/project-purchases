import {FC, ReactNode } from "react";
import './styles.scss'

interface ButtonProps{
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  disabled?: boolean;
  children?:ReactNode
  onClick?: () => void;
}
export const Button:FC<ButtonProps>= ({color="success", disabled, onClick ,children })=>{
    return (
       <button className={color} onClick={onClick} >
            {children}
       </button>
      );
}