
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Box from '@mui/material/Box';
import './styles.scss'

export type FeaturedPostProps = {
  post: {
    description: string;
    image: string;
    imageText: string;
    link: string;
    title: string;
    price: string;
  };
}


export const FeaturedPost:React.FC<FeaturedPostProps> = ({post}) =>{

  return (
    <Link href={post.link} style={{textDecoration:'none'}}>
        <Paper
        sx={{
            position: 'relative',
            backgroundColor: 'grey.800',
            color: '#fff',
            mb: 4,
            margin:0,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${post.image})`,
             '&:hover': {
                    filter: 'brightness( 70% )'
    },            
        }}
        >
        <Box
            sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.3)',
            }}
        />
        <Grid container>
            <Grid item md={6}>
            <Box
                sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
                }}
            >
                <Typography variant="h5" color="inherit" paragraph>
                {post.description}
                </Typography>
                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                {post.title}
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                {post.title} <span className='span-price'>{post.price}</span>
                </Typography>
            </Box>
            </Grid>
        </Grid>
        </Paper>
    </Link>
  );
}
