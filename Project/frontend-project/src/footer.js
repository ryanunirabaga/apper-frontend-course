import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Typography, Grid, Box } from '@mui/material'


export function Footer() {

    return (
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
    )
}


