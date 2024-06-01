import {FC, ReactNode, useState } from "react";
import * as S from './styles'
import { IoMdLock } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { InputText } from "@/src/components/InputText";
import { Button } from "@/src/components/Button";
import { LoadingSpinner } from "@/src/components/LoadingSpinner";

interface InputTextProps  {
  onLogin?: (email: string, password: string) => Promise<void>;
  error?: string;
}
export const FormLogin:FC<InputTextProps>= ({onLogin, error})=>{

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [loading, setLoading] = useState(false);
  const [accessError, setAccessError] = useState('');
  
  
  const handleSubmit = async (event: React.FormEvent) => {
    setLoading(true);
    event.preventDefault();
    if (!email || !password) {
      setAccessError("Preencha todos os campos");
      setLoading(false);
      return 
    }

    if (onLogin) {
      await onLogin(email, password);
    }

    setLoading(false);
  };
    return (
      <S.Wrapper  onSubmit={handleSubmit}>
       <S.Container>
          <S.Title>Login</S.Title>
         <S.FormContainer>
          <InputText icon={<MdEmail/>} placeholder="Email" onChange={(v) => [setEmail(v.target.value),,setAccessError("")]} error={accessError}/>
          <InputText icon={<IoMdLock/>} type='password' placeholder="Senha"  onChange={(v) => [setPassword(v.target.value),setAccessError("")]} error={accessError}/>
        </S.FormContainer>
        {!error&&<S.Error>{error}</S.Error>}
        <Button disabled={loading}>{loading ? <>Aguarde... <LoadingSpinner size="20" color="white"/></>:'Acessar'}</Button>
      </S.Container>
    </S.Wrapper>
      );
}