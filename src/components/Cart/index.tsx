import { Button, IconButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import * as S from './styles'
import { ModalLeft } from '../ModalLeft';
import {useAppPurchases} from '@/src/hooks/useApp';
import { CartItem } from '../CartItem';
import { formatPrince } from '@/src/util/formatPrince';

export const Cart = ()=> {
  const {cartItems} = useAppPurchases()
    const totalPrice = cartItems.reduce((acc:number,item:any)=>{
      return item.price +acc
    },0)

    const {showCart,setShowCart} = useAppPurchases();
    return (
        <ModalLeft openModal={showCart}>
          <S.HeaderItem>
          <IconButton disableRipple={true} size={"small"} onClick={()=>setShowCart((v)=>!v)}>
            <CloseIcon  />
          </IconButton>
            <S.Title>CARRINHO</S.Title>
          </S.HeaderItem>
          <S.ContentItem>
                {cartItems?cartItems.map((data:any)=><CartItem item={data}/>):<S.notItem>Sem Itens</S.notItem>}
            </S.ContentItem>  
          <S.FooterItem>
          <Typography gutterBottom variant="h5" sx={{display:'flex',justifyContent:'space-between'}}>
            Total <span>{formatPrince(totalPrice)}</span>
        </Typography>
            <S.Actions>
                <Button size='small' variant="contained" color="primary">Finalizar compra</Button>
                <Button size='small' variant="outlined" onClick={()=>setShowCart((v)=>!v)}>Escolher mais produtos</Button>
            </S.Actions>
          </S.FooterItem>
        </ModalLeft>
    )
}