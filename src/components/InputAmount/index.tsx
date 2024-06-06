import * as S from './styles'
import {InputHTMLAttributes, useState } from 'react';

type InputAmountProps  = {
  error?: string;
  onChange?: (value: number) => void;
}& InputHTMLAttributes<HTMLInputElement>

export const InputAmount:React.FC<InputAmountProps> = ({error, onChange,...inputProps}) => {
  const [amount, setAmount] = useState(1);
  const increaseValue = () => {
    setAmount(prevValue => prevValue + 1);
    if (onChange) {
      onChange(amount + 1);
    }
  };

  const decreaseValue = () => {
    setAmount(prevValue => (prevValue-1==0?1:prevValue-1));
    if (onChange) {
      onChange(amount-1<0?0:amount-1);
    }
  };
  console.log(amount)

    return (
        <S.AmountContainer>
          <S.Button  onClick={decreaseValue} >-</S.Button>
          <S.AmountInput type="text" {...inputProps }  min={1} value={amount}/>
          <S.Button  onClick={increaseValue}>+</S.Button>
        </S.AmountContainer>
      );
  };