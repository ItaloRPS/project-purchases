import './styles.scss'
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
        <div className="amount-container">
          <button className="button"  onClick={decreaseValue} >-</button>
          <input className="amount-input"  type="text" {...inputProps }  min={1} value={amount}/>
          <button className="button" onClick={increaseValue}>+</button>
        </div>
      );
  };