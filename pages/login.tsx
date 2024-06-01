import { signIn } from 'next-auth/react';
import { useRouter } from "next/router";
import { useState } from "react";
import { FormLogin } from "../src/templates/FormLogin";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleLogin = async (email: string, password: string) => {
    const redirect = router.query?.redirect || '/';

    const response:any = await signIn('credentials', {
      email,
      password,
      redirect: false,
      callbackUrl: redirect as string,
    });

    if (!response.ok) {
      setError('Usuário ou senha inválidos');
      return;
    }

    window.location.href = response.url;
  };

  return (
    <FormLogin onLogin={handleLogin} error={error}/>
  );
}
