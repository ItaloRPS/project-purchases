'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './styles.scss'
import { ButtonCheck } from '@/components/ButtonCheck';
import { CardMedia, Rating } from '@mui/material';
import { ItensProps } from '@/common/Types/ItemType';
import { formatPrince } from '@/util/formatPrince';
import { useAppPurchases } from '@/hooks/useApp';
import Link from 'next/link';

type CartBuyProp ={
  item:ItensProps
}

export const CardBuy = ({item}:CartBuyProp) => {

  const {cartItems, setCartItems} = useAppPurchases()
  
  const addItemToCart = (formData:FormData)=>{
    const size = formData.get('size')
    const coditem = Math.floor(Math.random() * 0xFFFFFFFF).toString(16) + Date.now().toString(16)
    setCartItems([...cartItems, {...item, coditem, size}])
}
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <CardMedia
              sx={{ height: 80,width:80,borderRadius:2 }}
              image={item.image}
              title={item.name}
            />
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            {item.name}
          </Typography>
          <Rating
            sx={{color:'black'}}
            name="rating"
            defaultValue={4}
            precision={0.5}
            readOnly
            />
          <Typography variant="h5" component="div">
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <Link  className='category-item' href={`/${item.category}`}>{item.category}</Link>
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
          <Typography gutterBottom variant='h5' fontWeight={600} sx={{color:'#000000',fontSize:'25px'}}>
              {formatPrince(item.price)}
            </Typography>
        </CardContent>
        <div >
          <form action={addItemToCart} className='card-Actions'>
            <div className='sizes'>
                  <ButtonCheck id='size-p' name='size' value='P' type='radio'> P</ButtonCheck>
                  <ButtonCheck id='size-m' name='size' value='M' type='radio'> M</ButtonCheck>
                  <ButtonCheck id='size-g' name='size' value='G' type='radio'> G</ButtonCheck>
                  <ButtonCheck id='size-gg' name='size' value='GG' type='radio'>GG</ButtonCheck>
                  <ButtonCheck id='size-xg' name='size' value='XG' type='radio'>XG</ButtonCheck>
              </div>
              <div className='btn-buy'>
                  <Button size='small' type='submit' variant="contained" className='btn-finish' sx={{background:'black',width:'100%',height:'41px'}}>Comparar</Button>
              </div>
          </form>
        </div>
      </Card>
    </Box>
  );
}