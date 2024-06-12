import {FC, ReactNode, useState } from "react";
import * as S from './styles'
import { IoMdLock } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { InputText } from "@/src/components/InputText";
import { Button } from "@/src/components/Button";
import { LoadingSpinner } from "@/src/components/LoadingSpinner";
import { FcGoogle } from "react-icons/fc";


type HandleProps = {
  payload:string
  context?:{
    email: string;
    password: string;
  }
}

interface InputTextProps  {
  onLogin?: (action:HandleProps) => Promise<void>;
  error?: string;
}
export const FormLogin:FC<InputTextProps>= ({onLogin, error})=>{

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [loading, setLoading] = useState(false);
  const [accessError, setAccessError] = useState('');
  const [clickedButton, setClickedButton] = useState('');
  
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    let action:HandleProps
    if (clickedButton === "credentials") {
      setLoading(true);
      if (!email || !password) {
        setAccessError("Preencha todos os campos");
        setLoading(false);
        return 
      }
      action = {
        payload:'credentials',
        context:{
          email,
          password
        }
      }
      
    }else{
      action = {
        payload:'google',
      }
    }
    if (onLogin) {
     await onLogin(action);
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
        {!!error&&<S.Error>{error}</S.Error>}
        <Button disabled={loading} onClick={()=>setClickedButton("credentials")}>{loading ? <>Aguarde... <LoadingSpinner size="20" color="white"/></>:'Acessar'}</Button>
        <Button color="secondary" onClick={()=>setClickedButton("google")} key={""}>
          <FcGoogle style={{fontSize:16}}/>Acessar com Google
        </Button >
      </S.Container>
    </S.Wrapper>
      );
}