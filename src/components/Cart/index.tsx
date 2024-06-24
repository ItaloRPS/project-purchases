'use client'
import { Button, IconButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import './styles.scss'
import { ModalLeft } from '../ModalLeft';
import {useAppPurchases} from '@/hooks/useApp';
import { CartItem } from '../CartItem';
import { formatPrince } from '@/util/formatPrince';
import { ItensProps } from '@/common/Types/ItemType';

export const Cart = ()=> {
  const {cartItems, setCartItems, showCart, setShowCart} = useAppPurchases()
    const totalPrice = cartItems.reduce((acc:number,item:{price:number,amount:number})=>{
      return (item.price * item.amount) +acc
    },0)

    const removeItem = (data:ItensProps)=>{
      setCartItems(i=>i.filter((item:any) => {
        if(item.coditem !== data.coditem){
          return item
        }
      }))
     
    }

    const changeItem = (data:ItensProps)=>{
      const artItems = cartItems.map((item:any) => {
        if(item.coditem == data.coditem){
          return data
        }
        return item
      })
      setCartItems(artItems)
    }

    return (
        <ModalLeft open={showCart}>
          <div className={"header-item"}>
          <IconButton disableRipple={true} size={"small"} onClick={()=>setShowCart((v)=>!v)}>
            <CloseIcon  />
          </IconButton>
            <span className='title'>CARRINHO</span>
          </div>
          <div className='content-item'>
                {cartItems?cartItems.map((data:any)=><CartItem onChange={changeItem} onRemove={removeItem} item={data}/>):<span className='not-item'>Sem Itens </span>}
            </div>  
          <div className='footer-item'>
          <Typography gutterBottom sx={{display:'flex',justifyContent:'space-between'}}>
            Total <span>{formatPrince(totalPrice)}</span>
        </Typography>
            <div className='actions'>
                <Button size='small' variant="contained" className='btn-finish' sx={{background:'black'}}>Finalizar compra</Button>
                <Button size='small' variant="outlined" onClick={()=>setShowCart((v)=>!v)}>Escolher mais produtos</Button>
            </div>
          </div>
        </ModalLeft>
    )
}