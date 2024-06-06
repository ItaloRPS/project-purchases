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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import Link from 'next/link';

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
    <Card sx={{ maxWidth: 255, position:'relative; &:hover .btn-add-Cart{display:inline-flex;}'}}>
      <CardMedia
        sx={{ height: 230 }}
        image={item.image}
        title={item.name}
      />
      <CardContent sx={{
          display:'flex', 
          flexDirection:'column',
          paddingTop:"5px",
          height: 110,
          color:`darkgrey; >a{
            color: #545353;
            font-size: 14px;
            text-decoration: none;
            font-weight: 600;
            padding-bottom: 7px;
            word-break: break-word;
            text-overflow: ellipsis;
            white-space:pre;
            overflow: hidden;
            &:hover{
              text-decoration: underline;
            }
          }`}}>
        <Typography gutterBottom fontSize={11} marginBottom={0} >
          {item.category}
        </Typography >
        <Link href={`/product/${item.id}`} style={{fontSize:15}}>
          {item.name}
        </Link>
        <Typography gutterBottom variant='h5' fontWeight={600} sx={{color:'#000000'}}>
          {formatPrince(item.price)}
        </Typography>
        <Rating
        name="rating"
        defaultValue={item.rating}
        precision={0.5}
        readOnly
        />
      </CardContent>
        <IconButton sx={
          {position:'absolute',
          top:5,
          right:5,
          display:'none',
          background:'#f0f8ff9c; &:hover{color:#3f51b5}'}} className='btn-add-Cart'
          onClick={addItemToCart}> 
          <ShoppingCartIcon/>
        </IconButton>
    </Card>
  );
}