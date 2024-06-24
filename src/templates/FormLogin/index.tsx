import {FC, ReactNode, useState } from "react";
import './styles.scss'
import { IoMdLock } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { InputText } from "@/components/InputText";
import { Button } from "@/components/Button";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession} from 'next-auth/react';


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
  const { data: session, status } = useSession();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    let action:HandleProps
    if (clickedButton === "credentials") {
      console.log(email)
      console.log(password)
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
      <form className="wrapper" onSubmit={handleSubmit}>
       <div className="container-form">
          <h2 className="title">Login</h2>
         <div className="form-container">
          <InputText icon={<MdEmail/>} placeholder="Email" onChange={(v) => [setEmail(v.target.value),setAccessError("")]} error={accessError}/>
          <InputText icon={<IoMdLock/>} type='password' placeholder="Senha"  onChange={(v) => [setPassword(v.target.value),setAccessError("")]} error={accessError}/>
        </div>
        {!!error&&<p className="error">{error}</p>}
        <Button disabled={loading} color={"dark"}  onClick={()=>setClickedButton("credentials")}>{loading ? <>Aguarde... <LoadingSpinner size="20" color="white"/></>:'Acessar'}</Button>
        <Button color="secondary" onClick={()=>setClickedButton("google")} key={""}>
          <FcGoogle style={{fontSize:16}}/>Acessar com Google
        </Button >
      </div>
    </form>
      );
}