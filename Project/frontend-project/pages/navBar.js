import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ColorModeContext } from '../Contexts/ColorMode';
import { useTheme } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import { useContext } from 'react';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


const drawerWidth = 240;
const navItems = [
  {
    'name': 'Home',
    'route': '/'
  },
  {
    'name': 'Browse',
    'route': '/browse'
  },
  {
    'name': 'About Us',
    'route': '/aboutUs'
  },
];


export function DrawerAppBar(props) {
  const router = useRouter();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);
  const colorModeToolTip = (theme.palette.mode === 'dark') ? 'light' : 'dark';

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  function RouterPush(event) {
    const route = event.target.getAttribute('route');
    router.push(route);
  }
  
  function DrawerRouterPush(event) {
    const buttonName = event.target.innerHTML;
    const route = navItems.filter(item=> item.name === buttonName);
    router.push(route[0].route);
  }


  useEffect(()=>{
    {RouterPush}
  },[])

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <img className='readNovelsLogo' src='./Read Novels.svg'/>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={DrawerRouterPush}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
          <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
            <Typography>
              {colorModeToolTip} mode &nbsp;
            </Typography>
            {theme.palette.mode === 'dark' ? <Brightness5Icon /> : <DarkModeIcon />}
          </IconButton>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" position='static' elevation={0} /* sx={{backgroundColor: 'rgba(181, 179, 179, 0.2)'}} */>
        <Toolbar>
          <Box sx={{ display: { xs: 'none', sm: 'block', sm: 'flex' }, mr: 1 }}>
          <img className='readNovelsLogo' src='./Read Novels.svg'/>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           {/* 読んだ Novels */}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.name} sx={{ color: 'inherit' }} onClick={RouterPush} route={item.route}>
                {item.name}
              </Button>
            ))}
            <Tooltip title={`switch to ${colorModeToolTip} mode`} arrow>
              <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness5Icon /> : <DarkModeIcon />}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
