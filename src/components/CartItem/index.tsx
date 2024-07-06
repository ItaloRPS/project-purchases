'use client'
import * as React from 'react';
import './styles.scss'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DeleteIcon from '@mui/icons-material/Delete';
import { formatPrince } from '@/util/formatPrince';
import { InputAmount } from '../InputAmount';
import { Box, IconButton } from '@mui/material';
import { ItensProps } from '@/common/Types/ItemType';

type CartItemProps = {
  onChange:(v:ItensProps)=> void
  onRemove:(v:ItensProps)=> void
  item:ItensProps
}

export const CartItem:React.FC<CartItemProps> = ({item, onChange, onRemove})=> {

  const handleAmountChange = (newValue:any) => {
    const newItem = {...item,amount:newValue}
    onChange(newItem)
  };

  return (
    <Card variant="outlined" 
      sx={{
        display: 'flex',
        flexWrap: 'nowrap',
        minWidth:'260px',
        maxWidth:'100vh',
        border:'none',
        marginBottom:0.5,
        borderBottom:'solid 1px #e8e8e8',
        borderRadius:1}}>
            
      <CardMedia
        sx={{ width: 100, height:100 }}
        image={item.image}
        title={item.name}
      />
      <CardContent sx={{flex: 1,padding: '0px 0px 0px 8px',display:'flex',alignItems:'center',flexDirection:'column',gap:1}}>
        <span className='description'>
          {item.name}
        </span>
        <Box sx={{display:'flex',flexDirection:'column'}}>
          <span className='size'>
            Tamanho:G
          </span>
          <span className='price'>
            {formatPrince((item.price*item.amount))}
          </span>
        </Box>
        <Box sx={{maxWidth:'65px', minWidth:'5px',marginBottom:1}}>
          <InputAmount error='' onChange={handleAmountChange} />
        </Box>
      </CardContent>
      <CardActions sx={{paddingLeft:0}}>
        <IconButton aria-label="delete" size="small" onClick={()=>onRemove(item)}>
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </CardActions>
    </Card>
  );
}