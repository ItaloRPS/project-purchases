import {FC, ReactNode } from "react";
import * as S from './styles'

interface ButtonProps{
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  disabled?: boolean;
  children?:ReactNode
  onClick?: () => void;
}
export const Button:FC<ButtonProps>= ({color="success", disabled, onClick ,children })=>{
    return (
       <S.ButtonStyled color={color} onClick={onClick} >
            {children}
       </S.ButtonStyled>
      );
}