import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
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
      sx={{ Width:'100%',
            display:'flex', 
            border:'none', 
            marginBottom:0.5,
            borderBottom:'solid 1px #e8e8e8',
            borderRadius:0}}>
      <CardMedia
        sx={{ width: 120 }}
        image={item.image}
        title={item.name}
      />
      <CardContent sx={{display:'flex', alignItems:'center', flexDirection:'column',paddingTop:"5px",flexGrow:1} }>
        <Typography gutterBottom variant="h6" color= 'darkgrey'>
        {item.name}
        </Typography>
        <Typography gutterBottom variant="h6" >
          
          {formatPrince((item.price*item.amount))}
        </Typography>
        <Box sx={{maxWidth:'65px', minWidth:'5px'}}>
          <InputAmount error='' onChange={handleAmountChange} />
        </Box>
      </CardContent>
      <CardActions sx={{display:'flex', alignItems:'center', flexDirection:'column'}}>
        <IconButton aria-label="delete" size="small" onClick={()=>onRemove(item)}>
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </CardActions>
    </Card>
  );
}