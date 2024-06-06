import * as React from 'react';
import * as S from './styles'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DeleteIcon from '@mui/icons-material/Delete';
import { formatPrince } from '@/src/util/formatPrince';
import { InputAmount } from '../InputAmount';
import { Box, IconButton } from '@mui/material';
import { ItensProps } from '@/src/common/Types/ItemType';

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
        <S.Description>
          {item.name}
        </S.Description>
        <Box sx={{display:'flex',flexDirection:'column'}}>
          <S.Size>
            Tamanho:G
          </S.Size>
          <S.Prince>
            {formatPrince((item.price*item.amount))}
          </S.Prince>
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