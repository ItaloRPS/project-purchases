import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { formatPrince } from '@/src/util/formatPrince';
import { useAppPurchases } from '@/src/hooks/useApp';
import { ItensProps } from '@/src/common/Types/ItemType';

type cartItemProp ={
  item:ItensProps
}

export const CardItem:React.FC<cartItemProp> = ({item})=> {
  const {cartItems,setCartItems} = useAppPurchases()

  const addItemToCart = ()=>{
    const coditem = Math.floor(Math.random() * 0xFFFFFFFF).toString(16) + Date.now().toString(16)
    setCartItems([...cartItems, {...item,coditem}])
  }

  return (
    <Card sx={{ maxWidth: 155 }}>
      <CardMedia
        sx={{ height: 145 }}
        image={item.image}
        title={item.name}
      />
      <CardContent sx={{display:'flex', alignItems:'center', flexDirection:'column',paddingTop:"5px"} }>
        <Typography gutterBottom variant="h5" >
          {formatPrince(item.price)}
        </Typography>
        <Typography gutterBottom variant="h6" color="darkgrey">
        {item.name}
        </Typography>
        <Rating
        name="rating"
        defaultValue={item.rating}
        precision={0.5}
        readOnly
        />
      </CardContent>
      <CardActions sx={{display:'flex', alignItems:'center', flexDirection:'column'}}>
      <Button onClick={addItemToCart} variant="outlined">Comprar</Button>
      </CardActions>
    </Card>
  );
}