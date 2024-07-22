import * as React from 'react';
import './styles.scss'

type CheckboxProp ={
  children:string,
  name:string,
  id?:string
  value?:string
  type:'radio'|'checkbox'
  onClick:(event:any) =>void
}



export const CheckFilter = ({children, name, id, value, type='radio',onClick}:CheckboxProp) => {
  
  return (
    <div className='aline-row' >
      <input type={type} name={name} id={id} onClick={onClick} value={value}/>
      <label htmlFor={id}> {children}</label>
    </div>
  );
}