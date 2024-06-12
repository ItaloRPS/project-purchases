import {FC, ReactNode,InputHTMLAttributes } from "react";
import * as S from './styles'

type InputTextProps  = {
  icon?: ReactNode;
  error?: string;
}& InputHTMLAttributes<HTMLInputElement>

export const InputText:FC<InputTextProps>= ({icon, error='',...inputProps })=>{
    return (
       <S.Container>
         <S.InputContainer error={error} className="input-container">
          {icon && <S.Icon className="icon">{icon}</S.Icon>}
          <S.Input {...inputProps }  />
        </S.InputContainer>
        {error&&<S.Error>{error}</S.Error>}
      </S.Container>
      );
}