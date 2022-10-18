import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { AuthenticationContext } from '../Contexts/authentication';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © ReadJPNovels.com'}
      {/* <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '} */}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

/* const theme = createTheme(); */

export default function SignInSide() {

  const anonymousSignIn = useContext(AuthenticationContext);
  

  return (
    
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(./loginBackground.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <AccountCircleIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in anonymously
            </Typography>
            <Box>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={anonymousSignIn}
              >
                Sign In
              </Button>
              <Box sx={{
                display: { xs: 'flex', sm: 'none', md: 'none', lg: 'none', xl: 'none'},
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <img src='./Read Novels.svg' alt='ReadJPNovels' width='100%' height='auto'/>
              </Box>
              <Copyright sx={{ mt: 2 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>

  );
}