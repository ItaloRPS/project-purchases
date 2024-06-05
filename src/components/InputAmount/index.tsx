import * as S from './styles'
import {Button} from '@mui/material';
import {InputHTMLAttributes, useState } from 'react';

type InputAmountProps  = {
  error?: string;
  onChange?: (value: number) => void;
}& InputHTMLAttributes<HTMLInputElement>

export const InputAmount:React.FC<InputAmountProps> = ({error, onChange,...inputProps}) => {
  const [value, setValue] = useState(1);

  const increaseValue = () => {
    setValue(prevValue => prevValue + 1);
    if (onChange) {
      onChange(value + 1);
    }
  };

  const decreaseValue = () => {
    setValue(prevValue => (prevValue-1<0?0:prevValue-1));
    if (onChange) {
      onChange(value-1<0?0:value-1);
    }
  };

    return (
        <S.AmountContainer>
          <S.Button  onClick={decreaseValue} >-</S.Button>
          <S.AmountInput type="text" {...inputProps }  min={0} value={value}/>
          <S.Button  onClick={increaseValue}>+</S.Button>
        </S.AmountContainer>
      );
  };