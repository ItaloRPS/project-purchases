import { signIn,signOut } from 'next-auth/react';
import { useRouter } from "next/router";
import { useState } from "react";
import { FormLogin } from "../src/templates/FormLogin";

export default function LoginPage() {
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
    // const redirect = router.query?.redirect || '/';

    // const response:any = await signIn('credentials', {
    //   email:action.context?.email,
    //   password:action.context?.password,
    //   redirect: false,
    //   callbackUrl: redirect as string,
    // });
    
    // if (!response.ok) {
    //   setError('Usuário ou senha inválidos');
    //   return;
    // }

    // window.location.href = response.url;

    signIn('google')
  };

  return (
    <FormLogin onLogin={handleLogin} error={error}/>
  );
}
