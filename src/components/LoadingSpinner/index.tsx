import { FC } from 'react';
import './styles.scss'

export type LoadingSpinnerProps = {
    size?:string;
    color?:string
}

export const LoadingSpinner:FC<LoadingSpinnerProps> = ({ size = "40", color = '#007bff'}) => {
    return (
      <div className='border-top-colo' style={{borderColor:color,width:size,height:size}}/>
    );
  };