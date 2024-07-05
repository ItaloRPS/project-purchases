import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './styles.scss'
import { ButtonCheck } from '@/components/ButtonCheck';


const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <div className='card-Actions'>
       <div className='sizes'>
            <ButtonCheck id='size-p' name='size' value='P' type='radio'> P</ButtonCheck>
            <ButtonCheck id='size-m' name='size' value='M' type='radio'> M</ButtonCheck>
            <ButtonCheck id='size-g' name='size' value='G' type='radio'> G</ButtonCheck>
            <ButtonCheck id='size-gg' name='size' value='GG' type='radio'>GG</ButtonCheck>
            <ButtonCheck id='size-xg' name='size' value='XG' type='radio'>XG</ButtonCheck>
        </div>
       <div className='btn-buy'>
            <Button size='small' variant="contained" className='btn-finish' sx={{background:'black',width:'100%',height:'41px'}}>Comparar</Button>
        </div>
    </div>
  </React.Fragment>
);

export const CardBuy = () => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}