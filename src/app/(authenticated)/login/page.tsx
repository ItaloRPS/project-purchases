'use client'
import { FormLogin } from "@/templates/FormLogin";
import { SessionProvider, signIn } from "next-auth/react";

import { redirect, useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
    
    const router = useRouter();
    const [error, setError] = useState('');
    type HandleProps = {
      payload:string
      context?:{
        email: string;
        password: string;
      }
    }
 
    const handleLogin = async (action:HandleProps) => {

    const response:any = await signIn('credentials', {
      email:action.context?.email,
      password:action.context?.password,
      redirect: false,
      callbackUrl: '/',
    });
    
    if (!response.ok) {
      setError('Usuário ou senha inválidos');
      return;
    }

    window.location.href = response.url;

        signIn('google',{
          redirect:false,
          callbackUrl:'/'
        })
    };

  return (
    <SessionProvider><FormLogin onLogin={handleLogin} error={error}/></SessionProvider>
  );
}
