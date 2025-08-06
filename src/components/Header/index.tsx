import * as React from 'react';
import './styles.scss';
import Link from 'next/link';
import Toolbar from '@mui/material/Toolbar';
import {Box} from '@mui/material';
import { InputSearch } from '../InputSearch';
import { authOptions } from '../../app/api/auth/[...nextauth]/route';
import { UserOptions } from '../UserOptions';
import { getServerSession } from 'next-auth';
import { ButtonCart } from '../ButtonCart';

export default async function Header() {
  const session = await getServerSession(authOptions)
  const { sections, title } = {
    sections: [{ title: "esportes", url: '/category/esportes' }, { title: "outros", url: '/category/todos' }],
    title: "teste"
  };
  const settings = ['Profile', 'Account', 'Dashboard'];

  const handleSubmit = async (dataForm:FormData) => {
    "use server"
    console.log(dataForm);
  };
  
  return (
    <header className="header">
      <Toolbar sx={{ justifyContent: 'space-between', borderBottom: 1, borderColor: 'divider' ,background:"black", gap:'5px', minHeight:'50px'}}>
        <Link href={"/"}>
          <picture>
          {/* Logo compacta para telas pequenas */}
          <source media="(max-width: 600px)" srcSet="/images/LogoSimbol.png"/>
          {/* Logo normal para telas maiores */}
          <img
            src="/images/logo.png"
            alt="Logo do site"
            style={{ height: "auto", width: "11rem",filter: "brightness(0.6)"}}
            className='logo'
          />
        </picture>
        </Link>
        <Box sx={{ display: { xs: 'flex' }, gap:'13px' }} alignItems="center">
          <InputSearch action={handleSubmit} />
          {session ? <UserOptions settings={settings} /> : <Link href="/login" className='link-login'>Minha Conta</Link>}
          <ButtonCart/>
        </Box>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-around', overflowX: 'auto' , background:"#fbfdff"}}
      >
        {sections.map((section) => (
          <Link
            className='link-nav'
            key={section.title}
            href={section.url}
          >
            {section.title.toUpperCase()}
          </Link>
        ))}
      </Toolbar>
    </header>
  );
}
