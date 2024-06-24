'use client'
import { Badge, IconButton } from "@mui/material";
import { useAppPurchases } from '../../hooks/useApp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const ButtonCart = () =>{
    const { cartItems, setShowCart } = useAppPurchases();
    return (
        <IconButton onClick={() => setShowCart(v => !v)}>
        <Badge badgeContent={cartItems.length} color="primary">
          <ShoppingCartIcon style={{ width: '20px', height: '20px', color: 'white' }} />
        </Badge>
      </IconButton>
    )
}