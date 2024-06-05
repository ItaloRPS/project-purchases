import * as React from 'react';
import * as S from './styles'
import Link from 'next/link'
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Badge, Box, InputAdornment, TextField, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/search';
import {InputSearch} from '../InputSearch';
import { useAppPurchases } from '@/src/hooks/useApp';


interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}
export default function Header() {
  // const { sections, title } = props;
  const { sections, title } = {
    sections:[{title:"esportes",url:'/teste'},{title:"outros",url:'/testes'}],
    title:"teste"
  };

  const handleSubmit = (event:React.FormEvent)=>{
    event.preventDefault()
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const inputValue = formData.get('inputSearch')
    console.log(inputValue);
   
  }

  const {cartItems,setShowCart} = useAppPurchases()
  
  return (
    <React.Fragment>
      <Toolbar sx={{ justifyContent: 'space-between', borderBottom: 1, borderColor: 'divider' ,background:"#fbfdff", gap:'5px', minHeight:'50px'}}>
        <Typography variant="h6" color="inherit" component="div">
        Photos
      </Typography>
      <InputSearch onSubmit={handleSubmit}/>
      <Box sx={{ display: { xs: 'flex' }, gap:'10px' }} alignItems="center">
        <IconButton onClick={()=>setShowCart((v)=> !v)}>
          <Badge badgeContent={cartItems.length} color="primary">
            <ShoppingCartIcon style={{width:'20px', height:'20px'}}/>
          </Badge>
        </IconButton>
        <Link href={"/login"}> Minha Conta</Link>
      </Box>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-around', overflowX: 'auto' , background:"#fbfdff"}}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            key={section.title}
            href={section.url}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}
