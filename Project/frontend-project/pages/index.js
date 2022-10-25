import { Typography, Grid, Box, CssBaseline } from '@mui/material';
import { BrowseCard, DownloadCard, EnjoyCard } from '../src/card';
import { AuthenticationContext } from '../Contexts/authentication';
import { useContext, useEffect } from 'react';
import { DrawerAppBar } from '../src/navBar';
import { LatestNovels } from '../src/carousel';
import { Footer } from '../src/footer';

export default function Home() {

  const { logRoute } = useContext(AuthenticationContext);

  useEffect(()=>{
    logRoute();
  });

  return (
    <>
        <CssBaseline />
        <DrawerAppBar/>
        <Grid container sx={{
          minHeight: '500px',
          backgroundImage: 'url(./Homepage1.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          justifyContent: 'space-around',
          pt: 2
        }}>
          <Grid item lg={4} md={12} sm={12} xs={12}
            sx={{
              display:'flex',
              alignItems: 'Center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                display:'flex',
                alignItems: 'Center',
                justifyContent: 'center',
                p: 2
              }}
            >
              <Typography variant='h4'
                sx={{
                  textAlign: 'center',
                }}
              >
                Check out our latest releases!
              </Typography>
            </Box>
          </Grid>

          <Grid item lg={4} md={12} sm={12} xs={12}>

              <LatestNovels/>
          </Grid>
        </Grid>
        <Grid container justifyContent={'space-around'}
        sx={{
          backgroundColor: '#6e6e6e',
          minHeight: '400px',
        }}>
            <BrowseCard/>
            <DownloadCard/>
            <EnjoyCard/>
        </Grid>
        {/* footer */}
        <Footer/>
    </>
  )
}
