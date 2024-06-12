import * as React from 'react';
import * as S from './styles'
import Link from 'next/link'
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Badge, Box, InputAdornment, TextField, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {InputSearch} from '../InputSearch';
import { useAppPurchases } from '@/src/hooks/useApp';
import { useSession } from 'next-auth/react';
import { UserOptions } from '../UserOptions';



export default function Header() {
  const { data: session, status } = useSession();
  // const { sections, title } = props;
  const { sections, title } = {
    sections:[{title:"esportes",url:'/teste'},{title:"outros",url:'/testes'}],
    title:"teste"
  };
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  const handleSubmit = (event:React.FormEvent)=>{
    event.preventDefault()
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const inputValue = formData.get('inputSearch')
    console.log(inputValue);
   
  }
  const {cartItems,setShowCart} = useAppPurchases()
  
  return (
    <S.Header>
      <Toolbar sx={{ justifyContent: 'space-between', borderBottom: 1, borderColor: 'divider' ,background:"black", gap:'5px', minHeight:'50px'}}>
      <S.Logo src='/images/logo.png' alt='Logo do site'/>
      <Box sx={{ display: { xs: 'flex' }, gap:'13px' }} alignItems="center">
      <InputSearch onSubmit={handleSubmit}/>
        {session?<UserOptions settings={settings}/>:<Link href={"/login"}> Minha Conta</Link>}
        <IconButton onClick={()=>setShowCart((v)=> !v)}>
          <Badge badgeContent={cartItems.length} color="primary">
            <ShoppingCartIcon style={{width:'20px', height:'20px',color:'white'}}/>
          </Badge>
        </IconButton>
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
            color="inherit"
            key={section.title}
            href={section.url}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </S.Header>
  );
}
