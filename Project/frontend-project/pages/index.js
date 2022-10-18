import { Container, Typography, Grid } from '@mui/material'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { DrawerAppBar } from './navBar';
import { BrowseCard, DownloadCard, EnjoyCard } from './card';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useRouter } from 'next/router';


export default function Home() {

  return (
    <>
        <CssBaseline />
        <DrawerAppBar/>
        <Grid container sx={{
          height: '75vh',
          backgroundImage: 'url(./Homepage1.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>

        </Grid>
        <Grid container justifyContent={'space-around'}
        sx={{
          backgroundColor: '#6e6e6e',
        }}>
            <BrowseCard/>
            <DownloadCard/>
            <EnjoyCard/>
        </Grid>
        {/* footer */}
        <Grid container sx={{
          backgroundColor: '#3d3d3d'
        }}>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <Box
              sx={{
                display:'flex',
                alignItems: 'Center',
                justifyContent: 'center',
                p: 2
              }}
            >
                <Typography variant='h6'>
                  Follow us on: &nbsp;
                </Typography>
                <FacebookIcon sx={{fontSize: '40px',}}/>
                <InstagramIcon sx={{fontSize: '40px'}}/>
                <TwitterIcon sx={{fontSize: '40px'}}/>
            </Box>
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <Box
              sx={{
                display:'flex',
                alignItems: 'Center',
                justifyContent: 'center',
                height: '100%',
                p: 2
              }}
            >
                <Typography variant='h6'>
                  Copyright © ReadJPNovels.com
                </Typography>
            </Box>
            </Grid>
        </Grid>
    </>
  )
}
