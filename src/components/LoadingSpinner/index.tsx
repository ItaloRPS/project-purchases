import { FC } from 'react';
import * as S from './styles'

export type LoadingSpinnerProps = {
    size?:string;
    color?:string
}

export const LoadingSpinner:FC<LoadingSpinnerProps> = ({ size = "40", color = '#007bff'}) => {
    return (
      <S.Spinner size={size} color={color}/>
    );
  };